---
id: "dataview-projects-index"
type: "dataview-query"
title: "Projects Index"
scope: "03 - Work/Projects"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/dataview"]
---

# Projects Index

Lista todos os projetos ativos, com status, responsável e datas.

## Query Reference

```dataview
TABLE
  status AS "Status",
  owner AS "Owner",
  priority AS "Priority",
  start_date AS "Start",
  target_date AS "Target"
FROM "obsidian/03 - Work/Projects"
WHERE type = "project"
SORT status ASC, target_date ASC
```

## Filters

| Filter | Value |
|---|---|
| `type` | `project` |
| `status` | `active`, `paused`, `completed`, `archived` |
| `priority` | `high`, `medium`, `low` |

## Usage Notes

- Use `WHERE status = "active"` to narrow to current work.
- Use `GROUP BY owner` for team-level views.
- Link this query in `Dashboard - Work.md`.
