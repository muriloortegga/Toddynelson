---
id: "dashboard-agents"
type: "dashboard"
title: "Agents Dashboard"
scope: "00 - System/Agents, 00 - System/MCP"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/dashboard", "#system/agents"]
---

# Agents Dashboard

Visão operacional de todos os agentes de IA registrados, servidores MCP e workflows ativos.

## AI Agents & MCP Registry

> Embed: [[Dataview - AI Agents Index]]

---

## Active Workflows

```dataview
TABLE
  trigger AS "Trigger",
  platform AS "Platform",
  status AS "Status"
FROM "obsidian/00 - System/Workflows"
WHERE type = "workflow" AND status = "active"
SORT title ASC
```

---

## Active Integrations

```dataview
TABLE
  service_a AS "From",
  service_b AS "To",
  protocol AS "Protocol",
  status AS "Status"
FROM "obsidian/00 - System/Integrations"
WHERE type = "integration"
SORT status ASC
```

---

## Recent Agent Decisions

```dataview
TABLE
  decision_maker AS "Agent",
  date AS "Date",
  impact AS "Impact"
FROM "obsidian/03 - Work/Decisions"
WHERE type = "decision"
SORT date DESC
LIMIT 5
```

---

## Agent Protocols

- [[Agents - Memory Protocol]]
- [[Agents - Communication Protocol]]
- [[Agents - Role Registry]]

---

## Navigation

- [[Dashboard - System]]
- [[Dashboard - Work]]
- [[Dashboard - Knowledge]]
