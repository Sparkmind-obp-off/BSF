import test from 'node:test';
import assert from 'node:assert/strict';
import { FactoryApplication } from '../packages/application/src/factory.js';
import { MemoryBuildRepository } from '../packages/persistence/src/memory.js';
import { catalog } from '../packages/assets/src/catalog.js';

const makeApp = () => new FactoryApplication({ repository:new MemoryBuildRepository(), catalog });

test('custom build follows the factory lifecycle through validation', () => {
  const app = makeApp();
  let { build } = app.create({ name:'Demo CRM', source:'custom' });
  assert.equal(build.state,'DRAFT');
  ({ build } = app.compose(build.id, ['customer-records','sales-pipeline']));
  assert.equal(build.state,'COMPOSED');
  ({ build } = app.configure(build.id, { currency:'IDR' }));
  assert.equal(build.state,'CONFIGURED');
  ({ build } = app.validate(build.id));
  assert.equal(build.state,'VALIDATED');
  assert.equal(build.validations.at(-1).status,'PASS');
});

test('invalid composition is blocked', () => {
  const app = makeApp();
  const { build } = app.create({ name:'Broken', source:'modules' });
  const result = app.compose(build.id, ['sales-pipeline']);
  assert.equal(result.gate.status,'BLOCK');
  assert.equal(app.get(build.id).state,'DRAFT');
});

test('deployment preparation requires validation', () => {
  const app = makeApp();
  const { build } = app.create({ name:'Not Ready', source:'custom' });
  assert.throws(() => app.prepareDeployment(build.id), /BUILD_NOT_VALIDATED/);
});
