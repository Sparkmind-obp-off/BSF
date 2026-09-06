import { createBuild, defineBuild, addModules, setConfiguration, setConnection, recordValidation, advanceState } from '../../domain/src/index.js';
import { validateComposition, validateConfiguration, validateConnections } from '../../gates/src/index.js';
export class FactoryApplication {
  constructor({repository,catalog}){this.repository=repository;this.catalog=catalog;}
  create(input){return this.repository.create(createBuild({...input,id:input.id??crypto.randomUUID()}));}
  get(id){return this.repository.get(id);} list(){return this.repository.list();}
  define(id,patch={}){const b=this.require(id);return this.repository.save(defineBuild(b,patch));}
  compose(id,moduleIds){const b=this.require(id),c=addModules(b,moduleIds),gate=validateComposition(c,this.catalog);if(gate.status==='BLOCK')return{build:b,gate};return{build:this.repository.save(c),gate};}
  configure(id,configuration){const b=this.require(id),c=setConfiguration(b,configuration),gate=validateConfiguration(c);if(gate.status==='BLOCK')return{build:b,gate};return{build:this.repository.save(c),gate};}
  connect(id,key,connection){const b=this.require(id),c=setConnection(b,key,connection),gate=validateConnections(c);if(gate.status==='BLOCK')return{build:b,gate};return{build:this.repository.save(c),gate};}
  validate(id){
    let b=this.require(id);
    if(!['CONFIGURED','CONNECTED','VALIDATED'].includes(b.state)) throw new Error('BUILD_NOT_READY_FOR_VALIDATION');
    const stages=[validateComposition(b,this.catalog),validateConfiguration(b),validateConnections(b)];
    const findings=stages.flatMap(x=>x.findings).filter(x=>x.severity==='BLOCKING');
    const result={status:findings.length?'BLOCK':'PASS',buildId:b.id,revision:b.revision,findings,stages,evaluatedAt:new Date().toISOString()};
    if(result.status==='PASS'&&b.state==='CONFIGURED') b=advanceState(b,'CONNECTED');
    if(result.status==='PASS'&&b.state==='CONNECTED') b=advanceState(b,'VALIDATED');
    return{build:this.repository.save(recordValidation(b,result)),result};
  }
  prepareDeployment(id,target='export'){
    const b=this.require(id);
    if(target!=='export') throw new Error('UNSUPPORTED_DEPLOYMENT_TARGET');
    if(b.state==='DEPLOYABLE'&&b.deployment?.target===target&&b.deployment?.status==='READY') return b;
    if(b.state!=='VALIDATED') throw new Error('BUILD_NOT_VALIDATED');
    const latest=b.validations.at(-1);
    if(!latest||latest.status!=='PASS'||b.validationRevision!==latest.revision) throw new Error('VALIDATION_STALE');
    const c=advanceState(b,'DEPLOYABLE');
    return this.repository.save({...c,deployment:{target,status:'READY',revision:c.revision,preparedAt:new Date().toISOString()},updatedAt:new Date().toISOString()});
  }
  require(id){const b=this.repository.get(id);if(!b)throw new Error('BUILD_NOT_FOUND');return b;}
}
