import test from 'node:test';
import assert from 'node:assert/strict';
import { FactoryApplication } from '../packages/application/src/factory.js';
import { MemoryBuildRepository } from '../packages/persistence/src/memory.js';
import { catalog } from '../packages/assets/src/catalog.js';
import { ExportDeploymentAdapter } from '../packages/deployment/src/export.js';
const makeApp=()=>new FactoryApplication({repository:new MemoryBuildRepository(),catalog});

function makeConfiguredBuild(app,name='Demo CRM'){
  let {build}=app.create({name,source:'custom'});
  build=app.define(build.id);
  ({build}=app.compose(build.id,['customer-records','sales-pipeline']));
  ({build}=app.configure(build.id,{currency:'IDR'}));
  return build;
}

test('custom build follows canonical lifecycle through validation',()=>{const app=makeApp();let build=makeConfiguredBuild(app);assert.equal(build.state,'CONFIGURED');({build}=app.validate(build.id));assert.equal(build.state,'VALIDATED');assert.equal(build.validations.at(-1).status,'PASS');assert.equal(build.validations.at(-1).revision,build.revision);});
test('invalid composition is blocked',()=>{const app=makeApp();let{build}=app.create({name:'Broken',source:'modules'});app.define(build.id);const result=app.compose(build.id,['sales-pipeline']);assert.equal(result.gate.status,'BLOCK');assert.equal(app.get(build.id).state,'DEFINED');});
test('validation cannot start before configuration',()=>{const app=makeApp();const{build}=app.create({name:'Too Early',source:'custom'});app.define(build.id);app.compose(build.id,['customer-records']);assert.throws(()=>app.validate(build.id),/BUILD_NOT_READY_FOR_VALIDATION/);});
test('material configuration change invalidates previous validation for deployment',()=>{const app=makeApp();let build=makeConfiguredBuild(app);({build}=app.validate(build.id));assert.equal(build.state,'VALIDATED');({build}=app.configure(build.id,{currency:'USD'}));assert.equal(build.state,'CONFIGURED');assert.throws(()=>app.prepareDeployment(build.id),/BUILD_NOT_VALIDATED/);});
test('deployment preparation is validation-gated and idempotent',()=>{const app=makeApp();let build=makeConfiguredBuild(app);assert.throws(()=>app.prepareDeployment(build.id),/BUILD_NOT_VALIDATED/);({build}=app.validate(build.id));const prepared=app.prepareDeployment(build.id);assert.equal(prepared.state,'DEPLOYABLE');assert.equal(prepared.deployment.status,'READY');assert.deepEqual(app.prepareDeployment(build.id),prepared);});
test('deployment export does not leak connection secrets',()=>{const app=makeApp();let build=makeConfiguredBuild(app);({build}=app.connect(build.id,'crm',{type:'demo',status:'READY',reference:'secret-ref',apiKey:'SHOULD_NOT_PERSIST'}));assert.equal(app.get(build.id).connections.crm.apiKey,undefined);({build}=app.validate(build.id));const prepared=app.prepareDeployment(build.id);const exported=new ExportDeploymentAdapter({repository:null}).execute(prepared);assert.equal(exported.status,'SUCCEEDED');assert.equal(exported.payload.includes('SHOULD_NOT_PERSIST'),false);assert.equal(exported.payload.includes('secret-ref'),true);});
test('unsupported deployment target is blocked',()=>{const app=makeApp();let build=makeConfiguredBuild(app);({build}=app.validate(build.id));assert.throws(()=>app.prepareDeployment(build.id,'cloud'),/UNSUPPORTED_DEPLOYMENT_TARGET/);});
