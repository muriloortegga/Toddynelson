---
id: "mcp-contract-vault-writer"
type: "mcp-contract"
title: "MCP Contract — Vault Writer"
version: "1.0"
status: "defined"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/mcp"]
---

# MCP Contract — Vault Writer

Define as permissões e o escopo de **escrita** concedidas a agentes de IA via Model Context Protocol (MCP).

## Purpose

Garantir que agentes escrevam no vault de forma determinística, respeitando os schemas de templates, as convenções de nomenclatura e os limites de acesso.

## Write Permissions

| Folder | Access | Rule |
|---|---|---|
| `obsidian/01 - Inbox/` | ✅ Create Only | Agents may only create notes here; no overwrites |
| `obsidian/02 - Knowledge/` | ✅ Create + Update | Must use correct template for entity type |
| `obsidian/03 - Work/Projects/` | ✅ Create + Update | Must use `Template - Projeto.md` |
| `obsidian/03 - Work/Decisions/` | ✅ Create Only | Decision records are append-only |
| `obsidian/03 - Work/Meetings/` | ✅ Create Only | Meeting notes are append-only |
| `obsidian/00 - System/Agents/` | ⚠️ Self-Update Only | An agent may only update its own definition note |
| `obsidian/04 - Life/` | 🚫 Denied | Human-only domain |
| `obsidian/05 - Assets/` | 🚫 Denied | No binary asset creation by agents |
| `obsidian/06 - Archive/` | 🚫 Denied | Archiving is a human-controlled action |

## MCP Tool Definitions

```yaml
tools:
  - name: create_note
    description: Create a new note using a registered template
    input_schema:
      type: string        # entity type matching a template
      title: string       # note title / filename
      folder: string      # destination folder
      properties: object  # YAML frontmatter key-value pairs
      body: string        # optional markdown body content

  - name: update_note_property
    description: Update one or more YAML frontmatter properties of an existing note
    input_schema:
      path: string        # relative path from vault root
      updates: object     # key-value pairs to update

  - name: append_to_note
    description: Append a markdown block to the end of an existing note body
    input_schema:
      path: string        # relative path from vault root
      content: string     # markdown content to append
```

## Mandatory Write Rules

1. **Template Compliance**: All created notes MUST use the schema from `obsidian/00 - System/Templates/`.
2. **Property Validation**: All YAML properties must conform to `Standards - YAML Property Registry.md`.
3. **No Overwrite**: Agents may never overwrite the full content of an existing note; only property updates and appends are permitted.
4. **Audit Trail**: Every agent write must include the `agent_id` property in the YAML frontmatter.
5. **Naming Convention**: Filenames follow Title Case with spaces. No special characters except hyphens.
