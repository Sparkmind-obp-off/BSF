# BSF — Design System Foundation

**Status:** Official UX/UI Layer  
**Version:** 1.0  
**Scope:** MVP

## 1. Purpose

Design System Foundation menetapkan bahasa visual dan interaction primitives yang cukup untuk membangun factory MVP secara konsisten tanpa mengunci framework teknologi.

## 2. Design Tokens

Token categories:
- typography hierarchy;
- spacing scale;
- border/radius rules;
- surface hierarchy;
- elevation;
- interaction states;
- semantic status tokens.

Semantic statuses wajib memiliki makna konsisten: neutral, info, success, warning, blocking/error, disabled.

## 3. Core Components

Minimum component vocabulary:
- Button
- Link
- Input
- Select
- Textarea
- Checkbox / Toggle
- Card
- Badge / Status
- Stepper / Stage Indicator
- Progress Indicator
- Table / List
- Tabs
- Modal / Confirmation
- Alert / Inline Error
- Empty State
- Loading State
- Blueprint / Tree View
- Finding Item

## 4. Interaction Rules

Primary action harus jelas. Destructive or irreversible actions memerlukan confirmation bila relevan. Disabled action harus menjelaskan prerequisite ketika informasi tersebut penting.

## 5. State Semantics

Visual treatment harus konsisten untuk:
- current stage;
- completed stage;
- blocked stage;
- needs attention;
- ready;
- in progress;
- success;
- failure.

State tidak boleh dikomunikasikan hanya melalui warna.

## 6. Accessibility

Komponen harus mendukung keyboard interaction, visible focus, semantic labels, readable contrast, clear error association, dan responsive behavior.

## 7. Responsive Behavior

Desktop adalah primary builder workspace target, tetapi information hierarchy harus tetap usable pada viewport lebih kecil. Critical actions dan blockers tidak boleh hilang karena responsive collapse.

## 8. Content Rules

Microcopy harus konkret, singkat, dan action-oriented. Hindari jargon teknis ketika tidak diperlukan. Error menyebut masalah dan next action bila diketahui.

## 9. Scope Guardrail

Design system tidak mendefinisikan component untuk capability yang belum menjadi MVP requirement.
