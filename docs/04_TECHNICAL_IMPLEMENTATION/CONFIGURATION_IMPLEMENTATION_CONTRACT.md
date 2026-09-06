# Configuration Implementation Contract

## Resolution
```text
Asset Defaults → System Defaults → Build Configuration → Resolved Configuration
```

## Configuration Scopes
- system
- module
- composition
- connection requirement
- deployment/export
- environment value

## Requirements
Configuration schemas must be versioned and validate types, required fields, allowed values, dependencies, and conflicts.

## Secret Separation
Secret-valued fields are represented by secret references, never plaintext persisted configuration.

## Change Semantics
Every material change creates a new build/configuration revision and marks affected downstream connection, validation, and deployment readiness as stale.

## Output
The resolver returns a deterministic, validated configuration snapshot suitable for downstream gates and execution.
