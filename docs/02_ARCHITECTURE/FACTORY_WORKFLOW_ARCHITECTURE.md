# BSF Factory Workflow Architecture

**Status:** Official Architecture Layer  
**Version:** 1.0  
**Scope:** MVP  

## 1. Purpose

Defines the deterministic factory lifecycle from system definition through deployment/export.

## 2. Canonical Workflow

```text
ENTRY
  ↓
DEFINITION
  ↓
COMPOSITION
  ↓
CONFIGURATION
  ↓
CONNECTION
  ↓
VALIDATION
  ↓
DEPLOYMENT / EXPORT
  ↓
REUSE
```

## 3. Build State Machine

```text
DRAFT
  ↓
DEFINED
  ↓
COMPOSED
  ↓
CONFIGURED
  ↓
CONNECTED
  ↓
VALIDATED
  ↓
DEPLOYABLE
  ↓
DEPLOYED | EXPORTED
```

A change to a dependency invalidates downstream readiness as appropriate.

## 4. Factory Gates

| Gate | Entry condition | Pass condition | Failure behavior |
|---|---|---|---|
| Definition | Build exists | System definition is valid | Block composition |
| Composition | Definition passed | Selected components are compatible | Block configuration |
| Configuration | Composition passed | Required configuration is complete/valid | Block connection |
| Connection | Configuration passed | Required resources are available/authorized | Block validation |
| Validation | Connections ready | All blocking rules pass | Block deployment |
| Deployment | Build validated | Target preparation/execution succeeds | Record failure |

## 5. Entry Paths

### Official

`Home → Official Library → System Detail → Choose System → Compose → Configure → Connect → Validate → Deploy/Export`

### Custom

`Home → Custom Builder → Define System → Compose → Configure → Connect → Validate → Deploy/Export`

### Modules

`Home → Module Library → Select Modules → Compose System → Configure → Connect → Validate → Deploy/Export`

## 6. Transition Rules

- A transition is explicit and persisted.
- A failed gate cannot be silently skipped.
- Configuration changes require re-evaluation of affected downstream gates.
- Composition changes require re-evaluation of configuration, connection, validation, and deployment readiness.
- Connection changes require re-validation.
- Deployment/export is available only when required validation passes.
- Failed deployment/export must not produce a successful state.

## 7. Re-entry and Recovery

Builders may return to earlier stages to correct a build. The system preserves the build identity while recalculating dependent readiness.

## 8. Idempotency Principle

Repeated evaluation of the same unchanged build state should produce the same logical readiness result.

## 9. Workflow Events

The MVP may represent lifecycle changes through internal events or service calls, but the observable requirement is deterministic persisted state.

## 10. Acceptance Criteria

- [ ] Every build has an explicit lifecycle state.
- [ ] Every gate has pass/fail semantics.
- [ ] Blocking failures prevent invalid progression.
- [ ] Downstream state is invalidated when dependencies change.
- [ ] Official, Custom, and Module entry paths converge into the same factory lifecycle.
- [ ] Deployment/export requires validation readiness.

## 11. Baseline

> BSF factory workflow is a gated, deterministic lifecycle in which every build moves through definition, composition, configuration, connection, validation, and deployment/export readiness without bypassing required checks.
