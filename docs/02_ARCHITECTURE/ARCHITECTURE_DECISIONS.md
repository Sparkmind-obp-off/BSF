# BSF Architecture Decisions

**Status:** Official Architecture Layer  
**Version:** 1.0  
**Scope:** MVP  

## ADR-001 — Factory-Oriented Layering

**Decision:** BSF uses Factory Experience, Factory Orchestration, Domain Core, Asset Libraries, Integration/Connector, Validation, Deployment/Export, and Persistence as logical architectural layers.

**Reason:** The Product Requirements define BSF as an orchestration factory rather than a generic application platform.

## ADR-002 — Reusable Assets Are Separate From Builds

**Decision:** Canonical Systems and Modules are referenced by concrete Builds rather than mutated by them.

**Reason:** Reuse is a core MVP value and requires isolation between source assets and user-specific build state.

## ADR-003 — Explicit Factory Gates

**Decision:** Definition, Composition, Configuration, Connection, Validation, and Deployment are explicit gates.

**Reason:** The MVP requires deterministic progression and validation before deployment.

## ADR-004 — Connector Abstraction

**Decision:** External resources are accessed through connector contracts instead of direct coupling between the core domain and providers.

**Reason:** BSF coordinates user-selected/client-owned resources and must preserve provider independence.

## ADR-005 — Target-Agnostic Deployment

**Decision:** Deployment/export uses a Deployment Target abstraction.

**Reason:** MVP supports deployment/export foundations without committing the factory to one infrastructure provider.

## ADR-006 — Technology-Agnostic Architecture

**Decision:** Framework, database, cloud, AI provider, and deployment vendor choices are deferred to technical implementation unless requirements force an earlier decision.

**Reason:** Product requirements define capabilities and boundaries, not a vendor stack.

## ADR-007 — Deterministic Persisted Build State

**Decision:** Build lifecycle and relevant validation/deployment outcomes are represented as durable state.

**Reason:** The MVP requires resumable, traceable, and deterministic factory behavior.

## ADR-008 — Validation Is a Gate, Not Decoration

**Decision:** Validation produces explicit blocking/non-blocking findings and controls progression.

**Reason:** The product requires actionable validation before deployment/export.

## ADR-009 — No Scope Expansion Through Architecture

**Decision:** Architecture documents may not introduce mandatory MVP capabilities that cannot be traced to Product Requirements.

**Reason:** Prevents architecture from becoming a source of uncontrolled product expansion.

## ADR-010 — Ownership-Aware Resource Model

**Decision:** BSF factory logic and reusable assets are distinguished from external resources owned by users/clients/providers.

**Reason:** The official product positioning is orchestration, not default ownership of AI, infrastructure, hosting, or databases.

## Architecture Decision Rule

```text
Product Requirement
       ↓
Architecture Need
       ↓
Architecture Decision
       ↓
Implementation Decision
```

If a proposed architectural decision cannot be justified by a product requirement, it must be treated as future scope or rejected.
