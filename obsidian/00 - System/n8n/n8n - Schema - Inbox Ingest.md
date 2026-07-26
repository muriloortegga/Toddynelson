---
id: "n8n-schema-inbox-ingest"
type: "n8n-schema"
title: "n8n Webhook Schema — Inbox Ingest"
trigger: "POST /webhook/inbox-ingest"
status: "defined"
created: "<placeholder>"
updated: "<placeholder>"
tags: ["#system/n8n", "#system/inbox"]
---

# n8n Webhook Schema — Inbox Ingest

Define o formato JSON esperado pelo webhook de ingestão de novos itens na `01 - Inbox`.

## Endpoint

```
POST /webhook/inbox-ingest
Content-Type: application/json
```

## Payload Schema

```json
{
  "title": "string (required) — Note title, becomes the filename",
  "body": "string (optional) — Raw markdown body content",
  "source": "string (optional) — Origin system or agent name",
  "source_url": "string (optional) — Original URL if applicable",
  "tags": ["string"] ,
  "metadata": {
    "priority": "string (optional) — high | medium | low",
    "category_hint": "string (optional) — Suggested type: concept | project | person | tool | ...",
    "agent_id": "string (optional) — ID of the agent sending this item"
  }
}
```

## Payload Example

```json
{
  "title": "Article on Retrieval Augmented Generation",
  "source": "n8n-rss-agent",
  "source_url": "https://example.com/rag-article",
  "tags": ["#knowledge/ai", "#inbox"],
  "metadata": {
    "priority": "medium",
    "category_hint": "research",
    "agent_id": "agent-rss-reader-v1"
  }
}
```

## Resulting Note

- Destination: `obsidian/01 - Inbox/<title>.md`
- YAML frontmatter auto-populated from payload fields
- Body prepended with a block-quoted source attribution

## Processing Rules

1. Webhook validates required `title` field.
2. Note created in `01 - Inbox/` with `status: inbox`.
3. Human or agent reviews and moves to final destination.
