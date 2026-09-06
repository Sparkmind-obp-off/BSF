# BSF — Connections UX

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## 1. Objective

Connections UX membantu builder mengetahui external resources yang dibutuhkan dan readiness-nya tanpa membuat BSF tampak sebagai pemilik resource tersebut.

## 2. Connection List

Setiap connection requirement menampilkan:
- resource type;
- provider/target;
- required atau optional;
- scope/context;
- current status;
- next action.

## 3. Lifecycle

```text
REQUIRED → CONFIGURED → AUTHORIZED / AVAILABLE → READY
```

Status harus berasal dari connection state yang dapat dipertanggungjawabkan, bukan sekadar optimistic UI.

## 4. Ownership Cue

External resources diberi label sebagai user/client/third-party resource bila relevan. BSF mengorkestrasi connection; UI tidak menyiratkan bahwa BSF menyediakan resource secara default.

## 5. Missing Connection

Required missing connection adalah blocker pada Connection Gate. UI menunjukkan resource yang kurang dan menyediakan jalur untuk configure/connect atau kembali ke configuration.

## 6. Failure States

Authorization failure, unavailable resource, unsupported provider/target, dan invalid configuration harus memiliki pesan yang berbeda bila penyebabnya diketahui.

## 7. Secret Handling UX

Jangan menampilkan secret/token/key sebagai ordinary persisted build data. UI hanya menampilkan status dan safe metadata yang diperlukan.

## 8. Acceptance Criteria

- Required/optional jelas.
- Status connection terlihat.
- Missing required connection memblokir readiness.
- Ownership boundary jelas.
- Error connection actionable.
