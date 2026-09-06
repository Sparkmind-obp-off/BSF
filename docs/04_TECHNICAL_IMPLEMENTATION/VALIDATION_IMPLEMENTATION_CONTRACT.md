# Validation Implementation Contract

## Pipeline
```text
Build Revision → Applicable Rules → Evaluation → Findings → Gate Decision
```

## Rule Contract
Each rule defines:
- rule identity/version
- applicable object/stage
- preconditions
- evaluation logic
- severity
- finding code/message
- corrective action

## Deterministic Gate
`blocking findings > 0 → BLOCK`; otherwise `PASS`.

## Revision Safety
A validation result is immutable and bound to the evaluated build revision. Material changes invalidate affected validation results and require re-evaluation.

## Domains
Definition, Composition, Configuration, Connection, and Deployment readiness. Validators must not silently mutate the build.
