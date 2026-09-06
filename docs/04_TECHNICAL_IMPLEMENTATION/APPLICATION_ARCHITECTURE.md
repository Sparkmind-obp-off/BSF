# Application Architecture

## Use-Case Services
The application layer exposes factory operations:

- `StartOfficialBuild`
- `DefineCustomBuild`
- `ComposeBuild`
- `ResolveConfiguration`
- `ManageConnections`
- `ValidateBuild`
- `PrepareDeployment`
- `ExecuteDeploymentOrExport`
- `ReuseBuild`

## Orchestration Pattern
```text
Command → Load Build → Check Current State → Execute Domain Operation
        → Persist Revision → Evaluate Affected Gate → Return Result
```

## Responsibilities
- Application services coordinate; they do not own UI state.
- Domain services enforce business invariants.
- Gate engine decides progression eligibility.
- Repositories persist state and asset references.
- Adapters communicate with external providers.

## Idempotency
Commands with external side effects require an idempotency key. Repeated requests must not create duplicate deployments or duplicate connection records.

## Transaction Boundary
A build-state mutation and its revision/audit record are committed atomically. External side effects are recorded with explicit operation status and correlation identity.
