# BSF MASTER SYSTEM PROMPT

**Document Status:** Official Implementation Control Contract  
**Version:** 1.0  
**Layer:** `05_IMPLEMENTATION`  
**Derived From:** `00_OFFICIAL` → `01_PRODUCT` → `02_ARCHITECTURE` → `03_UX_UI` → `04_TECHNICAL_IMPLEMENTATION`  
**Commercial Input:** `docs/01_PRODUCT/BUSINESS_MODEL_AND_COMMERCIAL_LOOP.md`

---

## 1. Purpose

Dokumen ini adalah **Master System Prompt / Implementation Control Contract** untuk pekerjaan AI coding agent, developer, dan automation yang mengubah BSF dari specification menjadi repository implementation.

Dokumen ini tidak membuat product scope baru. Fungsinya adalah menjaga agar implementasi aktual tetap konsisten dengan seluruh layer yang sudah dikunci.

Master rule:

> **Implement what BSF has already decided; do not silently redesign what BSF has already decided.**

---

## 2. Authority and Precedence

Urutan authority BSF:

```text
00_OFFICIAL
    ↓
01_PRODUCT
    ↓
02_ARCHITECTURE
    ↓
03_UX_UI
    ↓
04_TECHNICAL_IMPLEMENTATION
    ↓
05_MASTER_IMPLEMENTATION_CONTROL
    ↓
ACTUAL CODE
```

`05_MASTER_IMPLEMENTATION_CONTROL` operationalizes the preceding layers. It MUST NOT override them.

Jika terjadi konflik:

1. identifikasi konflik;
2. jangan memilih desain baru secara diam-diam;
3. jangan memperluas scope untuk menyelesaikan konflik;
4. kembali ke layer yang lebih tinggi sebagai authority;
5. dokumentasikan keputusan bila perubahan memang diperlukan.

---

## 3. BSF Identity

BSF = **Business System Factory**.

BSF adalah orchestration layer untuk membangun, mengustomisasi, mengomposisikan, mengintegrasikan, memvalidasi, dan menyiapkan deployment/export business systems menggunakan reusable systems, modules, logic, dan external resources yang dipilih pengguna.

BSF bukan:

- unlimited LLM provider;
- hosting provider;
- database provider;
- cheap API aggregator;
- subsidizer infrastructure customer;
- replacement for all customer infrastructure;
- arbitrary software generator unrelated to the factory workflow.

---

## 4. Mission

Mission implementation:

> **Make building business systems feel like operating a factory instead of starting from zero.**

Commercial North Star:

> **One need → one Build → one delivered system → one paid outcome → reusable factory asset.**

Implementation MUST prioritize a narrow, repeatable, demonstrable Build loop over breadth.

---

## 5. Product Contract

MVP factory loop:

```text
Choose / Define
      ↓
   Compose
      ↓
 Configure
      ↓
  Connect
      ↓
  Validate
      ↓
Deploy / Export
```

Three supported entry paths:

1. Build from Official Systems
2. Build Custom
3. Build from Modules

Primary product outcome:

- builder selects or defines a system;
- composes reusable modules;
- configures the build;
- identifies and handles required external connections;
- validates readiness;
- receives a clear build result;
- deploys or exports to a supported target.

A **System** is a reusable definition. A **Build** is a concrete business-system instance/work unit.

---

## 6. Architecture Invariants

Implementation MUST preserve these invariants:

1. Factory-first orchestration.
2. Reusable assets remain separate from concrete build instances.
3. Configuration is build-scoped and must not mutate reusable source assets.
4. Connectors are abstractions/adapters over external resources.
5. Deployment targets are abstracted from the core domain.
6. Validation is a real gate, not decorative metadata.
7. Build state is deterministic and persisted through a repository boundary.
8. Secrets are outside ordinary build records.
9. Domain contracts remain separable from provider adapters.
10. Traceability remains available from business need through output.
11. Architecture and implementation remain technology-conscious but not technology-locked.
12. No implementation detail may create a new product capability without product authority.

---

## 7. Canonical Factory Lifecycle

Canonical lifecycle:

```text
DRAFT
  ↓
DEFINED
  ↓
COMPOSED
  ↓
CONFIGURED
  ↓
CONNECTED
  ↓
VALIDATED
  ↓
DEPLOYABLE
  ↓
DEPLOYED | EXPORTED
```

Rules:

- states MUST be explicit;
- transitions MUST be controlled;
- a later state MUST NOT be inferred merely because an earlier operation was attempted;
- invalid transitions MUST fail clearly;
- deployment/export MUST NOT bypass validation requirements;
- when no external connection is required, the implementation may satisfy the connection stage through explicit no-required-connection handling, but MUST NOT invent a fake connection.

---

## 8. Gate Contract

Canonical gates:

```text
Definition Gate
      ↓
Composition Gate
      ↓
Configuration Gate
      ↓
Connection Gate
      ↓
Validation Gate
      ↓
Deployment Gate
```

Gate behavior:

```text
blocking findings > 0 → BLOCK
otherwise              → PASS
```

Every blocking finding SHOULD communicate:

- what failed;
- stage;
- affected object when known;
- reason when known;
- corrective action;
- next relevant action.

No code path may intentionally bypass a blocking gate to reach deployment.

---

## 9. Domain Model Contract

Core objects:

| Object | Contract |
|---|---|
| System | Reusable business-system definition |
| Module | Reusable capability/component |
| Build | Concrete system-building work unit |
| Configuration | Build-scoped configuration |
| Connection | External resource/provider state |
| Validation | Readiness/findings result |
| Deployment Target | Supported output target |

A Build MUST preserve, directly or indirectly, the relationship:

```text
Build
 ├── System Definition
 ├── Selected Modules
 ├── Configuration
 ├── Connections
 ├── Validation Result
 └── Deployment / Export Target
```

Build-specific mutations MUST NOT mutate reusable systems/modules by reference or shared mutable state.

---

## 10. Asset and Module Rules

Official and reusable assets MUST have stable identity and predictable metadata.

Modules MUST expose enough information for factory composition, including where applicable:

- identity;
- purpose;
- capability;
- dependencies;
- configuration requirements;
- compatibility information;
- connection requirements.

Composition MUST validate required dependencies and important compatibility constraints before a build can progress.

Do not add a module merely to make a demo appear richer. Every asset added to the implementation MUST have a product or implementation justification.

---

## 11. Configuration Rules

Configuration is a build-scoped layer.

Rules:

1. configuration MUST have an explicit scope;
2. configuration MUST be deterministic enough to reproduce the build state;
3. configuration changes MUST increment/otherwise preserve meaningful build revision semantics;
4. reusable assets MUST remain unchanged by build configuration;
5. secrets MUST NOT be placed in ordinary configuration/build records;
6. missing required configuration MUST be surfaced before deployment.

Prefer configuration over forking/reinventing reusable assets when the requirement is build-specific.

---

## 12. Connector and External Resource Rules

External resources remain externally owned unless an explicit product decision says otherwise.

Connection records may represent:

- resource type;
- provider/target;
- required vs optional;
- scope/context;
- readiness/status;
- non-secret reference metadata.

The implementation MUST NOT persist raw:

- API keys;
- passwords;
- access tokens;
- private keys;
- raw authorization headers;
- provider secret payloads

inside ordinary Build records, logs, fixtures, or exported artifacts.

Provider-specific behavior belongs behind connector adapters/contracts rather than leaking into the core domain.

---

## 13. Validation Rules

Validation is a mandatory readiness stage.

At minimum, validation must be able to account for:

- definition completeness;
- composition compatibility;
- configuration completeness;
- required connections;
- deployment prerequisites.

Validation results MUST be associated with the relevant build/revision or equivalent deterministic context.

A successful validation does not authorize deployment of a materially changed build unless the implementation establishes that the validated state still matches the deployable state.

Never report deployment readiness based solely on the existence of a previous validation result when the build has changed.

---

## 14. Deployment and Export Rules

Deployment/export is an output stage, not an alternate workflow.

Rules:

1. supported targets MUST be explicit;
2. unsupported targets MUST return a clear unsupported result;
3. deployment/export MUST require the applicable validation gate;
4. implementation MUST NOT claim success when an adapter did not succeed;
5. export artifacts MUST not contain prohibited secret material;
6. target-specific code belongs behind deployment adapters/contracts.

MVP does not require universal cloud provisioning or universal deployment.

---

## 15. Security and Secret Boundary

Security is a structural boundary, not an optional enhancement.

Implementation MUST:

- keep secrets outside ordinary domain/build persistence;
- avoid logging secret values;
- avoid returning secret values from API responses;
- avoid committing secrets to the repository;
- use references/handles or external secret mechanisms when real connectors are introduced;
- treat exported artifacts as potentially shareable and therefore secret-sensitive.

Tests MUST verify that secret-like values are not accidentally persisted or exported where applicable.

---

## 16. Repository and Code Organization Rules

Implementation follows the technical boundaries:

```text
apps/
  factory-web/
  factory-api/

packages/
  domain/
  application/
  gates/
  configuration/
  assets/
  connectors/
  deployment/
  persistence/
  contracts/

tests/

docs/
```

Current repository may contain only the subsets required by the implemented slice. Do not create empty architecture shells solely for appearance.

Boundary rules:

- domain owns business state/rules;
- application orchestrates use cases;
- gates evaluate readiness;
- assets provide reusable catalog definitions;
- connectors isolate external resource integration;
- deployment isolates output targets;
- persistence owns storage boundary;
- API exposes application operations, not hidden domain mutations;
- UI consumes supported API/application contracts.

Avoid circular dependencies and provider-specific logic in the domain layer.

---

## 17. API Rules

API resources correspond to the factory model:

```text
systems
modules
builds
configurations
connections
validations
deployment-targets
```

For each mutation endpoint:

1. validate input;
2. execute the application use case;
3. enforce domain/gate rules;
4. persist deterministic state;
5. return an explicit success or actionable error.

API MUST NOT expose secret material.

HTTP errors MUST distinguish, where practical:

- invalid input;
- missing resource;
- invalid state transition;
- blocked gate;
- unsupported target;
- internal/unexpected failure.

Do not make API behavior imply capabilities that the product does not define.

---

## 18. Testing and Quality Rules

Every implementation change MUST be evaluated against the smallest relevant test boundary.

Required test categories as applicable:

- unit tests for domain rules;
- application/use-case tests;
- gate tests;
- connector contract tests;
- deployment contract tests;
- API/integration tests;
- end-to-end/acceptance tests for the canonical factory loop.

Critical scenarios:

1. canonical lifecycle succeeds;
2. invalid composition is blocked;
3. incomplete configuration is blocked;
4. missing required connection is blocked;
5. deployment without valid validation is blocked;
6. invalid state transitions are blocked;
7. build-specific configuration does not mutate reusable assets;
8. secret material is not persisted/exported;
9. repeated safe operations behave predictably where idempotency is expected;
10. failure does not falsely advance build state.

Never claim tests or CI passed without actual evidence.

---

## 19. Traceability Rules

Every material implementation change MUST be traceable to one or more of:

- official principle;
- product requirement;
- architecture component/decision;
- UX/UI requirement;
- technical implementation contract;
- explicit approved change.

Canonical traceability:

```text
Business Need
      ↓
System Definition
      ↓
Composition
      ↓
Configuration
      ↓
Connections
      ↓
Validation
      ↓
Deployment / Export
```

Implementation notes, tests, and code should make it possible to identify why a behavior exists.

Do not create a feature first and search for justification afterward.

---

## 20. Scope Lock and Forbidden Expansion

The following are outside the MVP unless scope is explicitly re-locked by the Product layer:

- unlimited AI inference;
- BSF-owned general hosting;
- BSF-owned general database;
- cheap API aggregation;
- public marketplace;
- complex team collaboration;
- enterprise governance;
- advanced billing;
- full observability platform;
- universal deployment;
- full plugin ecosystem;
- autonomous system generation without validation;
- arbitrary software generation unrelated to the business-system factory workflow.

Do not introduce these indirectly through “technical convenience”, “future-proofing”, or demo requirements.

---

## 21. Commercial Implementation Alignment

The commercial unit is the **Business System Build**, not BSF-owned infrastructure.

Commercial loop:

```text
Customer Need
      ↓
Define / Select System
      ↓
Create Build
      ↓
Compose
      ↓
Configure
      ↓
Connect
      ↓
Validate
      ↓
Deploy / Export
      ↓
Handoff Business System
      ↓
Customer Value / Payment
      ↓
Reuse / Next Build
```

Implementation priority is therefore:

> **Make one valuable Build repeatable, demoable, deliverable, and sellable.**

Assisted Build is the initial commercial path. Self-service SaaS may be productized later after repeated real Builds prove the workflow.

The implementation MUST NOT force BSF to become the provider of customer AI, hosting, database, API quota, domain, or other external infrastructure.

---

## 22. Change Protocol

Before changing code:

1. identify the requested behavior;
2. identify the governing requirement/contract;
3. inspect the actual current repository state;
4. determine the smallest compliant change;
5. implement at the correct layer;
6. add/update tests;
7. run or inspect verification evidence;
8. review for scope expansion and security violations;
9. update documentation/traceability when behavior or contract changes;
10. report exactly what changed and what was verified.

If a request conflicts with a locked layer, stop the conflicting implementation and surface the conflict rather than silently changing the contract.

---

## 23. Definition of Done

An implementation task is **Done** only when applicable criteria are satisfied:

- [ ] Requirement/contract identified.
- [ ] Actual repository state inspected.
- [ ] Correct architectural boundary selected.
- [ ] Implementation completed.
- [ ] Domain/gate rules preserved.
- [ ] Security/secret boundary preserved.
- [ ] Tests added or updated.
- [ ] Relevant tests executed or otherwise verified.
- [ ] No unsupported scope introduced.
- [ ] Traceability/documentation updated when necessary.
- [ ] Git commit contains the intended change.
- [ ] Verification result is reported truthfully.

A code change is not “done” merely because it compiles or appears in the repository.

---

## 24. Required Execution Format for AI Coding Agent

When operating on the BSF repository, the agent should follow this sequence:

```text
UNDERSTAND
   ↓
TRACE
   ↓
INSPECT ACTUAL REPO
   ↓
PLAN SMALLEST CHANGE
   ↓
IMPLEMENT
   ↓
TEST
   ↓
VERIFY
   ↓
AUDIT SCOPE + SECURITY
   ↓
COMMIT
   ↓
REPORT EVIDENCE
```

Agent output should identify:

1. task completed;
2. files changed;
3. behavior implemented;
4. tests/verification performed;
5. remaining limitations or blockers.

The agent MUST distinguish between:

- implemented;
- tested locally;
- verified through CI;
- not yet verified.

Never collapse these into a single unsupported claim such as “production ready”.

---

## 25. Final Non-Negotiable Rules

```text
NO SCOPE EXPANSION

DO NOT INVENT REQUIREMENTS

DO NOT SILENTLY REDESIGN LOCKED LAYERS

DO NOT BYPASS GATES

DO NOT DEPLOY UNVALIDATED STATE

DO NOT STORE SECRETS IN BUILD RECORDS

DO NOT MUTATE REUSABLE ASSETS THROUGH BUILD CONFIGURATION

DO NOT CLAIM TEST OR CI SUCCESS WITHOUT EVIDENCE

PRESERVE DETERMINISTIC BUILD STATE

PRESERVE TRACEABILITY

IMPLEMENT REPO-FIRST

VERIFY ACTUAL CODE

OPTIMIZE FOR ONE VALUABLE REPEATABLE BUILD

BUILD THE FACTORY, NOT AN UNBOUNDED SOFTWARE ECOSYSTEM
```

---

## 26. Official Master Implementation Baseline

> **BSF implementation must operationalize the locked factory workflow from system definition through composition, configuration, connection, validation, and deployment/export while preserving reusable assets, external resource ownership, deterministic state, security boundaries, traceability, and strict MVP scope.**

This document is the operational control contract for `05_IMPLEMENTATION`. It does not create a new product layer and does not authorize capabilities outside the locked Product, Architecture, UX/UI, and Technical Implementation contracts.
