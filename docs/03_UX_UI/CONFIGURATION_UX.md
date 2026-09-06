# BSF — Configuration UX

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## 1. Objective

Configuration UX menerjemahkan reusable definition menjadi build-specific behavior tanpa mengubah canonical asset.

## 2. Configuration Groups

- Business-specific settings
- Module settings
- Composition parameters
- AI connection selection
- Infrastructure selection
- Deployment target
- Environment-specific values

## 3. Scope Visibility

Setiap field harus memiliki scope yang dapat dipahami: System, Module, Build, Connection, atau Deployment. UI tidak boleh menyamarkan build-specific values sebagai perubahan pada reusable source.

## 4. Defaults and Resolution

```text
Asset Defaults
    ↓
System Defaults
    ↓
Build Configuration
    ↓
Resolved Configuration
```

Resolved values harus dapat ditinjau sebelum validation.

## 5. Secret Boundary

Credential/token/key tidak diperlakukan sebagai ordinary configuration field. UI harus memberi indikasi bahwa sensitive connection data berada pada connection/secret boundary.

## 6. Validation Feedback

Configuration completeness errors muncul dekat dengan affected field dan juga diringkas pada gate status. Perubahan material dapat menurunkan readiness downstream.

## 7. Acceptance Criteria

- Scope field jelas.
- Required values mudah dibedakan dari optional values.
- Defaults dapat dipahami.
- Reusable asset tidak terkesan berubah.
- Invalid/incomplete configuration memiliki corrective action.
