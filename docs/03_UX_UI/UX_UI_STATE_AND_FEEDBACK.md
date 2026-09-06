# BSF — UX/UI State and Feedback Model

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## 1. Purpose

Dokumen ini menetapkan perilaku UI untuk lifecycle, gate, loading, empty, success, dan failure agar pengalaman factory konsisten dan deterministic.

## 2. Build State Presentation

```text
DRAFT
DEFINED
COMPOSED
CONFIGURED
CONNECTED
VALIDATED
DEPLOYABLE
DEPLOYED / EXPORTED
```

State aktif diberi emphasis. State completed dapat ditinjau. State blocked tidak boleh terlihat equivalent dengan ready.

## 3. Gate State

Setiap gate menggunakan semantic states:
- Not started
- In progress
- Ready
- Blocked
- Needs attention

`Ready` berarti prerequisite stage terpenuhi; bukan berarti deployment sudah berhasil.

## 4. Loading

Loading state harus mempertahankan context build dan menjelaskan operation yang sedang berlangsung jika diketahui. Hindari perubahan layout yang membuat user kehilangan konteks.

## 5. Empty

Empty states selalu menawarkan next valid action, misalnya browse official systems, select modules, atau define custom system.

## 6. Error

Error harus membedakan validation blocker, connection failure, unsupported target, dan generic recoverable system error bila penyebab diketahui. Pesan tidak boleh mengklaim action berhasil jika outcome belum tersedia.

## 7. Success

Success state menyebut objek/operation yang berhasil dan state baru. Deployment success hanya setelah outcome tercatat sebagai `SUCCEEDED`.

## 8. Stale / Invalidated State

Jika perubahan build membuat hasil validation/deployment readiness tidak lagi valid, UI harus menampilkan `Needs re-validation` atau equivalent state dan mengarahkan ke stage terkait.

## 9. Feedback Priority

```text
Blocking > Current Action > Required Attention > Informational
```

Critical blockers harus lebih mudah ditemukan daripada secondary information.

## 10. Acceptance

State presentation konsisten, actionable, tidak misleading, dan selalu mengikuti canonical factory state.
