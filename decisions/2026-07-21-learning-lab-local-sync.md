# MindfulText Epoch 1 — Decision Record — 2026-07-21 — Local Learning Lab

**decision_id:** [[decisions/DECISION-REGISTER|DR-38]]

## DR-38 — Local Learning Lab sync

Create the local-only MindfulText Learning Lab as a private founder tool. It
may read the explicitly approved Markdown corpus, store question drafts,
learning history, source snapshots, sync audit records, and private idea-inbox
items in its own local SQLite database, and run one weekly macOS-local refresh.

## Boundary

The tool binds only to loopback (`127.0.0.1`). Its scheduled refresh makes no
network requests and performs no model invocation, repository-authority write,
publishing, outreach, messaging, CRM action, scraping, monitoring, spending,
or external automation. Generated questions are drafts and require founder
review before entering the active quiz. Idea promotion creates a noncanonical
draft only; normal `SOC-*`, `PRO-*`, and `GH-*` review and record rules remain
unchanged.

## Rationale

The Epoch 1 corpus has many durable definitions, decision records, gates, and
linked artifacts. A recall-and-reasoning companion helps maintain founder
context without creating a parallel authority system or expanding the social
or external automation posture.

## Status

Founder-directed, local-only implementation authorized. Any hosted version,
model-assisted generation, nonlocal access, external-data ingestion, or direct
ledger-writing workflow requires a separate decision.
