# Toddynelson - Knowledge Operating System (KOS)

Toddynelson is a Knowledge Operating System (KOS) architected around an Obsidian Vault that serves as long-term memory for human operators and multi-agent AI systems.

## Key Principles

- **Clean Architecture**: Decoupled, modular, and structured directory design.
- **Scalable**: Built to handle thousands of interconnected notes, entities, and automation workflows.
- **AI & MCP First**: Standardized frontmatter properties and graph relations optimized for Model Context Protocol (MCP) servers and LLM agents.
- **n8n Ready**: Structured inbox and event-driven automation interfaces.
- **Git Native**: Version-controlled markdown files with predictable schemas.

## Directory Structure

```
obsidian/
├── 00 - System/       # Dashboards, Templates, Properties, MOCs, Canvas, Agents, MCP, n8n, Workflows
├── 01 - Inbox/        # Raw inputs and unprocessed notes
├── 02 - Knowledge/    # Evergreen concepts, entities, frameworks, technologies, research
├── 03 - Work/         # Active projects, clients, products, meetings, decisions
├── 04 - Life/         # Personal health, finance, relationships, journal, goals
├── 05 - Assets/       # Static assets (images, PDFs, audio, video, attachments)
└── 06 - Archive/      # Historical records and completed entities
```

## Documentation

- [Architecture Overview](docs/architecture.md)
- [Graph Model & Node Relations](docs/graph-model.md)
- [Naming & Metadata Conventions](docs/conventions.md)
- [Automation & Integration Protocols](docs/automation.md)

## Governance

See [CONTRIBUTING.md](CONTRIBUTING.md), [ROADMAP.md](ROADMAP.md), and [TASKS.md](TASKS.md).
