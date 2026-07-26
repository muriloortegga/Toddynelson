# Naming & Metadata Conventions

## Naming Conventions

- **Files & Folders**: Use PascalCase or Title Case for Note titles (`Template - Project.md`, `Architecture.md`).
- **Dates**: Standard ISO 8601 format (`YYYY-MM-DD` or `YYYY-MM-DDTHH:mm:ssZ`).
- **Templates**: Kept inside `obsidian/00 - System/Templates/` prefixed with `Template - `.

## Standard Frontmatter Schema

All notes MUST contain a valid YAML frontmatter block at the top of the file:

```yaml
---
id: "<placeholder>"
type: "<placeholder>"
title: "<placeholder>"
status: "<placeholder>"
created: "<placeholder>"
updated: "<placeholder>"
tags: []
aliases: []
related: []
---
```

## Tag Conventions

- Lowercase, hyphen-separated (`#knowledge/concept`, `#work/project`, `#system/template`).
- Do not use spaces or special characters in tags.
