# BSF — MVP Scope

**Project:** BSF — Business System Factory  
**Document Status:** Product Foundation  
**Phase:** MVP Definition  
**Repository:** `Sparkmind-obp-off/BSF`

---

## 1. MVP Objective

MVP BSF bertujuan membuktikan satu hal utama:

> **Pengguna dapat membangun business system melalui factory workflow tanpa harus memulai seluruh proses dari nol.**

MVP tidak bertujuan menjadi platform lengkap untuk seluruh lifecycle software atau menjadi provider seluruh infrastructure.

---

## 2. MVP Core Loop

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

Jika core loop ini berjalan dengan jelas, BSF memiliki foundation yang dapat dikembangkan.

---

## 3. MVP In Scope

### 3.1 Official System Library

MVP harus dapat:

- menampilkan official systems;
- menjelaskan purpose dan capability;
- menampilkan modules dan requirements;
- memilih system sebagai starting point;
- memulai configuration workflow.

### 3.2 Custom Builder

MVP harus dapat:

- menerima business need;
- membentuk system definition dasar;
- memilih modules;
- menghasilkan build configuration;
- melanjutkan ke validation.

### 3.3 Module Library

MVP harus dapat:

- menampilkan reusable modules;
- menyediakan metadata dasar;
- menunjukkan dependency;
- memilih module untuk composition.

### 3.4 Configuration

MVP harus memiliki configuration model untuk minimal:

- system settings;
- selected modules;
- required connections;
- environment/deployment target.

### 3.5 Connector Foundation

MVP harus menyediakan abstraction untuk external resource connection tanpa mengharuskan BSF menjadi owner resource tersebut.

### 3.6 Validation Foundation

MVP harus dapat memeriksa minimal:

- required modules;
- dependency;
- required configuration;
- required connections;
- deployment readiness.

### 3.7 Deployment / Export Foundation

MVP harus menghasilkan output yang jelas untuk deployment atau export sesuai target architecture yang ditentukan.

---

## 4. MVP Out of Scope

MVP tidak mencakup sebagai core requirement:

- unlimited AI inference;
- BSF-owned general-purpose hosting;
- BSF-owned general-purpose database;
- cheap API aggregation;
- public marketplace;
- complex team collaboration;
- enterprise governance;
- advanced billing infrastructure;
- full observability platform;
- universal deployment to every provider.

Fitur-fitur tersebut dapat dipertimbangkan setelah factory loop terbukti.

---

## 5. MVP System Objects

MVP membutuhkan model konseptual minimal:

```text
System
Module
Configuration
Connection
Validation
Deployment Target
Build
```

Relasi sederhananya:

```text
System
 ├── Modules
 ├── Configuration
 ├── Connections
 ├── Validation Rules
 └── Deployment Target
          ↓
        Build
```

---

## 6. MVP UX Surfaces

MVP UX minimal:

1. **Home / Factory Entry**
2. **Official System Library**
3. **Module Library**
4. **Custom Builder**
5. **System Builder Workspace**
6. **Configuration View**
7. **Connections View**
8. **Validation View**
9. **Deploy / Export View**

Tidak semua surface harus menjadi halaman terpisah secara teknis; yang penting factory workflow terasa sebagai satu pengalaman.

---

## 7. MVP Acceptance Criteria

MVP dapat dianggap valid apabila seorang builder dapat:

- memilih official system;
- melihat blueprint dan requirements;
- mengubah configuration;
- memilih module yang kompatibel;
- mengetahui connection yang dibutuhkan;
- menjalankan validation;
- mendapatkan hasil build yang jelas;
- melanjutkan ke deployment/export.

Untuk custom path, builder juga harus dapat memulai dari business need dan mencapai workflow yang sama.

---

## 8. MVP Quality Gates

Setiap build minimal melewati:

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

Build tidak boleh dianggap ready hanya karena configuration telah selesai.

---

## 9. MVP Principle

### Build the Factory Loop, Not the Whole Universe

MVP harus fokus pada factory loop yang membuktikan value BSF.

Lebih baik memiliki workflow yang sempit tetapi benar-benar reusable daripada banyak fitur yang tidak terhubung menjadi satu process.

---

## 10. MVP Baseline

> **BSF MVP is a focused factory workflow that lets builders start from an official system, custom definition, or reusable modules and move through composition, configuration, connection, validation, and deployment/export.**

MVP ini menjadi baseline untuk Product Requirements dan Architecture Definition.
