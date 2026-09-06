# BSF — User Journey Architecture

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## 1. Shared Journey

All entry paths converge into one factory lifecycle:

```text
Choose / Define → Compose → Configure → Connect → Validate → Deploy / Export
```

## 2. Official System Journey

```text
Home
 → Official Library
 → Filter / Browse
 → System Detail
 → Review blueprint + requirements
 → Choose System
 → Compose
 → Configure
 → Connect
 → Validate
 → Deploy / Export
```

Key UX goal: user understands what the official system contains and requires before creating a concrete build.

## 3. Custom Journey

```text
Home
 → Custom Builder
 → Define name + purpose + outcome
 → Define capabilities
 → Select initial modules
 → Compose
 → Configure
 → Connect
 → Validate
 → Deploy / Export
```

The UI must avoid forcing the user to write implementation details at definition time.

## 4. Module Journey

```text
Home
 → Module Library
 → Browse / inspect modules
 → Select modules
 → Compatibility check
 → Compose System
 → Configure
 → Connect
 → Validate
 → Deploy / Export
```

Compatibility feedback must appear before the user reaches a misleading “ready” state.

## 5. Reconfiguration Journey

```text
Build
 → Stage / object to change
 → Edit build configuration or composition
 → Re-evaluate affected gates
 → Validation
 → Deploy / Export
```

Material changes may invalidate downstream readiness. The UI must make this visible rather than silently preserving stale readiness.

## 6. Decision Points

At every stage the user should encounter one clear primary question:
- Entry: Which way do you want to start?
- Definition: What system are you building?
- Composition: What capabilities/modules form it?
- Configuration: How should this build behave?
- Connection: Which required resources are available?
- Validation: What is blocking readiness?
- Deployment: Where should the validated build go?

## 7. Failure Journey

```text
Action
 ↓
Failure / Blocker
 ↓
Explain context
 ↓
Point to affected object/stage
 ↓
Correct
 ↓
Re-evaluate affected gate
```

## 8. Completion Journey

A successful deployment/export must show the actual recorded outcome, target, and relevant build state. The UI must distinguish `READY`, `IN_PROGRESS`, `SUCCEEDED`, and `FAILED`.

## 9. Journey Acceptance

- No entry path creates a parallel lifecycle.
- Every path converges into the same stages.
- User can recover from blockers.
- Material changes visibly trigger affected readiness checks.
- Success states reflect recorded outcomes rather than optimistic UI.
