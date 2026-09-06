export const BUILD_STATES = Object.freeze([
  'DRAFT','DEFINED','COMPOSED','CONFIGURED','CONNECTED','VALIDATED','DEPLOYABLE','DEPLOYED','EXPORTED'
]);

export const STAGES = Object.freeze([
  'definition','composition','configuration','connection','validation','deployment'
]);

export const GATES = Object.freeze({
  definition: 'Definition Gate',
  composition: 'Composition Gate',
  configuration: 'Configuration Gate',
  connection: 'Connection Gate',
  validation: 'Validation Gate',
  deployment: 'Deployment Gate'
});

const nextState = {
  DRAFT: 'DEFINED', DEFINED: 'COMPOSED', COMPOSED: 'CONFIGURED', CONFIGURED: 'CONNECTED',
  CONNECTED: 'VALIDATED', VALIDATED: 'DEPLOYABLE'
};

export function createBuild({ id, source, name }) {
  if (!id || !name) throw new Error('BUILD_ID_AND_NAME_REQUIRED');
  if (!['official','custom','modules'].includes(source)) throw new Error('INVALID_BUILD_SOURCE');
  return {
    id, name, source, state: 'DRAFT', revision: 0,
    systemId: null, moduleIds: [], configuration: {}, connections: {},
    validations: [], deployment: null, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
  };
}

export function advanceState(build, target) {
  if (build.state === target) return build;
  if (nextState[build.state] !== target) throw new Error(`INVALID_STATE_TRANSITION:${build.state}->${target}`);
  return { ...build, state: target, revision: build.revision + 1, updatedAt: new Date().toISOString() };
}

export function addModules(build, moduleIds) {
  const merged = [...new Set([...build.moduleIds, ...moduleIds])];
  return { ...build, moduleIds: merged, state: 'COMPOSED', revision: build.revision + 1, updatedAt: new Date().toISOString() };
}

export function setConfiguration(build, configuration) {
  return { ...build, configuration: structuredClone(configuration), state: 'CONFIGURED', revision: build.revision + 1, updatedAt: new Date().toISOString() };
}

export function setConnection(build, key, connection) {
  return { ...build, connections: { ...build.connections, [key]: { ...connection } }, state: 'CONNECTED', revision: build.revision + 1, updatedAt: new Date().toISOString() };
}

export function recordValidation(build, result) {
  return { ...build, validations: [...build.validations, result], state: result.status === 'PASS' ? 'VALIDATED' : build.state, revision: build.revision + 1, updatedAt: new Date().toISOString() };
}
