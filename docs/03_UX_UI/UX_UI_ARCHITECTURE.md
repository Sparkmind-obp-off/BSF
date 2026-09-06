# BSF — UX/UI Architecture

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## 1. Purpose

Dokumen ini menerjemahkan Product Requirements dan Architecture Layer menjadi struktur pengalaman pengguna yang deterministik. UX/UI BSF harus membuat factory loop terasa jelas tanpa menyembunyikan state, gate, requirement, atau ownership boundary.

## 2. UX Principles

1. **Factory-first** — setiap surface mendukung pembangunan business system.
2. **Stage visibility** — pengguna selalu tahu berada di tahap mana.
3. **Gate clarity** — blocker dan readiness terlihat sebelum action berikutnya.
4. **Reusable-by-default** — official systems dan modules diperlakukan sebagai source assets, bukan objek yang diam-diam dimodifikasi.
5. **Configuration over reinvention** — builder mengubah configuration, bukan mengulang definisi reusable asset.
6. **Validation-before-deployment** — deploy/export tidak tampil sebagai ready sebelum validation terpenuhi.
7. **Ownership-aware** — resource eksternal diberi label jelas sebagai external/user-selected resource.
8. **Actionable errors** — setiap blocker memiliki konteks dan next action.
9. **Traceable** — perubahan penting tetap dapat ditelusuri ke build stage.
10. **MVP-bounded** — UI tidak memperkenalkan marketplace, billing, team governance, universal deployment, atau capability di luar MVP.

## 3. Canonical Experience

```text
Factory Entry
    ↓
Definition
    ↓
Composition
    ↓
Configuration
    ↓
Connections
    ↓
Validation
    ↓
Deploy / Export
    ↓
Reuse
```

## 4. Primary Surfaces

1. Factory Home / Entry
2. Official System Library
3. System Detail
4. Module Library
5. Custom Builder
6. System Builder Workspace
7. Configuration
8. Connections
9. Validation
10. Deploy / Export

## 5. Global Builder Pattern

Setiap builder surface menggunakan pola:

```text
Header: Build identity + current state
Progress: factory stages / gates
Main: current stage workspace
Context: blueprint / requirements / selected assets
Action Bar: primary next action + blockers
Feedback: success, warning, error, loading
```

## 6. State Visibility

State canonical: `DRAFT → DEFINED → COMPOSED → CONFIGURED → CONNECTED → VALIDATED → DEPLOYABLE → DEPLOYED | EXPORTED`.

UI tidak boleh menampilkan state downstream sebagai ready apabila prerequisite gate belum terpenuhi.

## 7. Gate UX

Setiap gate menampilkan:
- status: Ready / Blocked / Needs attention;
- requirement summary;
- blocking findings;
- relevant affected object;
- corrective action;
- next stage.

## 8. Responsive and Accessibility Foundation

UX harus usable pada desktop dan responsive layouts. Informasi state tidak boleh bergantung pada warna saja. Controls memiliki label, focus state, keyboard access, readable hierarchy, dan feedback yang dapat dipahami tanpa visual cue tunggal.

## 9. UX Acceptance Criteria

- User memahami entry path.
- Current build stage selalu terlihat.
- Blueprint dan selected modules dapat dipahami.
- Configuration scope jelas.
- Required connections terlihat sebelum validation.
- Blocking validation findings actionable.
- Deploy/export hanya tersedia ketika preconditions terpenuhi.
- Error tidak mengklaim keberhasilan yang belum terjadi.
- Reusable source asset tidak terlihat seperti build-specific mutable state.

## 10. Baseline

> **BSF UX/UI is a guided, state-aware factory experience that moves builders from system definition through composition, configuration, connection, validation, and deployment/export with explicit gates and actionable feedback.**
