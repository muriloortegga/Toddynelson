---
id: "agents-communication-protocol"
type: "agent-protocol"
title: "Agents — Communication Protocol"
version: "1.0"
status: "defined"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/agents"]
---

# Agents — Communication Protocol

Define como agentes de IA comunicam entre si tarefas, handoffs e resultados dentro do KOS, utilizando o vault como medium de comunicação assíncrono.

## Communication Model

A comunicação entre agentes é **assíncrona e baseada em artefatos** — agentes não se chamam diretamente; eles leem e escrevem notas no vault que outros agentes consomem.

```
Agent A → writes Task Note → Agent B reads → processes → writes Result Note → Agent A reads
```

## Task Handoff Format

Quando um agente transfere uma tarefa para outro, deve criar uma nota de decisão em `03 - Work/Decisions/` com o seguinte esquema adicional:

```yaml
---
id: "<placeholder>"
type: "decision"
title: "Handoff: <task description>"
decision_maker: "[[<originating-agent-id>]]"
assigned_to: "[[<receiving-agent-id>]]"
status: "proposed"
date: "<ISO date>"
context: "<brief context for the receiving agent>"
input_artifacts: []    # list of [[note links]] the receiving agent should read
expected_output: "<description of expected deliverable>"
tags: ["#system/handoff"]
related: []
---
```

## Result Reporting Format

Ao concluir uma tarefa, o agente receptor deve:

1. Atualizar o `status` da nota de handoff para `accepted` ou `rejected`.
2. Adicionar um bloco `## Result` ao final da nota com o outcome.
3. Criar quaisquer artefatos derivados conforme o `MCP - Contract - Vault Writer.md`.

## Communication Rules

| Rule | Requirement |
|---|---|
| **Idempotency** | Creating the same note twice must be safe; agents check for existence first |
| **No Blocking** | Agents never wait synchronously for another agent's response |
| **Traceability** | Every inter-agent note must include `agent_id` of both sender and receiver |
| **Context Passing** | `input_artifacts` must list all notes the receiving agent needs to read |

## Agent Discovery

Agents look up peer agent capabilities via `Agents - Role Registry.md` before delegating tasks.
