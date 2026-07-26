# Contributing to Toddynelson KOS

Welcome to the Toddynelson Knowledge Operating System (KOS). This project functions as a clean, structured long-term memory vault designed for both human operators and autonomous AI agents.

## Principles

- **Clean Architecture**: Follow the exact directory hierarchy under `obsidian/` and `docs/`.
- **Strict Metadata**: Every Markdown note must include standardized YAML frontmatter matching its designated template in `obsidian/00 - System/Templates/`.
- **AI & MCP Compatible**: Ensure bi-directional linking (`[[Note Link]]`) and explicit property relations are maintained.
- **Git Friendly**: Keep commits atomic and structured (`feat:`, `fix:`, `docs:`, `chore:`).

## Guidelines for AI Agents

- Read `docs/architecture.md`, `docs/graph-model.md`, and `docs/conventions.md` before making structural edits.
- Use explicit YAML properties and avoid loose unlinked text.
- Do not alter system template frontmatter schemas without architectural review.
