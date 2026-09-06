export class MemoryBuildRepository {
  #items = new Map();
  #events = [];

  create(build) {
    if (this.#items.has(build.id)) throw new Error('BUILD_ALREADY_EXISTS');
    this.#items.set(build.id, structuredClone(build));
    this.#events.push({ type: 'BUILD_CREATED', buildId: build.id, revision: build.revision, at: new Date().toISOString() });
    return structuredClone(build);
  }

  get(id) { return structuredClone(this.#items.get(id) ?? null); }

  save(build) {
    if (!this.#items.has(build.id)) throw new Error('BUILD_NOT_FOUND');
    this.#items.set(build.id, structuredClone(build));
    this.#events.push({ type: 'BUILD_CHANGED', buildId: build.id, revision: build.revision, at: new Date().toISOString() });
    return structuredClone(build);
  }

  list() { return [...this.#items.values()].map(x => structuredClone(x)); }
  events() { return structuredClone(this.#events); }
}
