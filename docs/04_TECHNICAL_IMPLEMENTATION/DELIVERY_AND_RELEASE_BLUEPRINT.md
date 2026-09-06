# Delivery and Release Blueprint

## Delivery Units
Each delivery unit should be independently reviewable and traceable to product requirements and architecture responsibilities.

## Release Gates
```text
Code Complete
  ↓
Unit/Contract Tests Pass
  ↓
Integration Tests Pass
  ↓
Acceptance Journeys Pass
  ↓
Security/Secret Review
  ↓
Traceability Review
  ↓
MVP Release Candidate
```

## Release Requirements
- no unresolved blocking defects in the canonical factory loop
- migrations/schema changes are versioned
- connector/deployment adapters declare supported operations
- errors remain actionable
- build-state transitions remain deterministic
- secrets are protected
- documentation reflects implemented behavior

## Rollback Principle
Application releases and persisted data migrations must have an explicit compatibility/rollback strategy before production use. External deployments must report provider-specific rollback limitations rather than claiming universal rollback.
