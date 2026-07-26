---
id: "dataview-inbox-queue"
type: "dataview-query"
title: "Inbox Queue"
scope: "01 - Inbox"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/dataview", "#system/inbox"]
---

# Inbox Queue

Exibe todas as notas não processadas na pasta `01 - Inbox` — itens sem propriedade `type` definida ou com `status: inbox`.

## Query Reference — Untyped Notes (Unprocessed)

```dataview
TABLE
  file.ctime AS "Created",
  file.size AS "Size (bytes)"
FROM "obsidian/01 - Inbox"
WHERE !type
SORT file.ctime ASC
```

## Query Reference — All Inbox Items

```dataview
TABLE
  type AS "Type",
  status AS "Status",
  file.ctime AS "Received"
FROM "obsidian/01 - Inbox"
SORT file.ctime ASC
```

## Processing Rules

1. Every note entering `01 - Inbox` should be reviewed and assigned a `type` property.
2. After assigning `type`, move the note to the correct destination folder under `02 - Knowledge/`, `03 - Work/`, or `04 - Life/`.
3. Automated ingesters (n8n) place notes here with `status: inbox`.
4. An empty Inbox Queue indicates a healthy, processed vault state.

## Usage Notes

- Link this query in `Dashboard - System.md` for a real-time processing signal.
- Target SLA: all inbox items processed within 24 hours of arrival.
