---
id: "n8n-schema-entity-create"
type: "n8n-schema"
title: "n8n Webhook Schema — Entity Create"
trigger: "POST /webhook/entity-create"
status: "defined"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/n8n"]
---

# n8n Webhook Schema — Entity Create

Define o formato JSON esperado para criação programática de uma nova entidade tipada diretamente nas pastas finais do vault (bypassando `01 - Inbox`).

> **Use Case**: Agentes ou sistemas externos que já conhecem o tipo e destino da entidade.

## Endpoint

```
POST /webhook/entity-create
Content-Type: application/json
```

## Payload Schema

```json
{
  "type": "string (required) — Entity type from the Template Registry",
  "title": "string (required) — Note title / entity name",
  "properties": {
    "<yaml_key>": "<value>"
  },
  "body": "string (optional) — Additional markdown body content",
  "agent_id": "string (optional) — Agent that created this entity"
}
```

## Supported Entity Types

| `type` value | Template Used | Destination |
|---|---|---|
| `project` | `Template - Projeto.md` | `03 - Work/Projects/` |
| `client` | `Template - Cliente.md` | `03 - Work/Clients/` |
| `person` | `Template - Pessoa.md` | `02 - Knowledge/People/` |
| `concept` | `Template - Conceito.md` | `02 - Knowledge/Concepts/` |
| `tool` | `Template - Ferramenta.md` | `02 - Knowledge/Tools/` |
| `decision` | `Template - Decisao.md` | `03 - Work/Decisions/` |
| `workflow` | `Template - Workflow.md` | `00 - System/Workflows/` |
| `ai_agent` | `Template - Agente IA.md` | `00 - System/Agents/` |
| `mcp_server` | `Template - MCP.md` | `00 - System/MCP/` |

## Payload Example

```json
{
  "type": "decision",
  "title": "Use YAML frontmatter as the canonical metadata format",
  "properties": {
    "decision_maker": "[[Murilo Ortega]]",
    "date": "2026-07-26",
    "impact": "high",
    "status": "accepted"
  },
  "agent_id": "agent-architect-v1"
}
```

## Validation Rules

1. `type` must match a value in the Supported Entity Types table.
2. `properties` keys must be valid for the selected type (see `Standards - YAML Property Registry.md`).
3. Title must be unique within the destination folder.
