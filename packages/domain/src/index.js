export const BUILD_STATES = Object.freeze(['DRAFT','DEFINED','COMPOSED','CONFIGURED','CONNECTED','VALIDATED','DEPLOYABLE','DEPLOYED','EXPORTED']);
export const STAGES = Object.freeze(['definition','composition','configuration','connection','validation','deployment']);
export const GATES = Object.freeze({ definition:'Definition Gate', composition:'Composition Gate', configuration:'Configuration Gate', connection:'Connection Gate', validation:'Validation Gate', deployment:'Deployment Gate' });
const nextState = { DRAFT:'DEFINED', DEFINED:'COMPOSED', COMPOSED:'CONFIGURED', CONFIGURED:'CONNECTED', CONNECTED:'VALIDATED', VALIDATED:'DEPLOYABLE' };
const touch = (build, patch, state) => ({ ...build, ...patch, state, revision:build.revision+1, updatedAt:new Date().toISOString() });
export function createBuild({ id, source, name }) {
  if (!id || !name) throw new Error('BUILD_ID_AND_NAME_REQUIRED');
  if (!['official','custom','modules'].includes(source)) throw new Error('INVALID_BUILD_SOURCE');
  return { id, name, source, state:'DRAFT', revision:0, systemId:null, moduleIds:[], configuration:{}, connections:{}, validations:[], deployment:null, createdAt:new Date().toISOString(), updatedAt:new Date().toISOString() };
}
export function defineBuild(build, patch = {}) { return touch(build, patch, 'DEFINED'); }
export function advanceState(build, target) {
  if (build.state === target) return build;
  if (nextState[build.state] !== target) throw new Error(`INVALID_STATE_TRANSITION:${build.state}->${target}`);
  return touch(build, {}, target);
}
export function addModules(build, moduleIds) {
  if (build.state !== 'DEFINED' && build.state !== 'COMPOSED') throw new Error('BUILD_NOT_DEFINED');
  return touch(build, { moduleIds:[...new Set([...build.moduleIds,...moduleIds])] }, 'COMPOSED');
}
export function setConfiguration(build, configuration) {
  if (build.state !== 'COMPOSED' && build.state !== 'CONFIGURED') throw new Error('BUILD_NOT_COMPOSED');
  return touch(build, { configuration:structuredClone(configuration) }, 'CONFIGURED');
}
export function setConnection(build, key, connection) {
  if (build.state !== 'CONFIGURED' && build.state !== 'CONNECTED') throw new Error('BUILD_NOT_CONFIGURED');
  return touch(build, { connections:{...build.connections,[key]:{...connection}} }, 'CONNECTED');
}
export function recordValidation(build, result) { return touch(build, { validations:[...build.validations,result] }, result.status === 'PASS' ? 'VALIDATED' : build.state); }
