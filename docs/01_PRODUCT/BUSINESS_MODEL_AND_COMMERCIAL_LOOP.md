# BSF — Business Model & Commercial Loop

**Project:** BSF — Business System Factory  
**Document Status:** Official Product / Commercial Contract  
**Version:** 1.0  
**Derived From:** `PRODUCT_REQUIREMENTS.md`, `VALUE_PROPOSITION.md`

---

## 1. Purpose

Dokumen ini mengunci bagaimana BSF menjadi **produk yang dapat dijual**, tanpa mengubah technical MVP secara sembarangan.

Dokumen ini menjawab lima pertanyaan yang sebelumnya belum cukup eksplisit:

1. BSF sebenarnya menjual apa?
2. Apa arti satu **Build** secara komersial?
3. Apa yang diterima customer?
4. Bagaimana BSF menghasilkan pendapatan?
5. Apa langkah validasi bisnis pertama?

Dokumen ini **tidak menggantikan Product Requirements**. Ia menerjemahkan factory capability menjadi commercial delivery model.

---

## 2. Commercial Product Definition

> **BSF is a factory for turning a business need into a configured, validated, and deployable business system using reusable systems, modules, and selected external resources.**

Secara komersial, customer tidak membeli “kode BSF”.

Customer membeli **hasil pembangunan business system** dan/atau akses ke factory yang membuat pembangunan tersebut lebih cepat, terstruktur, dan reusable.

```text
Business Need
      ↓
BSF Factory
      ↓
Business System Build
      ↓
Configured + Validated Output
      ↓
Customer's Business
```

---

## 3. What Is a System?

**System** adalah definisi/template reusable yang menjelaskan sebuah jenis business system.

Contoh:

```text
Official CRM System
Official Content Engine
Custom Sales System
```

System bukan customer instance tertentu.

Satu System dapat menjadi basis banyak Build.

---

## 4. What Is a Build?

**Build** adalah satu instance konkret dari proses pembangunan business system untuk kebutuhan tertentu.

Contoh:

```text
Official CRM System
        ↓
Create Build
        ↓
CRM — Client A
        ↓
Configure
        ↓
Connect
        ↓
Validate
        ↓
Deploy / Export
```

Jadi:

```text
SYSTEM = reusable definition
BUILD  = concrete business-system instance
```

Build adalah unit utama delivery BSF.

---

## 5. What Does the Customer Buy?

Untuk fase awal, customer membeli **Business System Build**, bukan resource infrastructure dari BSF.

Nilai yang dijual adalah:

- discovery/translation kebutuhan bisnis;
- pemilihan system atau module yang sesuai;
- composition;
- configuration;
- integration/connection setup;
- validation;
- deployment/export preparation;
- hasil system yang dapat digunakan customer;
- dokumentasi dan handoff yang relevan.

External AI, hosting, database, domain, API, atau infrastructure tetap dapat menjadi milik/customer choice dan tidak otomatis menjadi resource BSF.

---

## 6. Initial Customer Segment

Fase pertama tidak menargetkan semua jenis perusahaan.

Target awal adalah **business owner/operator atau builder yang membutuhkan business system tetapi tidak ingin selalu membangun semuanya dari nol**.

Contoh kebutuhan:

- CRM sederhana;
- content operation system;
- lead/customer management;
- sales workflow;
- internal business workflow.

Segment dapat dipersempit setelah validasi customer pertama.

---

## 7. Initial Commercial Model

Model awal BSF dikunci sebagai **Hybrid: Assisted Build → SaaS**.

### Phase A — Assisted Build

BSF dijual sebagai layanan pembangunan business system dengan factory sebagai production engine.

Customer datang dengan kebutuhan.

BSF membantu menghasilkan Build yang siap digunakan/dihandoff sesuai scope.

```text
Customer Need
    ↓
Discovery
    ↓
Build Proposal / Scope
    ↓
BSF Build
    ↓
Validation
    ↓
Deployment / Export
    ↓
Handoff
    ↓
Payment
```

### Phase B — Self-Service Factory

Setelah workflow terbukti berulang, sebagian proses dipindahkan menjadi self-service SaaS.

```text
Customer
   ↓
BSF Factory
   ↓
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

SaaS bukan prerequisite untuk membuktikan value BSF.

---

## 8. Initial Offer Structure

Penawaran awal harus sederhana.

### Offer: Business System Build

Customer membayar untuk satu hasil pembangunan system dengan scope yang disepakati.

Minimal delivery:

1. kebutuhan bisnis yang disepakati;
2. selected system / custom definition;
3. selected modules;
4. configured build;
5. connection requirements/status;
6. validation result;
7. deploy/export output yang didukung;
8. handoff.

Harga tidak dikunci di dokumen ini karena pricing harus mengikuti hasil validasi pasar dan effort delivery aktual.

---

## 9. Revenue Model

BSF dapat menghasilkan pendapatan melalui beberapa layer, tetapi **tidak semuanya menjadi MVP sekarang**.

| Revenue Layer | Status | Fungsi |
|---|---|---|
| Assisted Build Fee | **NOW** | Pendapatan awal dari pembangunan system |
| Customization / Integration Fee | **NOW** | Biaya untuk kebutuhan khusus yang masih dalam factory scope |
| Maintenance / Support | Later | Dukungan setelah delivery |
| SaaS Subscription | Later | Akses self-service factory |
| Private System / Module Library | Later | Library khusus customer/organization |
| Marketplace / Asset Revenue Share | Later | Ekosistem asset pihak ketiga |

**Rule:** revenue model tidak boleh memaksa BSF menjadi provider resource yang seharusnya dimiliki customer.

---

## 10. Commercial Delivery Loop

Ini adalah loop komersial canonical BSF:

```text
1. CUSTOMER NEED
       ↓
2. DEFINE / SELECT SYSTEM
       ↓
3. CREATE BUILD
       ↓
4. COMPOSE MODULES
       ↓
5. CONFIGURE
       ↓
6. CONNECT REQUIRED RESOURCES
       ↓
7. VALIDATE
       ↓
8. DEPLOY / EXPORT
       ↓
9. HANDOFF BUSINESS SYSTEM
       ↓
10. CUSTOMER VALUE / PAYMENT
       ↓
11. REUSE / NEXT BUILD
```

Loop ini menghubungkan **product loop** dengan **commercial loop**.

---

## 11. Product Loop vs Commercial Loop

### Product Loop

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

### Commercial Loop

```text
Need
 ↓
Scope
 ↓
Build
 ↓
Delivery
 ↓
Value
 ↓
Payment
 ↓
Reuse / Next Build
```

Keduanya tidak boleh dicampur.

**Product loop menjelaskan bagaimana system dibangun.**  
**Commercial loop menjelaskan mengapa customer membayar.**

---

## 12. First Customer Validation

Tujuan fase pertama bukan memperoleh banyak user.

Tujuan pertama adalah membuktikan bahwa seseorang bersedia membayar untuk hasil Build.

### Validation Questions

1. Apakah customer memiliki masalah business-system yang nyata?
2. Apakah masalah tersebut cukup penting untuk dibayar?
3. Apakah BSF dapat mengurangi waktu/pekerjaan dibanding build from zero?
4. Apakah hasil Build benar-benar digunakan?
5. Apakah customer bersedia membayar Build berikutnya atau meminta customization lanjutan?

### First Commercial Success

Sinyal terkuat bukan jumlah signup.

Sinyal terkuat adalah:

```text
Real Need
   ↓
Real Build
   ↓
Real Delivery
   ↓
Real Usage
   ↓
Real Payment
```

---

## 13. What Is NOT the First Goal

BSF fase awal **tidak** mengejar:

- marketplace besar;
- ribuan template;
- semua jenis business system;
- universal deployment;
- semua AI provider;
- billing platform kompleks;
- multi-tenant enterprise suite;
- autonomous software generation.

Fokus awal:

> **Make one valuable business-system build repeatable and sellable.**

---

## 14. Commercial Boundary

BSF tidak boleh menjual sesuatu dengan cara yang bertentangan dengan product boundary.

BSF bukan:

- unlimited AI provider;
- hosting provider default;
- database provider default;
- API subsidy;
- arbitrary software agency without factory boundaries;
- marketplace pada MVP.

Jika customer membutuhkan resource eksternal, resource tersebut harus direpresentasikan sebagai external resource/connection sesuai architecture dan ownership boundary.

---

## 15. Build Delivery Definition

Satu Build dianggap memiliki commercial delivery apabila:

- kebutuhan/scope customer jelas;
- system definition jelas;
- composition selesai;
- configuration diterapkan;
- required connections diketahui dan tersedia/ditangani sesuai scope;
- validation menghasilkan status yang dapat dipertanggungjawabkan;
- output deployment/export tersedia pada target yang didukung;
- customer menerima hasil dan handoff yang disepakati.

**Validation tetap menjadi gate.** Commercial pressure tidak boleh digunakan untuk melewati gate.

---

## 16. Reuse as Business Advantage

Setiap Build yang berhasil dapat meningkatkan factory asset base.

```text
Build 1
  ↓
Reusable System / Module / Logic
  ↓
Build 2
  ↓
Faster Delivery
  ↓
More Reusable Assets
  ↓
Build 3
```

Inilah flywheel BSF:

> **More successful builds → better reusable assets → faster future builds → higher delivery leverage.**

Reuse harus tetap menjaga perbedaan antara source asset dan build-specific configuration.

---

## 17. Business Success Metrics

Untuk fase awal, gunakan metrik sederhana:

### Primary

- number of paid Builds;
- Build completion rate;
- customer usage after delivery;
- repeat Build / customization rate.

### Efficiency

- time from need to Build;
- percentage of reusable components per Build;
- repeated work avoided.

### Product Quality

- validation failure rate;
- deployment/export failure rate;
- customer-reported blockers.

Tidak perlu membangun analytics platform khusus pada MVP hanya untuk mengukur metrik ini.

---

## 18. Immediate Execution Plan

Urutan setelah dokumen ini dikunci:

```text
BUSINESS MODEL LOCK
        ↓
MASTER SYSTEM PROMPT
        ↓
AUDIT 05 IMPLEMENTATION
        ↓
MAKE ONE BUILD DEMOABLE
        ↓
REAL CUSTOMER / PILOT
        ↓
PAID BUILD
        ↓
LEARN
        ↓
REUSE
        ↓
ONLY THEN SCALE PRODUCT
```

Jadi langkah berikutnya bukan membuat fitur random.

Langkah berikutnya adalah memastikan implementation 05 benar-benar mampu mendukung **satu commercial Build end-to-end**.

---

## 19. Commercial North Star

> **BSF turns one business need into one valuable business-system Build, then turns successful Builds into reusable factory capability.**

Versi singkat:

> **One need → one Build → one delivered system → one paid outcome → reusable factory asset.**

---

## 20. Traceability

| Commercial Decision | Product Mapping |
|---|---|
| Build is delivery unit | FR-09 |
| Customer buys business-system outcome | FR-01–FR-10 + Value Proposition |
| Reusable system/module creates leverage | FR-02, FR-04, FR-11 |
| Validation before delivery | FR-08, Factory Gates |
| External resources remain ownership-aware | FR-07, NFR-05 |
| Assisted Build first | MVP delivery strategy |
| SaaS later | Explicitly deferred commercialization layer |

---

## 21. Official Commercial Baseline

> **BSF initially monetizes the construction and delivery of valuable business-system Builds, using its factory workflow and reusable assets to reduce repeated work. Once this workflow is proven through real paid Builds, the same factory can be productized into a self-service SaaS.**
