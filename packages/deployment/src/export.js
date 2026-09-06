export class ExportDeploymentAdapter {
  constructor({ repository }) { this.repository = repository; }

  prepare(build) {
    if (build.state !== 'DEPLOYABLE' && build.state !== 'VALIDATED') throw new Error('BUILD_NOT_VALIDATED');
    return { status:'READY', target:'export', buildId:build.id };
  }

  execute(build) {
    const payload = JSON.stringify({
      schemaVersion:'1.0',
      buildId:build.id,
      name:build.name,
      source:build.source,
      state:build.state,
      revision:build.revision,
      systemId:build.systemId,
      moduleIds:build.moduleIds,
      configuration:build.configuration,
      connections:Object.fromEntries(
        Object.entries(build.connections).map(([k,v])=>[k,{type:v.type,status:v.status,reference:v.reference}])
      )
    }, null, 2);
    return { status:'SUCCEEDED', target:'export', format:'json', payload };
  }
}
