# BSF — User Types & Use Cases

**Project:** BSF — Business System Factory  
**Document Status:** Product Foundation  
**Phase:** Product Definition  
**Repository:** `Sparkmind-obp-off/BSF`

---

## 1. Purpose

Dokumen ini mendefinisikan siapa yang menggunakan BSF dan pekerjaan utama yang ingin mereka selesaikan.

User model ini digunakan sebagai dasar untuk MVP, UX/UI, dan architecture.

---

## 2. Primary User Types

### 2.1 Business Builder

Pengguna yang memahami kebutuhan bisnis tetapi tidak ingin memulai construction process dari nol.

**Primary goals:**

- menemukan system yang relevan;
- menjelaskan kebutuhan;
- melakukan konfigurasi;
- menghasilkan business system yang dapat digunakan.

### 2.2 Technical Builder

Pengguna yang lebih dekat dengan development, integration, dan infrastructure.

**Primary goals:**

- memilih architecture/system baseline;
- compose modules;
- configure integrations;
- connect resources;
- validate deployment.

### 2.3 System Operator

Pengguna yang menjalankan atau mengelola business system yang sudah dibangun.

**Primary goals:**

- memahami system configuration;
- menjaga connection;
- menjalankan deployment workflow;
- melakukan maintenance terhadap system assets.

---

## 3. Secondary / Future Users

### Team / Organization

Memerlukan shared systems, governance, permissions, dan reusable internal libraries.

### System Publisher

Membuat dan memelihara official systems atau reusable modules untuk digunakan oleh pengguna lain.

### Ecosystem / Marketplace Participant

Potensial pada fase berikutnya untuk publishing atau discovering reusable systems/modules dari pihak ketiga.

---

## 4. Core Jobs To Be Done

| JTBD | Expected Outcome |
|---|---|
| Find a suitable system | User menemukan starting point |
| Define a custom system | Kebutuhan bisnis menjadi system definition |
| Compose modules | System tersusun dari reusable capabilities |
| Configure system | System sesuai environment dan kebutuhan |
| Connect resources | AI/services/infrastructure terhubung |
| Validate system | System memenuhi requirement dasar |
| Deploy/export | Output siap digunakan atau dipindahkan |
| Reuse system | System dapat menjadi baseline untuk pekerjaan berikutnya |

---

## 5. Core Use Cases

### UC-01 — Build from Official System

**Actor:** Business Builder / Technical Builder

**Goal:** Menggunakan official system sebagai baseline.

**Flow:**

```text
Browse Library
 → Select System
 → Review Blueprint
 → Configure
 → Connect Resources
 → Validate
 → Deploy / Export
```

### UC-02 — Build Custom System

**Actor:** Business Builder

**Goal:** Membuat system berdasarkan kebutuhan bisnis yang belum tersedia sebagai official system.

**Flow:**

```text
Describe Need
 → Define System
 → Select Modules
 → Configure Logic
 → Connect Resources
 → Validate
 → Deploy / Export
```

### UC-03 — Compose from Modules

**Actor:** Technical Builder

**Goal:** Merakit business system dari reusable modules.

**Flow:**

```text
Browse Modules
 → Select Modules
 → Resolve Dependencies
 → Compose
 → Configure
 → Validate
 → Deploy / Export
```

### UC-04 — Reconfigure Existing System

**Actor:** System Operator / Technical Builder

**Goal:** Menyesuaikan system yang sudah ada terhadap kebutuhan baru.

**Flow:**

```text
Open System
 → Inspect Configuration
 → Change Configuration
 → Validate
 → Redeploy / Export
```

### UC-05 — Connect External Resource

**Actor:** Technical Builder

**Goal:** Menghubungkan resource eksternal yang diperlukan system.

**Flow:**

```text
Select Connector
 → Configure Connection
 → Validate Connection
 → Attach to System
 → Run System Validation
```

### UC-06 — Validate Build

**Actor:** All builders

**Goal:** Memastikan system memiliki struktur dan dependency yang valid sebelum deployment.

**Flow:**

```text
Run Validation
 → Detect Issues
 → Resolve Issues
 → Re-run Validation
 → Ready
```

---

## 6. MVP User Priority

Prioritas awal:

1. **Business Builder** — primary experience.
2. **Technical Builder** — enables integration and deployment.
3. **System Operator** — basic operational experience.

Team, publisher, dan marketplace workflows ditunda sampai core factory loop terbukti.

---

## 7. Core Factory Loop

Semua use case utama harus dapat kembali ke factory loop berikut:

```text
DISCOVER / DEFINE
        ↓
     COMPOSE
        ↓
   CONFIGURE
        ↓
    CONNECT
        ↓
    VALIDATE
        ↓
 DEPLOY / EXPORT
        ↓
      REUSE
```

Loop ini menjadi prinsip utama UX/UI dan product architecture.

---

## 8. Product Decision

MVP BSF tidak perlu mencoba melayani semua tipe pengguna dengan surface yang berbeda-beda sejak awal.

Prioritas adalah membuat **satu factory experience yang jelas** untuk membangun business system, kemudian memperluas role dan governance setelah core loop terbukti.

---

## 9. Baseline

> **BSF serves builders who need to turn business needs or reusable components into configurable, integrated, validated, and deployable business systems through a repeatable factory workflow.**
