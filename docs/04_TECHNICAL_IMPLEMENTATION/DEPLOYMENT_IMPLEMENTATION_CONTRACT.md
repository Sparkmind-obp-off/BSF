# Deployment Implementation Contract

## Pipeline
```text
Validated Build → Target Resolution → Readiness Check → Prepare → Execute/Handoff → Record Outcome
```

## Target Contract
```text
id/type
configuration schema
resource requirements
readiness check
supported operation
ownership metadata
execute/export operation
outcome mapping
```

## Preconditions
Definition, composition, configuration, required connections, required validation, and target readiness must all pass.

## Outcome
Persist `NOT_READY`, `READY`, `IN_PROGRESS`, `SUCCEEDED`, or `FAILED` with build revision, target identity, operation identity, timestamps, and safe diagnostic information.

## Safety
Deployment adapters must not assume universal infrastructure control. Target-specific provisioning is only implemented where explicitly supported.
