---
id: "dashboard-system"
type: "dashboard"
title: "System Dashboard"
scope: "global"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/dashboard"]
---

# System Dashboard

Visão geral da saúde operacional do Knowledge Operating System.

## Inbox Status

> Embed: [[Dataview - Inbox Queue]]

---

## Entity Counts by Type

```dataview
TABLE rows.file.name AS "Notes"
FROM "obsidian"
WHERE type
GROUP BY type
SORT length(rows) DESC
```

---

## Recently Modified

```dataview
TABLE
  type AS "Type",
  file.folder AS "Location",
  file.mtime AS "Modified"
FROM "obsidian"
WHERE type
SORT file.mtime DESC
LIMIT 10
```

---

## System Health Checks

| Check | Target | Query |
|---|---|---|
| Inbox Queue | 0 unprocessed items | `Dataview - Inbox Queue` |
| Orphan Notes | 0 notes without `type` | Custom query |
| Dead Links | 0 broken wikilinks | Graph view check |

---

## Linked Dashboards

- [[Dashboard - Work]]
- [[Dashboard - Knowledge]]
- [[Dashboard - Agents]]
