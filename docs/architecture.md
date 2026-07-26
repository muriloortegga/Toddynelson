# Architecture Specification

## Overview

The Toddynelson Knowledge Operating System (KOS) provides a deterministic, version-controlled architecture for persistent memory, shared context, and dynamic task execution across human operators and AI agents.

## Core Layers

1. **Storage Layer (`obsidian/`)**: File-based storage using GitHub-Flavored Markdown, standard YAML frontmatter, and local assets.
2. **System Layer (`obsidian/00 - System/`)**: Operational infrastructure containing Templates, Properties definitions, Maps of Content (MOCs), Agent definitions, MCP metadata, and n8n workflow schemas.
3. **Execution & Automation Layer (`n8n`, `MCP`)**: External orchestration engines interacting with the vault via file systems, git operations, or local API endpoints.
4. **Governance Layer (`docs/`, `.editorconfig`, Git)**: Enforces schema validity, metadata consistency, and version history.

## AI & Multi-Agent Design

- Agents read/write notes according to strict entity schemas defined in `obsidian/00 - System/Templates/`.
- Long-term memory retrieval relies on deterministic YAML keys (`tags`, `type`, `status`, `related`, `aliases`) combined with graph traversals via double-bracket links (`[[Link]]`).
- No raw, unformatted text is ingested directly into `02 - Knowledge/` or `03 - Work/` without passing through `01 - Inbox/` or an automated validation pipeline.
