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

## Governance: two brains, two roles

Everything built from here forward — in this repo and in any connected app (including the Lovable project at `toddy-assistente`) — must respect this split:

- **Company OS** (`obsidian/03 - Work/Company OS/company-os-main/`) is the **product brain of the company**: market research, mapped pain points, problem patterns and prioritized opportunities for whatever the company is building to sell (currently Fitness & Wellness). It only gets populated once something has actually been executed — never document what hasn't happened yet.
- **Toddynelson** (this repo as a whole — `obsidian/`, `docs/`, `web/`) is the **operations brain**: the Knowledge OS itself — vault structure, graph, AI agents, MCP, integrations, workflows and decisions about how the company runs day to day.

Don't conflate the two. Company OS content is not "operations," and Toddynelson's own architecture is not "the product the company sells." The `obsidian/` folder already organizes the graph/home view of the operations brain well — new work should extend that structure, not duplicate or bypass it.
