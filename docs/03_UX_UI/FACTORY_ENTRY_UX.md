# BSF — Factory Entry UX

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## 1. Objective

Factory Entry adalah titik awal yang membantu builder memilih salah satu dari tiga jalur resmi tanpa membingungkan BSF dengan generic app builder.

## 2. Entry Cards

### Build from Official System
Menemukan reusable system yang sudah memiliki baseline structure dan requirements.

### Build Custom
Mendefinisikan business system baru berdasarkan purpose, outcome, capability, dan initial composition.

### Build from Modules
Memilih reusable capabilities lalu membentuk system composition.

## 3. Card Contract

Setiap entry option menampilkan:
- purpose;
- kapan digunakan;
- hasil yang diharapkan;
- primary action.

## 4. Existing Builds

Jika build sudah ada, Home dapat menampilkan recent/active builds sebagai continuation point. Build tetap menjadi concrete instance dan tidak dicampur dengan reusable System Library.

## 5. Empty State

Jika belum ada build, UI memprioritaskan tiga entry paths dan tidak membuat blank-code workflow sebagai default.

## 6. Guardrails

Entry surface tidak menjadi dashboard analytics, marketplace, billing center, atau general project-management surface pada MVP.

## 7. Acceptance Criteria

- Tiga entry paths jelas.
- User dapat memilih satu jalur.
- Context awal build tercatat.
- User memahami konsekuensi entry sebelum melanjutkan.
