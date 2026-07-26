---
id: "dashboard-work"
type: "dashboard"
title: "Work Dashboard"
scope: "03 - Work"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/dashboard", "#work"]
---

# Work Dashboard

Visão operacional de projetos ativos, clientes, decisões e reuniões.

## Active Projects

> Embed: [[Dataview - Projects Index]]

---

## Pending Decisions

```dataview
TABLE
  decision_maker AS "By",
  date AS "Date",
  impact AS "Impact"
FROM "obsidian/03 - Work/Decisions"
WHERE type = "decision" AND status = "proposed"
SORT date ASC
```

---

## Upcoming Meetings

```dataview
TABLE
  file.name AS "Meeting",
  status AS "Status",
  file.ctime AS "Created"
FROM "obsidian/03 - Work/Meetings"
SORT file.ctime DESC
LIMIT 5
```

---

## Recent Experiments

```dataview
TABLE
  status AS "Status",
  file.mtime AS "Last Updated"
FROM "obsidian/03 - Work/Experiments"
SORT file.mtime DESC
LIMIT 5
```

---

## Navigation

- [[Dashboard - System]]
- [[Dashboard - Knowledge]]
- [[Dashboard - Agents]]
