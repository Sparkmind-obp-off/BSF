# Domain and Data Model

## Core Entities
| Entity | Purpose | Key identity |
|---|---|---|
| System | Canonical reusable system definition | system_id + version |
| Module | Canonical reusable capability | module_id + version |
| Build | Concrete construction instance | build_id |
| Configuration | Build-resolved settings | configuration_id + revision |
| Connection | External resource reference/status | connection_id |
| Validation | Evaluation result for a build revision | validation_id |
| Deployment Target | Supported destination/output | target_id/type |

## Build Aggregate
```text
Build
├── system reference
├── selected module references
├── configuration revision
├── connection references
├── validation results
├── deployment target reference
└── state/revision metadata
```

## Invariants
- A Build references versioned assets.
- Build state transitions are ordered and gate-controlled.
- Configuration revisions are immutable once evaluated.
- Validation records identify the exact evaluated revision.
- Connection records contain references/status, not raw secrets.
- Deployment outcomes reference the build revision and target.

## Persistence Requirements
The persistence layer must support lookup by identity, version/revision, current state, and relationship traversal required by the factory workflow. Schema technology is not locked.
