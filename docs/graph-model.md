# Graph Model & Node Relations

## Graph Nodes

Every Markdown file within the KOS represents a node in the Knowledge Graph. Nodes are categorized into primary entity types:

- **Concept**: Theoretical, conceptual, or foundational ideas (`02 - Knowledge/Concepts`)
- **Person**: Individual entity (`02 - Knowledge/People`)
- **Company**: Organizational entity (`02 - Knowledge/Companies`)
- **Book / Course / Reference**: Learning source (`02 - Knowledge/`)
- **Framework / Technology / Tool**: Technical stack element (`02 - Knowledge/`)
- **Project**: Executable initiative (`03 - Work/Projects`)
- **Decision**: Architectural or strategic decision record (`03 - Work/Decisions`)
- **Agent IA / MCP / Workflow**: Operational infrastructure entity (`00 - System/`)

## Edge Types (Relationships)

Relationships between nodes are represented via two mechanisms:

1. **Explicit YAML Properties**:
   - `related: ["[[Node A]]", "[[Node B]]"]`
   - `parent: "[[Parent Node]]"`
   - `owner: "[[Person Node]]"`
2. **Inline Wikilinks**:
   - Contextual references within body text using `[[Target Note]]`.

## Traversal Rules for AI Agents

- High-level navigation starts at Maps of Content (`obsidian/00 - System/MOCs/`).
- Query filtering uses Dataview-compatible YAML properties (`type`, `status`, `tags`, `created`).
