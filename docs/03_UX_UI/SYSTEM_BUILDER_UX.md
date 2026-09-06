# BSF — System Builder UX

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## 1. Builder Workspace

Canonical layout:

```text
┌────────────────────────────────────────────────────┐
│ Build Name · Current State · Stage                 │
├────────────────────────────────────────────────────┤
│ Definition → Composition → Config → Connect → ... │
├───────────────────────┬────────────────────────────┤
│ Main Stage Workspace  │ Blueprint / Requirements   │
│                       │                            │
│ current action        │ System                     │
│ current objects       │ Capabilities               │
│                       │ Modules                    │
│                       │ Requirements / blockers    │
├───────────────────────┴────────────────────────────┤
│ Blockers / feedback       Back · Save · Continue   │
└────────────────────────────────────────────────────┘
```

## 2. Stage Navigation

Stages are ordered according to the factory lifecycle. Completed stages remain inspectable. A downstream stage may be visible but its primary action remains blocked when prerequisites are incomplete.

## 3. Definition View

Shows system identity, purpose, outcome, capabilities, and source path. Official systems show source asset reference; custom systems show editable definition.

## 4. Composition View

Shows selected modules and a readable composition/blueprint. Compatibility and dependency findings are attached to the affected module or relationship.

## 5. Blueprint Panel

Minimum representation:

```text
System
├── Capabilities
├── Modules
├── Configuration
├── Connections
├── Validation Requirements
└── Deployment Target
```

## 6. Change Behavior

Changes should produce explicit feedback when they invalidate downstream configuration, connections, validation, or deployment readiness.

## 7. Action Bar

Primary action follows the next valid factory stage. Secondary actions allow review/back navigation without pretending the build is complete.

## 8. Error Handling

Errors identify stage, affected object, reason when known, and corrective action. Generic “Something went wrong” is insufficient when actionable context is available.

## 9. Acceptance Criteria

- Builder always shows build identity and state.
- Current stage is obvious.
- Blueprint remains accessible.
- Gate blockers are visible before primary continuation.
- Changes cannot silently mutate canonical reusable assets.
