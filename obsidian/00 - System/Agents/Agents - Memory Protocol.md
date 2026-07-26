---
id: "agents-memory-protocol"
type: "agent-protocol"
title: "Agents — Memory Protocol"
version: "1.0"
status: "defined"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/agents", "#system/mcp"]
---

# Agents — Memory Protocol

Define como agentes de IA codificam, armazenam, recuperam e esquecem memória de longo prazo dentro do vault do Toddynelson KOS.

## Memory Architecture

O vault funciona como memória externa persistente (external long-term memory). A memória dos agentes é dividida em três camadas:

| Layer | Location | TTL | Purpose |
|---|---|---|---|
| **Working Memory** | Agent runtime context | Session | Current task state |
| **Episodic Memory** | `03 - Work/Meetings/`, `03 - Work/Decisions/` | Permanent | Records of events and choices |
| **Semantic Memory** | `02 - Knowledge/` | Permanent | Facts, concepts, entities |

## Memory Write Protocol

Quando um agente precisa persistir uma informação, deve:

1. Determinar o **tipo de entidade** (consultar `Standards - YAML Property Registry.md`).
2. Selecionar o **template correto** de `00 - System/Templates/`.
3. Invocar `create_note` via MCP (consultar `MCP - Contract - Vault Writer.md`).
4. Incluir o campo `agent_id` no frontmatter para rastreabilidade.

## Memory Retrieval Protocol

Para recuperar memória relevante ao contexto, um agente deve:

1. Identificar as **propriedades de filtro** relevantes (`type`, `status`, `tags`).
2. Invocar `search_vault` via MCP (consultar `MCP - Contract - Search Interface.md`).
3. Priorizar resultados com mais `inbound links` (notas mais referenciadas = mais centrais).
4. Usar `graph traversal` para expandir contexto a partir de um nó central.

## Memory Decay & Archiving

- Agentes **não** deletam notas. Apenas atualizam `status: archived`.
- Notas arquivadas devem ser movidas para `06 - Archive/` pela automação de housekeeping.
- O campo `updated` é sempre atualizado ao modificar uma nota.

## Anti-Patterns

- ❌ Não criar notas sem frontmatter YAML.
- ❌ Não duplicar notas existentes — buscar antes de criar.
- ❌ Não modificar notas fora do escopo permitido pelo `MCP - Contract - Vault Writer.md`.
