# MindfulText Epoch 1 — Decision Record — 2026-07-21 — Learning Lab local agents

**decision_id:** [[decisions/DECISION-REGISTER|DR-39]]

## DR-39 — Learning Lab local agents

Amend [[decisions/DECISION-REGISTER|DR-38]] to authorize three bounded local Learning Lab agent roles: a daily
`qwen3:8b` tagging pass, a daily `deepseek-r1:32b` final question-review pass,
and a weekly `qwen3.5:122b-a10b-q4` repository-map audit. The daily pass runs
at 03:00 local Pacific time; the weekly audit runs Monday at 02:00 local time.

## Scope and controls

Each process may read only the Learning Lab reference and the approved
repository Markdown corpus, and may write only local Learning Lab SQLite
question, source-snapshot, agent-run, and agent-review records plus the local,
generated `data/REPO-MAP.md` context index and job logs. It discovers
the literal requested model through `GET /v1/models`, then sends each inference
through `POST /v1/chat/completions` with stable `X-Caller` and
`X-Run-Purpose` headers. No aliases, residency, lease, router, retry, or
external-system interface is used.

The agents may create quiz drafts and approve, retire, or defer those local
questions. A changed source makes an active question stale; stale questions
leave the founder quiz and cannot be reapproved without a fresh source-linked
draft. A source deletion follows the same stale-and-review path.

## Boundary

These agents cannot create or modify a `GH-*`, `PRO-*`, `SOC-*`, `GTM-*`,
`RUN-*`, `DR-*`, checklist item, repository authority, account, content,
message, tracking configuration, CRM record, published asset, or external
action. They retain all Epoch 1 data, approval, no-outbound, and spending
boundaries.

## Status

Founder-directed local learning automation authorized. A hosted agent, a new
model, nonlocal input, direct repository-writing behavior, or any external
action requires a separate decision.
