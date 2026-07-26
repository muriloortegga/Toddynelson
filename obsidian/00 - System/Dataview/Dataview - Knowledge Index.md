---
id: "dataview-knowledge-index"
type: "dataview-query"
title: "Knowledge Index"
scope: "02 - Knowledge"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/dataview"]
---

# Knowledge Index

Lista todas as entidades de conhecimento: conceitos, livros, frameworks, ferramentas, tecnologias, cursos.

## Query Reference — All Knowledge

```dataview
TABLE
  type AS "Type",
  status AS "Status",
  tags AS "Tags"
FROM "obsidian/02 - Knowledge"
SORT type ASC, title ASC
```

## Query Reference — By Type

```dataview
TABLE
  title AS "Title",
  status AS "Status",
  related AS "Related"
FROM "obsidian/02 - Knowledge"
WHERE type = "<type>"
SORT file.mtime DESC
```

## Supported Types

| Type | Folder |
|---|---|
| `concept` | `Concepts/` |
| `person` | `People/` |
| `company` | `Companies/` |
| `book` | `Books/` |
| `course` | `Courses/` |
| `framework` | `Frameworks/` |
| `tool` | `Tools/` |
| `market` | `Markets/` |
| `research` | `Research/` |

## Usage Notes

- Replace `<type>` with a specific entity type for filtered views.
- Link this query in `Dashboard - Knowledge.md`.
