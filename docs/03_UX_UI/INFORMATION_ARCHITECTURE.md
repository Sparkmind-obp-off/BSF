# BSF — Information Architecture

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## 1. Information Hierarchy

```text
BSF Factory
├── Factory Home
├── Official Systems
│   ├── System List
│   └── System Detail
├── Modules
│   └── Module Library
├── Custom Builder
└── Builds
    └── Builder Workspace
        ├── Definition
        ├── Composition / Blueprint
        ├── Configuration
        ├── Connections
        ├── Validation
        └── Deploy / Export
```

## 2. Navigation Model

Primary navigation should expose the factory entry points and current builds without creating a separate product ecosystem.

Recommended primary destinations:
- Home
- Official Systems
- Modules
- Custom Builder
- Builds

Within a build, stage navigation follows the canonical factory order. Users may inspect completed stages, but downstream actions remain gated by build state.

## 3. Object Naming

UI labels must preserve conceptual distinction:
- **System** = reusable business-system definition.
- **Module** = reusable capability/component.
- **Build** = concrete construction instance.
- **Configuration** = build-specific settings.
- **Connection** = external resource relationship.
- **Validation** = readiness result.
- **Deployment Target** = output destination.

## 4. Context Model

Every build view should expose enough context to answer:
1. What am I building?
2. Which system/source did I start from?
3. Which modules are selected?
4. What configuration is active?
5. What external resources are required?
6. What is blocking readiness?
7. What can I do next?

## 5. Progressive Disclosure

Do not expose technical implementation details unless they are needed for the current stage. Business Builder sees purpose, capabilities, requirements, status, and actions first; Technical Builder can inspect deeper configuration and connection details where the same MVP object requires it.

## 6. Empty / Loading / Error States

Every collection and stage must define:
- loading state;
- empty state with useful next action;
- recoverable error;
- unavailable/unsupported state where applicable.

## 7. IA Guardrails

No top-level IA for marketplace, billing, enterprise governance, universal infrastructure, arbitrary plugins, or unrelated software generation exists in MVP.

## 8. Baseline

> The BSF information architecture is organized around factory entry paths, reusable assets, concrete builds, and the canonical gated build lifecycle.
