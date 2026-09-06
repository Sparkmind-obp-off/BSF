# API and Service Boundaries

## Boundary Map
```text
Factory UI
   ↓ HTTP/API boundary
Application Services
   ├── Catalog Service
   ├── Build Service
   ├── Configuration Service
   ├── Connection Service
   ├── Validation Service
   └── Deployment Service
        ↓
Domain + Gate Engine
        ↓
Repository / Adapter boundaries
```

## Service Rules
- Catalog services expose versioned reusable assets.
- Build service owns build lifecycle and state transitions.
- Configuration service owns resolution, schema validation, and invalidation signals.
- Connection service owns connection references/readiness, not provider secrets.
- Validation service owns rule evaluation and immutable findings.
- Deployment service owns target readiness, operation orchestration, and outcomes.

Services communicate through contracts rather than direct access to another service's persistence model.

## Consistency
A single build mutation must have one authoritative state transition. Cross-boundary asynchronous work must expose explicit operation status rather than pretending it is synchronous.
