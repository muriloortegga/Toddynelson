---
id: "dataview-ai-agents-index"
type: "dataview-query"
title: "AI Agents & MCP Index"
scope: "00 - System/Agents, 00 - System/MCP"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/dataview", "#system/agents"]
---

# AI Agents & MCP Index

Lista todos os agentes de IA registrados e os servidores MCP definidos no sistema.

## Query Reference — AI Agents

```dataview
TABLE
  role AS "Role",
  model AS "Model",
  status AS "Status",
  tools_access AS "Tools"
FROM "obsidian/00 - System/Agents"
WHERE type = "ai_agent"
SORT status ASC, role ASC
```

## Query Reference — MCP Servers

```dataview
TABLE
  server_name AS "Server",
  version AS "Version",
  transport AS "Transport",
  status AS "Status",
  tools_provided AS "Tools"
FROM "obsidian/00 - System/MCP"
WHERE type = "mcp_server"
SORT status ASC
```

## Agent Status Values

| Status | Meaning |
|---|---|
| `active` | Agent is deployed and operational |
| `standby` | Defined but not currently running |
| `deprecated` | Retired; kept for historical reference |

## Usage Notes

- Link this query in `Dashboard - Agents.md`.
- Cross-reference with `Agents - Role Registry.md` for full context.
