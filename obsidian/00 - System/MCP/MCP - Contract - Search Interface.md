---
id: "mcp-contract-search-interface"
type: "mcp-contract"
title: "MCP Contract — Search Interface"
version: "1.0"
status: "defined"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/mcp"]
---

# MCP Contract — Search Interface

Define a interface de busca que agentes de IA utilizam para recuperar notas do vault via propriedades, texto e relações de grafo.

## Purpose

Prover um contrato estável e determinístico para que qualquer agente possa recuperar memória do vault sem depender de implementações específicas de indexação ou embedding.

## Search Modes

### 1. Property-Based Search (Primary)

Filtragem por valores exatos de propriedades YAML. Recomendado para recuperação determinística.

```yaml
search_mode: property
filter:
  type: "concept"
  status: "active"
  tags: "#knowledge/ai"
folder_scope: "obsidian/02 - Knowledge"
limit: 20
```

### 2. Keyword Search (Secondary)

Busca textual sobre títulos e corpo das notas.

```yaml
search_mode: keyword
query: "retrieval augmented generation"
folder_scope: "obsidian/02 - Knowledge"
limit: 10
```

### 3. Graph Traversal (Relational)

Recupera notas relacionadas via wikilinks e a propriedade `related`.

```yaml
search_mode: graph
start_note: "obsidian/02 - Knowledge/Concepts/RAG.md"
depth: 2
direction: "both"  # inbound | outbound | both
```

## MCP Tool Definition

```yaml
tools:
  - name: search_vault
    description: Search notes in the vault using property filters, keywords, or graph traversal
    input_schema:
      search_mode: string   # property | keyword | graph
      filter: object        # for property-based search
      query: string         # for keyword search
      start_note: string    # for graph traversal
      depth: integer        # for graph traversal (default: 1, max: 3)
      direction: string     # inbound | outbound | both
      folder_scope: string  # optional folder constraint
      limit: integer        # max results (default: 10, max: 50)
```

## Response Schema

```json
{
  "results": [
    {
      "path": "obsidian/02 - Knowledge/Concepts/RAG.md",
      "title": "Retrieval Augmented Generation",
      "type": "concept",
      "status": "active",
      "tags": ["#knowledge/ai"],
      "excerpt": "First 200 chars of body...",
      "score": 0.95
    }
  ],
  "total_found": 3,
  "search_mode": "property"
}
```

## Constraints

- `depth` for graph traversal is capped at 3 to prevent runaway traversals.
- `limit` max is 50 results per query.
- `04 - Life/` folder is excluded from all searches.
- Binary files (`05 - Assets/`) return metadata only, never content.
