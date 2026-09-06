# BSF — Business System Factory

BSF (**Business System Factory**) adalah platform/orchestration layer untuk membantu membangun, menyesuaikan, dan men-deploy business system dengan memanfaatkan koneksi AI dan infrastruktur milik pengguna/client.

## Status

**Foundation / Definition Phase**

Repository ini menjadi **single source of truth** untuk definisi resmi, product direction, architecture, UX/UI, dan implementation plan BSF.

## Core Concept

BSF tidak diposisikan sebagai penyedia LLM tanpa batas, hosting/database provider, aggregator API murah, atau pihak yang mensubsidi infrastruktur client.

BSF berfungsi sebagai **Factory** yang mengorkestrasi:

- Factory Engine
- Official System / Template Library
- Module Library
- Prompt / System Library
- Connector & Integration Layer
- Deployment Layer

## Primary Entry Paths

1. **Build from Official Systems** — mulai dari system/template resmi BSF.
2. **Build Custom** — membangun business system yang disesuaikan dengan kebutuhan.
3. **Build from Modules** — merakit system dari module yang tersedia.

## Documentation Flow

```text
IDEA
  ↓
OFFICIAL DEFINITION
  ↓
PRODUCT
  ↓
ARCHITECTURE
  ↓
UX/UI
  ↓
IMPLEMENTATION
```

## Source of Truth

Definisi dan batasan utama BSF dimulai dari:

- [`BSF_OFFICIAL_OVERVIEW.md`](docs/00_OFFICIAL/BSF_OFFICIAL_OVERVIEW.md)

Dokumen lain akan ditambahkan secara bertahap setelah fondasi resmi ini stabil.

## Direction

BSF dibangun sebagai fondasi untuk menghasilkan business systems secara lebih terstruktur, reusable, configurable, dan deployable — tanpa mengambil alih kepemilikan AI maupun infrastruktur client.
