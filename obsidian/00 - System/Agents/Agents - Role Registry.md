---
id: "agents-role-registry"
type: "agent-protocol"
title: "Agents — Role Registry"
version: "1.0"
status: "defined"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/agents"]
---

# Agents — Role Registry

Catálogo central de todos os papéis de agentes de IA definidos no KOS. Cada agente implantado deve ter um registro correspondente em `00 - System/Agents/` usando `Template - Agente IA.md`.

## Registry Structure

| Agent ID | Role | Model | Status | Note |
|---|---|---|---|---|
| `<placeholder>` | `<placeholder>` | `<placeholder>` | `<placeholder>` | `[[Agent Note]]` |

## Role Definitions

### Roles Planejados

| Role | Responsibility | Vault Permissions |
|---|---|---|
| **Inbox Processor** | Reviews `01 - Inbox`, assigns types, routes to final folder | Read Inbox, Write Knowledge/Work |
| **Research Agent** | Searches, synthesizes, and creates Knowledge notes | Read All, Write Knowledge |
| **Decision Logger** | Documents agent and system decisions | Read All, Write Decisions |
| **PM Agent** | Manages project status, creates meeting notes | Read All, Write Work |
| **MCP Gateway** | Orchestrates other agents via MCP tools | Read/Write via contracts |
| **Housekeeping Agent** | Archives stale notes, validates schema compliance | Read All, Move to Archive |

## Agent Definition Template Reference

Cada agente recebe uma nota individual em `00 - System/Agents/` com:

```yaml
---
id: "<agent-unique-id>"
type: "ai_agent"
name: "<Human Readable Name>"
role: "<role from table above>"
model: "<LLM model identifier>"
status: "active | standby | deprecated"
capabilities: ["list", "of", "capabilities"]
tools_access: ["create_note", "search_vault", "update_note_property"]
created: "<ISO date>"
updated: "<ISO date>"
tags: ["#system/agents"]
related: ["[[Agents - Role Registry]]", "[[MCP - Contract - Vault Reader]]"]
---
```

## Governance

- New agents must be added to this registry before deployment.
- Deprecated agents must have `status: deprecated` updated here.
- Permission changes must be reflected in both this file and the relevant MCP contracts.
