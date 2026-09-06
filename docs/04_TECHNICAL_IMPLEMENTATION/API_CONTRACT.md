# API Contract

## Contract Style
The API is resource-oriented and command-oriented where a state transition is the business action. Transport technology is implementation-dependent; DTO semantics are canonical.

## Core Resources
`systems`, `modules`, `builds`, `configurations`, `connections`, `validations`, `deployment-targets`.

## Core Operations
```text
GET  /systems
GET  /systems/{id}
GET  /modules
GET  /modules/{id}
POST /builds
GET  /builds/{id}
POST /builds/{id}/compose
POST /builds/{id}/configuration/resolve
POST /builds/{id}/connections/check
POST /builds/{id}/validate
POST /builds/{id}/deploy
POST /builds/{id}/export
POST /builds/{id}/reuse
```

## Standard Response
```json
{
  "data": {},
  "state": "CONFIGURED",
  "revision": 12,
  "gate": {"status": "READY", "blocking_findings": 0 },
  "trace_id": "..."
}
```

## Error Contract
```json
{
  "error": {
    "code": "GATE_BLOCKED",
    "message": "Required connection is not ready.",
    "stage": "CONNECTION",
    "object_id": "...",
    "action": "Configure and verify the required connection"
  },
  "trace_id": "..."
}
```

## Rules
- Never expose secrets in responses.
- State-changing commands return the resulting state/revision.
- Validation and deployment requests reference concrete build revisions.
- Errors are actionable and stable enough for UI mapping.
