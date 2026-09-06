# BSF — UX/UI Decisions

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## UXD-001 — One Canonical Factory Journey

**Decision:** Official, Custom, dan Modules converge ke lifecycle yang sama.

**Reason:** Menghindari tiga produk berbeda dan menjaga deterministic factory workflow.

## UXD-002 — Stage Is Always Visible

**Decision:** Build workspace selalu memperlihatkan current stage dan relevant gate state.

**Reason:** NFR-01 Clarity dan deterministic state.

## UXD-003 — Gates Control Primary Progression

**Decision:** Primary continuation mengikuti gate result.

**Reason:** Validation-before-deployment dan explicit architecture gates.

## UXD-004 — Blueprint Is Persistent Context

**Decision:** Blueprint/requirements context tetap accessible selama build.

**Reason:** Builder perlu memahami system composition dan traceability.

## UXD-005 — Findings Are Actionable

**Decision:** Blockers menunjuk stage/object dan corrective action bila diketahui.

**Reason:** NFR-06 Actionable Errors.

## UXD-006 — Build State Is Distinct From Asset State

**Decision:** UI membedakan reusable System/Module dari concrete Build.

**Reason:** Reuse dan configuration isolation.

## UXD-007 — External Resources Are Explicitly External

**Decision:** Connection UI menampilkan ownership/resource boundary.

**Reason:** BSF adalah orchestration layer, bukan default resource owner.

## UXD-008 — No Scope Expansion Through UX

**Decision:** UX tidak memperkenalkan capability yang tidak traceable ke MVP Product Requirements.

**Reason:** Architecture/Product guardrail berlaku sampai UX/UI.

## Decision Rule

```text
Product Requirement
      ↓
Architecture Constraint
      ↓
UX Need
      ↓
UX Decision
      ↓
Implementation Contract
```

Jika sebuah UX pattern membutuhkan capability baru yang tidak ada pada Product Requirements, pattern tersebut ditolak atau diperlakukan sebagai future scope.
