# MindfulText Growth System — AI Bootstrap Handoff

Last updated: 2026-08-13 21:39:12 PDT — edited by: Codex

## Purpose

Use this file only to orient a new agent or external harness. It is not a
roadmap, checklist, status report, task queue, evidence record, or approval
source. It intentionally contains no current task IDs, percentages, blockers,
or next action because those details would drift.

## Required reading order

Before planning or acting, read:

1. `planning/GROWTH-SYSTEM-ORDERED-TASK-MAP.md` — founder-facing roadmap.
2. `planning/GROWTH-SYSTEM-MASTER-CHECKLIST.md` — execution status and tasks.
3. The applicable dated `DR-*` file in `decisions/` — approval authority.
4. The local `AGENTS.md` — repository operating rules.

If this file differs from any of those sources, ignore this file.

## Strategy in one paragraph

MindfulText is a lean, evidence-led buyer-learning effort for community
behavioral-health workforce leaders. Use the smallest manual process that can
test whether the problem and offer earn buyer attention. Research, technical
acceptance, visits, and engagement are learning evidence—not buyer validation
or commercial commitment.

## Stable system boundaries

- **Growth Ops** is the canonical recipient, campaign, attribution, consent,
  relationship, and evidence record.
- **mindfultext-web** owns the stateless public experience and calls Growth Ops
  server-side; it does not become a second CRM or content database.
- **PostHog** owns anonymous behavior and experiment measurement; it receives
  no assessment answers, sensitive free text, or identity truth.
- **Formbricks**, if separately approved, may provide the reflection and
  results while preserving the disclosed anonymous/identified boundary.
- **n8n and providers** are separately approved scale/reconciliation tools;
  they do not own canonical state or gain automatic send authority.

## Safety and authority boundaries

- Inspect → propose → approve → implement for consequential public-site, data,
  tracking, provider, deployment, Production, or outreach work.
- Never put PII or encoded metadata in personalized URLs.
- Never infer that a link open proves the named recipient was the visitor.
- Never associate anonymous assessment answers with a person without the
  visitor's clear, disclosed choice.
- Never claim that source/local, disposable-database, Preview/browser,
  provider/integration, and Production evidence are interchangeable.
- Agents may research, draft, test, and assemble evidence; Mark retains the
  consequential approvals and strategic interpretation recorded in decisions.

## Workspace locations

- Planning authority: `/Users/mgzm-studio/AI-Studio/Projects/mindfultext-epoch-1-semantic-map-refactor`
- Public site: `/Users/mgzm-studio/AI-Studio/Projects/mindfultext-web`
- Private Growth Ops app: `/Users/mgzm-studio/AI-Studio/Projects/growth-ops`

Resolve repository remotes from local Git configuration. Do not invent a
canonical URL when no verified remote exists.

## Bootstrap instruction

Read the four authority sources above, identify the first incomplete task whose
dependencies are satisfied, verify its evidence tier and approval boundary,
and continue only within the user's authorized scope. Do not use this handoff
to reconstruct current status.
