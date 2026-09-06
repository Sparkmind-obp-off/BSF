const systems = [
  { id: 'official-crm', version: '1.0.0', name: 'Business CRM', purpose: 'Manage customers and sales workflow', moduleIds: ['customer-records','sales-pipeline'] },
  { id: 'official-content-engine', version: '1.0.0', name: 'Content Engine', purpose: 'Plan and manage business content', moduleIds: ['content-planner','approval-flow'] }
];

const modules = [
  { id: 'customer-records', version: '1.0.0', name: 'Customer Records', capabilities: ['customer-management'], inputs: [], outputs: ['customers'], dependencies: [], connectionRequirements: [] },
  { id: 'sales-pipeline', version: '1.0.0', name: 'Sales Pipeline', capabilities: ['pipeline-management'], inputs: ['customers'], outputs: ['deals'], dependencies: ['customer-records'], connectionRequirements: [] },
  { id: 'content-planner', version: '1.0.0', name: 'Content Planner', capabilities: ['content-planning'], inputs: [], outputs: ['content-items'], dependencies: [], connectionRequirements: [] },
  { id: 'approval-flow', version: '1.0.0', name: 'Approval Flow', capabilities: ['approval'], inputs: ['content-items'], outputs: ['approved-content'], dependencies: ['content-planner'], connectionRequirements: [] }
];

export const catalog = {
  listSystems: () => systems.map(x => structuredClone(x)),
  getSystem: id => structuredClone(systems.find(x => x.id === id) ?? null),
  listModules: () => modules.map(x => structuredClone(x)),
  getModule: id => structuredClone(modules.find(x => x.id === id) ?? null),
  resolveModules: ids => ids.map(id => modules.find(x => x.id === id)).filter(Boolean).map(x => structuredClone(x))
};
