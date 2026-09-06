# BSF Connector Architecture

**Status:** Official Architecture Layer  
**Version:** 1.0  
**Scope:** MVP  

## 1. Purpose

Defines the abstraction boundary between BSF builds and external resources.

## 2. Connector Model

```text
Build
  ↓
Connection Requirement
  ↓
Connector Contract
  ↓
Provider / External Resource
```

## 3. Connector Responsibilities

A connector abstraction must support:

- resource type identification
- connection requirements
- configuration schema/metadata
- authorization/readiness state
- connectivity or prerequisite checks where supported
- safe error reporting
- resource reference without exposing secrets

## 4. Ownership

BSF owns the orchestration contract. The connected AI, API, storage, database, or infrastructure resource may remain owned by the user/client or third party.

## 5. Connection Lifecycle

```text
REQUIRED
  ↓
CONFIGURED
  ↓
AUTHORIZED / AVAILABLE
  ↓
READY
```

Failure states must be explicit and actionable.

## 6. Secret Boundary

Credentials, tokens, keys, and other secrets must remain behind a secure secret boundary. Normal build records should store references/metadata rather than plaintext secrets.

## 7. Provider Abstraction

The core domain should depend on connector contracts rather than vendor-specific implementations. Provider adapters can implement those contracts.

## 8. Connection Gate

A build cannot pass the Connection Gate while required connections are missing, invalid, unavailable, or unauthorized.

## 9. Change Impact

Changing a connection or its relevant configuration requires re-evaluation of validation and deployment readiness.

## 10. MVP Boundary

The MVP does not require a universal connector marketplace, arbitrary plugin runtime, or support for every provider.

## 11. Baseline

> BSF connectors provide a controlled abstraction for connecting builds to selected external resources while preserving ownership boundaries and isolating secrets.
