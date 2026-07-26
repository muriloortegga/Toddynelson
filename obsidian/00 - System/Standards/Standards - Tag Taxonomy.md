---
id: "standards-tag-taxonomy"
type: "standard"
title: "Standards — Tag Taxonomy"
version: "1.0"
status: "active"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/standards"]
---

# Standards — Tag Taxonomy

Taxonomia hierárquica de tags para todo o vault do Toddynelson KOS. Tags são lowercase, separadas por `/` para hierarquia e por `-` para multi-palavra.

## Tag Hierarchy

### `#system/` — Infrastructure & KOS Operations

| Tag | Usage |
|---|---|
| `#system/dashboard` | Dashboard notes |
| `#system/template` | Template definition files |
| `#system/dataview` | Dataview query files |
| `#system/standards` | Standard and convention files |
| `#system/agents` | Agent definition and protocol files |
| `#system/mcp` | MCP contract and configuration files |
| `#system/n8n` | n8n schema and workflow definitions |
| `#system/inbox` | Notes related to inbox processing |
| `#system/handoff` | Inter-agent task handoff notes |

---

### `#knowledge/` — Evergreen Knowledge Entities

| Tag | Usage |
|---|---|
| `#knowledge/concept` | Theoretical or foundational ideas |
| `#knowledge/person` | People notes |
| `#knowledge/company` | Company notes |
| `#knowledge/book` | Book notes |
| `#knowledge/course` | Course notes |
| `#knowledge/framework` | Framework notes |
| `#knowledge/tool` | Tool notes |
| `#knowledge/technology` | Technology notes |
| `#knowledge/market` | Market analysis notes |
| `#knowledge/research` | Research and literature notes |
| `#knowledge/ai` | AI-specific knowledge entities |

---

### `#work/` — Active Work & Projects

| Tag | Usage |
|---|---|
| `#work/project` | Project notes |
| `#work/client` | Client relationship notes |
| `#work/product` | Product definition notes |
| `#work/meeting` | Meeting notes |
| `#work/decisions` | Decision record notes |
| `#work/content` | Content creation items |
| `#work/experiment` | Active experiments |

---

### `#life/` — Personal Domain

| Tag | Usage |
|---|---|
| `#life/health` | Health-related notes |
| `#life/finance` | Financial notes |
| `#life/relationships` | Relationship notes |
| `#life/journal` | Journal entries |
| `#life/goals` | Goal tracking notes |

---

### `#status/` — Lifecycle State Tags (Secondary)

Used alongside the YAML `status` property for visibility in graph view.

| Tag | Usage |
|---|---|
| `#status/active` | Currently active entity |
| `#status/paused` | Temporarily paused |
| `#status/completed` | Finished |
| `#status/archived` | Archived/historical |
| `#status/draft` | In-progress, not ready |

---

## Tag Rules

1. **Always lowercase** — `#knowledge/ai`, not `#Knowledge/AI`.
2. **Use hierarchy** — prefer `#knowledge/concept` over a flat `#concept`.
3. **One primary namespace per note** — a note should belong to one top-level namespace (`#system/`, `#knowledge/`, `#work/`, or `#life/`).
4. **No spaces** — use `-` for multi-word segments: `#work/company-os`.
5. **Tags complement, not replace** — the `type` YAML property is authoritative; tags are for navigation and filtering.
