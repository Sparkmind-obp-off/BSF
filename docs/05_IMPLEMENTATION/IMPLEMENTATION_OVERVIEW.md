# 05 — Implementation Overview

## Purpose
Turn the locked Product, Architecture, UX/UI, and Technical Implementation layers into a minimal runnable BSF factory loop.

## Implemented Slice
- Official system and module catalog
- Build creation
- Module composition with dependency validation
- Deterministic configuration
- Connection state model
- Validation gates
- Deployment preparation
- JSON export adapter
- HTTP API
- Factory web shell
- Automated Node test suite
- GitHub Actions CI

## Runtime Flow
```text
HTTP / Factory UI
      ↓
FactoryApplication
      ↓
Domain + Gate Engine
      ↓
Memory Repository / Asset Catalog
      ↓
Connector + Deployment Contracts
```

## Canonical State
`DRAFT → DEFINED → COMPOSED → CONFIGURED → CONNECTED → VALIDATED → DEPLOYABLE → DEPLOYED | EXPORTED`

## Technology Choice
The first executable slice uses dependency-light modern JavaScript on Node.js. This is an implementation choice, not a change to the technology-agnostic architecture decision. The code keeps domain contracts independent from provider adapters so a production framework/database can be introduced without changing the factory model.

## MVP Boundary
This implementation deliberately does not add billing, marketplace, enterprise collaboration, universal cloud provisioning, unrestricted plugins, unlimited AI inference, or arbitrary software generation.
