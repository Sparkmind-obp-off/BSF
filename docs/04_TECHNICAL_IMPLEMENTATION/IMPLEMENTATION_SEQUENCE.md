# Implementation Sequence

## Phase 1 — Foundation
- repository/package boundaries
- domain entities and state machine
- persistence interfaces
- shared contracts

## Phase 2 — Asset and Composition
- System catalog
- Module catalog
- asset versioning
- compatibility/dependency evaluation
- build blueprint

## Phase 3 — Configuration
- configuration schemas
- deterministic resolver
- configuration validation
- revision/invalidation semantics

## Phase 4 — Connections
- connector contracts
- connection lifecycle
- secret-reference boundary
- readiness checks

## Phase 5 — Validation
- rule registry
- validators
- findings
- gate engine

## Phase 6 — Deployment/Export
- target registry
- readiness checks
- execution/handoff adapters
- outcome recording

## Phase 7 — Factory Experience
- entry surfaces
- builder workspace
- stage/gate UI
- actionable feedback

## Phase 8 — Hardening
- acceptance suite
- security review
- failure/retry testing
- traceability audit
- MVP release readiness

Each phase must preserve the canonical factory loop and avoid scope expansion.
