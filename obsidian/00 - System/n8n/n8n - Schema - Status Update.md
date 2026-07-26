---
id: "n8n-schema-status-update"
type: "n8n-schema"
title: "n8n Webhook Schema — Status Update"
trigger: "POST /webhook/status-update"
status: "defined"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/n8n"]
---

# n8n Webhook Schema — Status Update

Define o formato JSON para atualizar a propriedade `status` (e opcionalmente outras propriedades) de uma nota existente no vault, sem substituir seu conteúdo.

## Endpoint

```
POST /webhook/status-update
Content-Type: application/json
```

## Payload Schema

```json
{
  "note_path": "string (required) — Relative path from vault root",
  "updates": {
    "status": "string (required) — New status value",
    "<optional_key>": "<optional_value>"
  },
  "agent_id": "string (optional) — Agent performing the update",
  "reason": "string (optional) — Human-readable reason for the change"
}
```

## Payload Example — Project Status Change

```json
{
  "note_path": "obsidian/03 - Work/Projects/My Project.md",
  "updates": {
    "status": "completed",
    "updated": "2026-07-26"
  },
  "agent_id": "agent-pm-v1",
  "reason": "All tasks marked done; final review passed."
}
```

## Valid Status Values by Entity Type

| Entity Type | Valid Statuses |
|---|---|
| `project` | `planning`, `active`, `paused`, `completed`, `archived` |
| `decision` | `proposed`, `accepted`, `rejected`, `superseded` |
| `workflow` | `draft`, `active`, `paused`, `deprecated` |
| `ai_agent` | `active`, `standby`, `deprecated` |
| `research` | `in-progress`, `completed`, `abandoned` |
| `integration` | `defined`, `active`, `inactive`, `deprecated` |

## Processing Rules

1. `note_path` must resolve to an existing file in the vault.
2. Only YAML frontmatter properties are modified; body content is untouched.
3. The `updated` timestamp property is always set to the current date on any update.
4. Changes are logged to git automatically via the n8n workflow.
