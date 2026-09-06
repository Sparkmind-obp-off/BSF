# Technical Traceability

## Requirement → Implementation Mapping
| Product Requirement | Technical responsibility |
|---|---|
| FR-01 Factory Entry | factory-web + build creation use cases |
| FR-02 Official Discovery | system catalog/query services |
| FR-03 Custom Definition | build definition service |
| FR-04 Module Composition | module catalog + composition service |
| FR-05 System Blueprint | build aggregate + blueprint representation |
| FR-06 Configuration | schema + deterministic resolver |
| FR-07 Connections | connector contracts/adapters |
| FR-08 Validation | rule engine + validators + gates |
| FR-09 Build State | persisted state machine + revisions |
| FR-10 Deployment/Export | target registry + deployment adapters |
| FR-11 Reuse | versioned asset/build reference workflow |
| FR-12 Traceability | revisions, validation records, operation IDs |

## Non-Functional Mapping
- NFR-01 Clarity → stable API/error contract.
- NFR-02 Consistency → shared domain/state contracts.
- NFR-03 Extensibility → adapter interfaces and versioned assets.
- NFR-04 Isolation → module/package boundaries.
- NFR-05 Resource Ownership → external-resource/secret boundary.
- NFR-06 Actionable Errors → structured findings/errors.
- NFR-07 Deterministic State → revisioned transitions and gate evaluation.

## Trace Rule
No implementation capability is accepted into MVP unless it maps to a locked requirement, architecture responsibility, or required technical support for an existing contract.
