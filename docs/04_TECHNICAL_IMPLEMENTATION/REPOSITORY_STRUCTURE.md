# Repository Structure

## Target Structure
```text
BSF/
├── docs/
│   ├── 00_OFFICIAL/
│   ├── 01_PRODUCT/
│   ├── 02_ARCHITECTURE/
│   ├── 03_UX_UI/
│   └── 04_TECHNICAL_IMPLEMENTATION/
├── apps/
│   └── factory-web/              # factory experience boundary
├── packages/
│   ├── domain/                   # entities, value objects, invariants
│   ├── application/              # use cases/orchestration
│   ├── gates/                    # gate evaluation
│   ├── configuration/            # resolution and validation
│   ├── assets/                   # system/module catalog access
│   ├── connectors/               # connector contracts + adapters
│   ├── deployment/               # target contracts + adapters
│   ├── persistence/              # repository implementations
│   └── contracts/                 # shared DTO/API contracts
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── contract/
│   └── acceptance/
└── README.md
```

## Dependency Direction
```text
UI → Application → Domain
             ↘ Contracts
Infrastructure/Adapters → Domain/Application contracts
Persistence → Repository interfaces
```

## Rules
- Domain must not import provider SDKs.
- UI must not implement gate/business rules.
- Adapters must conform to stable contracts.
- Tests mirror the responsibility they verify.
- Exact framework names are intentionally deferred by ADR-006.
