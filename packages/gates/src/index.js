export function validateComposition(build, catalog) {
  const modules = catalog.resolveModules(build.moduleIds);
  const findings = [];
  const known = new Set(modules.map(m => m.id));
  for (const id of build.moduleIds) if (!known.has(id)) findings.push({ severity:'BLOCKING', code:'MODULE_NOT_FOUND', objectId:id, message:'Selected module does not exist', action:'Remove the module or select a valid module.' });
  for (const module of modules) for (const dep of module.dependencies) if (!known.has(dep)) findings.push({ severity:'BLOCKING', code:'DEPENDENCY_MISSING', objectId:module.id, message:`Dependency ${dep} is missing`, action:`Add module ${dep}.` });
  return gateResult('composition', build, findings);
}

export function validateConfiguration(build) {
  const findings = [];
  if (!build.name?.trim()) findings.push({ severity:'BLOCKING', code:'BUILD_NAME_REQUIRED', objectId:build.id, message:'Build name is required', action:'Provide a build name.' });
  return gateResult('configuration', build, findings);
}

export function validateConnections(build) {
  const findings = [];
  for (const [key, value] of Object.entries(build.connections)) {
    if (value.status !== 'READY') findings.push({ severity:'BLOCKING', code:'CONNECTION_NOT_READY', objectId:key, message:'Required connection is not ready', action:'Configure and authorize the connection.' });
  }
  return gateResult('connection', build, findings);
}

export function gateResult(stage, build, findings) {
  return { stage, gate: `${stage[0].toUpperCase()}${stage.slice(1)} Gate`, status: findings.some(f => f.severity === 'BLOCKING') ? 'BLOCK' : 'PASS', buildId: build.id, revision: build.revision, findings, evaluatedAt: new Date().toISOString() };
}
