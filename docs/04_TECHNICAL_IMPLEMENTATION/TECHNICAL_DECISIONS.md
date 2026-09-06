# Technical Decisions

## TID-001 — Preserve Technology Agnosticism
No framework, database, cloud, or vendor is locked at this layer unless implementation work explicitly requires a decision.

## TID-002 — Domain First
Core entities, invariants, state transitions, and gate semantics are defined before infrastructure adapters.

## TID-003 — Contract-First Integrations
Connectors and deployment targets implement stable interfaces; provider details stay behind adapters.

## TID-004 — Revisioned Build State
Material mutations create explicit revisions so validation and deployment can be tied to deterministic state.

## TID-005 — Gate Enforcement in Application/Domain Boundary
UI may display gate state but cannot be the authoritative enforcement mechanism.

## TID-006 — Secrets Outside Domain Persistence
Secret material is handled by a dedicated secret boundary and represented by references in domain records.

## TID-007 — No Hidden Scope Expansion
Technical convenience does not authorize marketplace, billing, universal infrastructure, arbitrary plugins, unlimited AI, or unrelated generation capabilities.

## Decision Rule
```text
Product Requirement
      ↓
Architecture Constraint
      ↓
Technical Need
      ↓
Implementation Decision
      ↓
Test / Traceability Evidence
```
