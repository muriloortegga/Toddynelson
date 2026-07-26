---
id: "dashboard-knowledge"
type: "dashboard"
title: "Knowledge Dashboard"
scope: "02 - Knowledge"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/dashboard", "#knowledge"]
---

# Knowledge Dashboard

Visão do grafo de conhecimento: entidades, conexões recentes e distribuição por domínio.

## Full Knowledge Index

> Embed: [[Dataview - Knowledge Index]]

---

## Most Referenced Notes

```dataview
TABLE
  length(file.inlinks) AS "Inbound Links",
  type AS "Type"
FROM "obsidian/02 - Knowledge"
WHERE type
SORT length(file.inlinks) DESC
LIMIT 10
```

---

## Recently Added

```dataview
TABLE
  type AS "Type",
  tags AS "Tags",
  file.ctime AS "Added"
FROM "obsidian/02 - Knowledge"
SORT file.ctime DESC
LIMIT 10
```

---

## Knowledge by Domain

```dataview
TABLE rows.file.name AS "Notes"
FROM "obsidian/02 - Knowledge"
WHERE type
GROUP BY type
SORT length(rows) DESC
```

---

## Navigation

- [[Dashboard - System]]
- [[Dashboard - Work]]
- [[Dashboard - Agents]]
