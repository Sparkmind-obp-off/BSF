# BSF — Deployment / Export UX

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## 1. Objective

Output surface menerima validated build dan mengarahkan builder ke deployment/export target yang benar-benar didukung.

## 2. Preconditions

UI harus memeriksa:
- definition complete;
- composition valid;
- configuration complete;
- required connections ready;
- required validation passed;
- target supported and ready.

## 3. Target Selection

Deployment Target menampilkan identity/type, required configuration, readiness, supported operation, dan relevant ownership/resource information.

## 4. Execution States

```text
NOT_READY → READY → IN_PROGRESS → SUCCEEDED | FAILED
```

UI harus membedakan “target ready” dari “deployment succeeded”.

## 5. Handoff

BSF dapat melakukan preparation/execution/handoff sesuai target abstraction. UI mencatat outcome aktual dan tidak mengklaim success sebelum outcome tercatat.

## 6. Export

Export diperlakukan sebagai supported output operation, bukan janji universal deployment. Jika target tidak didukung, user menerima hasil jelas dan alternatif yang sesuai scope.

## 7. Failure and Recovery

Failure menampilkan target, operation, outcome, reason jika diketahui, dan next action. Retry hanya ditawarkan bila aman dan relevan dengan target operation.

## 8. Acceptance Criteria

- Target output jelas.
- Preconditions terlihat.
- Validation gate dihormati.
- Execution state aktual.
- Unsupported target tidak dianggap sukses.
- Ownership boundary tetap jelas.
