# BSF — Validation UX

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## 1. Objective

Validation UX menjadikan validation sebagai gate nyata, bukan status dekoratif.

## 2. Validation Summary

Validation surface menampilkan:
- overall result;
- evaluated build state/version;
- findings count;
- blocking findings;
- non-blocking findings;
- next action.

## 3. Finding Contract

Setiap finding minimal menjawab:
1. Apa yang gagal?
2. Di stage mana?
3. Object/area mana yang terdampak?
4. Mengapa gagal jika diketahui?
5. Apa tindakan perbaikannya?

## 4. Severity

MVP minimal membedakan:
- **Blocking** — mencegah progression/deployment.
- **Non-blocking** — perlu perhatian tetapi tidak otomatis menghentikan gate.

## 5. Gate Behavior

```text
No blocking findings → PASS
Blocking findings → BLOCK
```

Deployment/export CTA tidak boleh menyatakan ready ketika required validation masih blocked.

## 6. Stale Results

Jika material build change memengaruhi evaluated state, UI harus menandai validation result sebagai perlu dievaluasi ulang, bukan mempertahankan kesan bahwa hasil lama masih authoritative.

## 7. Recovery

Klik finding mengarahkan pengguna ke stage/object yang perlu diperbaiki. Setelah correction, user dapat menjalankan validation kembali.

## 8. Acceptance Criteria

- Result jelas.
- Blocker mudah ditemukan.
- Finding actionable.
- Validation terikat pada build state.
- Deployment readiness mengikuti gate result.
