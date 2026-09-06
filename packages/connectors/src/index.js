export class ConnectorRegistry {
  #connectors = new Map();
  register(connector) {
    if (!connector?.type || typeof connector.checkReady !== 'function') throw new Error('INVALID_CONNECTOR_CONTRACT');
    this.#connectors.set(connector.type, connector);
  }
  get(type) { return this.#connectors.get(type) ?? null; }
  readiness(type, config = {}) {
    const connector = this.get(type);
    if (!connector) return { status:'UNAVAILABLE', reason:'CONNECTOR_NOT_REGISTERED' };
    return connector.checkReady(config);
  }
}

export const demoConnector = {
  type: 'demo',
  checkReady(config) {
    return config?.enabled === true ? { status:'READY' } : { status:'NOT_CONFIGURED', reason:'Enable the demo connection.' };
  }
};
