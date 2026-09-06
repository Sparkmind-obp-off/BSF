# Database Schema Blueprint

> Logical schema only. Physical database technology is intentionally unlocked.

## Tables / Collections
```text
systems
- id, version, name, definition, status, created_at

modules
- id, version, name, metadata, status, created_at

builds
- id, source_type, system_ref, state, revision, created_at, updated_at

build_modules
- build_id, module_id, module_version, composition_order, config_ref

configurations
- id, build_id, revision, resolved_config, schema_version, created_at

connections
- id, build_id, requirement_key, resource_type, provider_ref, status, secret_ref

validations
- id, build_id, build_revision, rule_set_version, status, findings, created_at

deployment_targets
- id, type, name, config_schema_version, status

deployment_operations
- id, build_id, build_revision, target_id, operation, status, external_ref, timestamps

build_events
- id, build_id, revision, event_type, actor_ref, trace_id, metadata, created_at
```

## Integrity Rules
- Versioned assets are immutable references.
- `build_modules` must reference existing module versions.
- Validation must reference the exact build revision evaluated.
- Deployment operations must reference a validated revision.
- Secret values are never stored in `resolved_config`, `connections`, or event metadata.
- Event records are append-oriented for traceability.

## Indexing Needs
Support efficient lookup by build ID, current state, revision, asset identity/version, connection status, validation status, and deployment operation status.
