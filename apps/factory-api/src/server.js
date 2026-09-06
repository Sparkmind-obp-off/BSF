import { createServer } from 'node:http';
import { FactoryApplication } from '../../../packages/application/src/factory.js';
import { MemoryBuildRepository } from '../../../packages/persistence/src/memory.js';
import { catalog } from '../../../packages/assets/src/catalog.js';

const app = new FactoryApplication({ repository: new MemoryBuildRepository(), catalog });

function json(res, status, body) {
  res.writeHead(status, { 'content-type':'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

async function body(req) {
  let raw = '';
  for await (const chunk of req) raw += chunk;
  return raw ? JSON.parse(raw) : {};
}

function errorResponse(error) {
  const known = new Set(['BUILD_NOT_FOUND','BUILD_ALREADY_EXISTS','BUILD_NOT_VALIDATED','INVALID_BUILD_SOURCE','BUILD_ID_AND_NAME_REQUIRED']);
  return { code: known.has(error.message) ? error.message : 'INTERNAL_ERROR', message: error.message };
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const parts = url.pathname.split('/').filter(Boolean);
    if (req.method === 'GET' && url.pathname === '/health') return json(res, 200, { status:'ok', service:'bsf-factory-api' });
    if (req.method === 'GET' && url.pathname === '/api/systems') return json(res, 200, { data:app.catalog.listSystems() });
    if (req.method === 'GET' && url.pathname === '/api/modules') return json(res, 200, { data:app.catalog.listModules() });
    if (req.method === 'GET' && url.pathname === '/api/builds') return json(res, 200, { data:app.list() });
    if (req.method === 'POST' && url.pathname === '/api/builds') return json(res, 201, { data:app.create(await body(req)) });
    if (parts[0] === 'api' && parts[1] === 'builds' && parts[2]) {
      const id = parts[2];
      if (req.method === 'GET' && parts.length === 3) return json(res, 200, { data:app.get(id) });
      if (req.method === 'POST' && parts[3] === 'compose') return json(res, 200, app.compose(id, (await body(req)).moduleIds ?? []));
      if (req.method === 'POST' && parts[3] === 'configure') return json(res, 200, app.configure(id, (await body(req)).configuration ?? {}));
      if (req.method === 'POST' && parts[3] === 'connect') { const b = await body(req); return json(res, 200, app.connect(id, b.key, b.connection)); }
      if (req.method === 'POST' && parts[3] === 'validate') return json(res, 200, app.validate(id));
      if (req.method === 'POST' && parts[3] === 'deploy') return json(res, 200, { data:app.prepareDeployment(id, (await body(req)).target ?? 'export') });
    }
    return json(res, 404, { error:{ code:'NOT_FOUND', message:'Route not found' } });
  } catch (error) {
    const status = error.message === 'BUILD_NOT_FOUND' ? 404 : error.message.startsWith('BUILD_') || error.message.startsWith('INVALID_') ? 400 : 500;
    return json(res, status, { error:errorResponse(error) });
  }
});

const port = Number(process.env.PORT ?? 3000);
if (process.env.NODE_ENV !== 'test') server.listen(port, () => console.log(`BSF Factory API listening on ${port}`));
export { server, app };
