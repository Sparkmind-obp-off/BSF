# Connector Implementation Contract

## Contract
```text
Connector
├── identity/type
├── capability
├── configuration schema
├── authorize/configure
├── readiness check
├── metadata/resource reference
├── safe error mapping
└── disconnect/revoke when supported
```

## Adapter Rule
Core/application code depends on the connector interface. Provider-specific SDKs, authentication mechanisms, and request formats remain inside adapters.

## Secret Boundary
Credentials, tokens, API keys, and private connection material must be stored/retrieved through a dedicated secret mechanism. Build/configuration persistence stores only non-secret references and readiness metadata.

## Failure Semantics
Normalize provider failures into stable categories: `NOT_CONFIGURED`, `UNAUTHORIZED`, `UNAVAILABLE`, `INVALID`, `RATE_LIMITED`, `UNKNOWN`. Do not leak provider secrets or sensitive payloads.

## Connection Gate
Required connections must reach `READY` before the build can pass the Connection Gate.
