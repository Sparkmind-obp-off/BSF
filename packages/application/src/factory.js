import { createBuild, addModules, setConfiguration, setConnection, recordValidation, advanceState } from '../../domain/src/index.js';
import { validateComposition, validateConfiguration, validateConnections } from '../../gates/src/index.js';

export class FactoryApplication {
  constructor({ repository, catalog }) { this.repository = repository; this.catalog = catalog; }

  create(input) {
    const build = createBuild({ ...input, id: input.id ?? crypto.randomUUID() });
    return this.repository.create(build);
  }

  get(id) { return this.repository.get(id); }
  list() { return this.repository.list(); }

  compose(id, moduleIds) {
    const build = this.require(id);
    const candidate = addModules(build, moduleIds);
    const gate = validateComposition(candidate, this.catalog);
    if (gate.status === 'BLOCK') return { build, gate };
    return { build: this.repository.save(candidate), gate };
  }

  configure(id, configuration) {
    const build = this.require(id);
    const candidate = setConfiguration(build, configuration);
    const gate = validateConfiguration(candidate);
    if (gate.status === 'BLOCK') return { build, gate };
    return { build: this.repository.save(candidate), gate };
  }

  connect(id, key, connection) {
    const build = this.require(id);
    const candidate = setConnection(build, key, connection);
    const gate = validateConnections(candidate);
    if (gate.status === 'BLOCK') return { build, gate };
    return { build: this.repository.save(candidate), gate };
  }

  validate(id) {
    const build = this.require(id);
    const results = [
      validateComposition(build, this.catalog),
      validateConfiguration(build),
      validateConnections(build)
    ];
    const blocking = results.flatMap(r => r.findings).filter(f => f.severity === 'BLOCKING');
    const result = { status: blocking.length ? 'BLOCK' : 'PASS', buildId: build.id, revision: build.revision, findings: blocking, stages: results, evaluatedAt: new Date().toISOString() };
    const candidate = result.status === 'PASS' ? advanceState(build, 'VALIDATED') : build;
    return { build: this.repository.save(recordValidation(candidate, result)), result };
  }

  prepareDeployment(id, target = 'export') {
    const build = this.require(id);
    if (build.state !== 'VALIDATED' && build.state !== 'DEPLOYABLE') throw new Error('BUILD_NOT_VALIDATED');
    const candidate = build.state === 'VALIDATED' ? advanceState(build, 'DEPLOYABLE') : build;
    return this.repository.save({ ...candidate, deployment: { target, status:'READY' }, updatedAt:new Date().toISOString() });
  }

  require(id) { const build = this.repository.get(id); if (!build) throw new Error('BUILD_NOT_FOUND'); return build; }
}
