---
id: "dataview-decisions-log"
type: "dataview-query"
title: "Decisions Log"
scope: "03 - Work/Decisions"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/dataview", "#work/decisions"]
---

# Decisions Log

Registro cronológico de todas as decisões arquiteturais e estratégicas documentadas no KOS.

## Query Reference — All Decisions

```dataview
TABLE
  decision_maker AS "By",
  date AS "Date",
  impact AS "Impact",
  status AS "Status"
FROM "obsidian/03 - Work/Decisions"
WHERE type = "decision"
SORT date DESC
```

## Query Reference — High Impact Only

```dataview
TABLE
  title AS "Decision",
  decision_maker AS "By",
  date AS "Date",
  alternatives_considered AS "Alternatives"
FROM "obsidian/03 - Work/Decisions"
WHERE type = "decision" AND impact = "high"
SORT date DESC
```

## Decision Status Values

| Status | Meaning |
|---|---|
| `proposed` | Under evaluation |
| `accepted` | Implemented or in progress |
| `rejected` | Discarded with documented reason |
| `superseded` | Replaced by a newer decision |

## Usage Notes

- All agent-generated decisions must use `Template - Decisao.md`.
- Decision maker can be a human (`[[Person Name]]`) or an agent (`[[Agent Name]]`).
- Cross-reference related notes via the `related` YAML property.
