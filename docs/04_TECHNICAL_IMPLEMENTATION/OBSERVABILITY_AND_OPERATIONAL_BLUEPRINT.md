# Observability and Operational Blueprint

## Purpose
Provide enough operational visibility to diagnose the MVP factory loop without expanding into a full enterprise observability product.

## Required Signals
- request/operation trace ID
- build ID and revision
- stage and gate
- operation type
- duration
- outcome
- safe error category

## Metrics
At minimum:
- build creation success/failure
- gate block rate by stage
- validation pass/block rate
- connection readiness failures
- deployment/export success/failure
- operation latency

## Logging
Use structured logs. Redact secrets and sensitive provider payloads. Log state transitions and external operation references where safe.

## Operational States
External work must be observable as `IN_PROGRESS`, `SUCCEEDED`, or `FAILED`; timeouts must not be represented as success.

## MVP Boundary
No full distributed tracing platform, enterprise SLO product, or advanced observability dashboard is required by MVP. The implementation only needs the telemetry necessary for correctness, debugging, and traceability.
