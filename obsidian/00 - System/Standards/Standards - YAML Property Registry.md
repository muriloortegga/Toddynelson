---
id: "standards-yaml-property-registry"
type: "standard"
title: "Standards — YAML Property Registry"
version: "1.0"
status: "active"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/standards"]
---

# Standards — YAML Property Registry

Registro mestre de todas as propriedades YAML válidas no KOS. Esta é a fonte de verdade para validação de esquema por agentes, automações e humanos.

## Universal Properties (All Entity Types)

| Property | Type | Required | Allowed Values | Description |
|---|---|---|---|---|
| `id` | `string` | ✅ | Unique slug | Stable unique identifier |
| `type` | `string` | ✅ | See Type Registry below | Entity type |
| `title` | `string` | ✅ | Free text | Human-readable name |
| `status` | `string` | ✅ | See Status Values below | Current lifecycle state |
| `created` | `string` | ✅ | ISO 8601 date | Creation timestamp |
| `updated` | `string` | ✅ | ISO 8601 date | Last modification timestamp |
| `tags` | `array[string]` | ✅ | Taxonomy values | Hierarchical tags |
| `aliases` | `array[string]` | — | Free text | Alternative names / search terms |
| `related` | `array[wikilink]` | — | `[[Note Title]]` | Related note references |

## Type Registry

| `type` value | Template | Primary Folder |
|---|---|---|
| `base` | `Template - Base.md` | Any |
| `project` | `Template - Projeto.md` | `03 - Work/Projects/` |
| `client` | `Template - Cliente.md` | `03 - Work/Clients/` |
| `person` | `Template - Pessoa.md` | `02 - Knowledge/People/` |
| `book` | `Template - Livro.md` | `02 - Knowledge/Books/` |
| `course` | `Template - Curso.md` | `02 - Knowledge/Courses/` |
| `concept` | `Template - Conceito.md` | `02 - Knowledge/Concepts/` |
| `framework` | `Template - Framework.md` | `02 - Knowledge/Frameworks/` |
| `tool` | `Template - Ferramenta.md` | `02 - Knowledge/Tools/` |
| `product` | `Template - Produto.md` | `03 - Work/Products/` |
| `research` | `Template - Pesquisa.md` | `02 - Knowledge/Research/` |
| `hypothesis` | `Template - Hipotese.md` | `03 - Work/Experiments/` |
| `decision` | `Template - Decisao.md` | `03 - Work/Decisions/` |
| `ai_agent` | `Template - Agente IA.md` | `00 - System/Agents/` |
| `mcp_server` | `Template - MCP.md` | `00 - System/MCP/` |
| `workflow` | `Template - Workflow.md` | `00 - System/Workflows/` |
| `integration` | `Template - Integracao.md` | `00 - System/Integrations/` |
| `company` | `Template - Empresa.md` | `02 - Knowledge/Companies/` |
| `market` | `Template - Mercado.md` | `02 - Knowledge/Markets/` |
| `n8n-schema` | N/A | `00 - System/n8n/` |
| `mcp-contract` | N/A | `00 - System/MCP/` |
| `agent-protocol` | N/A | `00 - System/Agents/` |
| `dataview-query` | N/A | `00 - System/Dataview/` |
| `standard` | N/A | `00 - System/Standards/` |
| `dashboard` | N/A | `00 - System/Dashboards/` |

## Status Values by Entity Type

| Entity Type | Valid Status Values |
|---|---|
| `project` | `planning`, `active`, `paused`, `completed`, `archived` |
| `client` | `active`, `inactive`, `prospect`, `archived` |
| `person` | `active`, `inactive`, `archived` |
| `concept` | `draft`, `active`, `deprecated` |
| `research` | `in-progress`, `completed`, `abandoned` |
| `decision` | `proposed`, `accepted`, `rejected`, `superseded` |
| `ai_agent` | `active`, `standby`, `deprecated` |
| `workflow` | `draft`, `active`, `paused`, `deprecated` |
| `integration` | `defined`, `active`, `inactive`, `deprecated` |
| `mcp-contract` | `defined`, `active`, `deprecated` |

## Entity-Specific Properties

### project
`priority`, `owner`, `client`, `start_date`, `target_date`, `subtasks`

### client
`company`, `contact_person`, `email`, `projects`

### person
`full_name`, `role`, `company`, `email`, `social_links`

### book
`author`, `rating`, `url`, `isbn`

### course
`instructor`, `platform`, `progress`, `url`

### ai_agent
`name`, `role`, `model`, `capabilities`, `tools_access`

### mcp_server
`server_name`, `version`, `transport`, `tools_provided`

### workflow
`trigger`, `platform`, `inputs`, `outputs`

### decision
`decision_maker`, `date`, `impact`, `alternatives_considered`
