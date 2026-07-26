---
id: "mcp-contract-vault-reader"
type: "mcp-contract"
title: "MCP Contract — Vault Reader"
version: "1.0"
status: "defined"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/mcp"]
---

# MCP Contract — Vault Reader

Define as permissões e o escopo de leitura concedidas a agentes de IA via Model Context Protocol (MCP).

## Purpose

Estabelecer o que um agente tem permissão de **ler** no vault, garantindo que dados sensíveis ou em edição não sejam expostos inadvertidamente.

## Read Permissions

| Folder | Access | Notes |
|---|---|---|
| `obsidian/00 - System/Templates/` | ✅ Full | Agents must use templates when creating entities |
| `obsidian/00 - System/Dataview/` | ✅ Full | Agents can use query templates as reference |
| `obsidian/00 - System/Standards/` | ✅ Full | Required for schema-compliant writes |
| `obsidian/00 - System/Agents/` | ✅ Full | Agents may read their own and peer definitions |
| `obsidian/00 - System/MCP/` | ✅ Full | Agents read their own contract |
| `obsidian/02 - Knowledge/` | ✅ Full | Primary memory retrieval source |
| `obsidian/03 - Work/Projects/` | ✅ Full | Task and project context |
| `obsidian/03 - Work/Decisions/` | ✅ Full | Decision history for context |
| `obsidian/01 - Inbox/` | ⚠️ Read-Only | No modification; inbox processing is controlled |
| `obsidian/04 - Life/` | 🚫 Denied | Personal data; human-only access |
| `obsidian/05 - Assets/` | ⚠️ Metadata Only | Binary assets; no bulk file reading |
| `obsidian/06 - Archive/` | ⚠️ Read-Only | Historical reference only |

## MCP Tool Definitions

```yaml
tools:
  - name: read_note
    description: Read the full content of a note by path
    input_schema:
      path: string  # relative path from vault root

  - name: search_notes
    description: Search notes by YAML property values
    input_schema:
      property: string   # YAML key to filter on
      value: string      # expected value
      folder: string     # optional folder scope

  - name: list_folder
    description: List all notes inside a given folder
    input_schema:
      folder: string     # relative folder path from vault root
```

## Constraints

- No binary file reading (images, PDFs, audio, video).
- Results must be filtered through `Standards - YAML Property Registry.md` before passing to downstream tools.
- Read operations are stateless — agents must not cache vault contents between sessions.
