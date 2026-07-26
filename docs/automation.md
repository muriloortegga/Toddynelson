# Automation & Integration Protocols

## Overview

The Toddynelson KOS is designed for seamless integration with external automation tools, specifically **n8n**, **Model Context Protocol (MCP)** servers, and **Multi-Agent Systems**.

## Automation Boundaries

- **n8n Integration**:
  - Webhooks and scheduled workflows process incoming items into `obsidian/01 - Inbox/`.
  - Workflows MUST parse YAML properties before moving notes from `01 - Inbox/` to destination folders.
  - Workflow definitions are cataloged under `obsidian/00 - System/n8n/` and `obsidian/00 - System/Workflows/`.

- **MCP Integration**:
  - MCP tools read/write to the vault via standard file system operations or local APIs.
  - MCP agent tools reference template schemas under `obsidian/00 - System/Templates/` when instantiating new entities.
  - MCP metadata and configuration specs are defined under `obsidian/00 - System/MCP/`.

- **Multi-Agent System**:
  - Autonomous agents operate on designated roles (`obsidian/00 - System/Agents/`).
  - Agents append decision logs to `obsidian/03 - Work/Decisions/` using `Template - Decisao.md`.
