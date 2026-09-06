# Testing and Quality Blueprint

## Test Pyramid
1. **Unit** — domain invariants, configuration resolution, gate rules, state transitions.
2. **Contract** — API DTOs, connector contracts, deployment target contracts.
3. **Integration** — persistence, adapters, orchestration boundaries.
4. **Acceptance** — canonical Official, Custom, and Module factory journeys.

## Critical Scenarios
- invalid definition blocks progression
- incompatible modules block Composition Gate
- invalid configuration blocks Configuration Gate
- missing/unauthorized connection blocks Connection Gate
- blocking validation finding blocks Validation Gate
- unsupported/unready target blocks Deployment Gate
- material change invalidates affected downstream state
- repeated idempotent command does not duplicate side effects
- secrets never appear in records, responses, or logs

## Quality Gates
Every implementation slice must have tests for its happy path, blocking path, state transition, and failure recovery where applicable.

## Acceptance Baseline
A build is considered MVP-complete only when all canonical gates can be exercised deterministically from at least one supported implementation path.
