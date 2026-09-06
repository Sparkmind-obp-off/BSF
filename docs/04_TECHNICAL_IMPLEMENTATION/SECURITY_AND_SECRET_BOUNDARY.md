# Security and Secret Boundary

## Principles
- Least privilege.
- External-resource ownership remains explicit.
- Secrets are isolated from normal domain records.
- Sensitive provider responses are redacted before persistence/logging.
- Every state-changing operation has an auditable trace identity.

## Secret Lifecycle
```text
Secret Input → Secret Store/Reference → Connector Adapter → External Provider
                         ↓
                 Non-secret reference only
                         ↓
                    Build Record
```

## Never Persist in Ordinary Build Data
API keys, passwords, access tokens, private keys, raw authorization headers, or provider payloads containing secrets.

## Authorization
Application operations must verify the actor/context is allowed to access the build and its referenced resources. Connector adapters must request only the permissions necessary for their supported operation.

## Logging
Logs contain trace IDs, operation IDs, stage, safe error category, and object identity. Secrets and sensitive payloads are redacted.

## Security Gate
Security/readiness failures that affect required resources are blocking conditions for the relevant gate.
