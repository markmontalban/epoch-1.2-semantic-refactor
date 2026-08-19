# MindfulText Growth System — AI Bootstrap Handoff

Last updated: 2026-08-18 17:21:30 PDT — edited by: Cursor

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
- **PostHog** owns recipient-page behavior and experiment measurement; it
  receives no assessment answers, sensitive free text, names, raw route
  handles, or identity truth. Growth Ops privately joins an approved LinkedIn
  profile and invitation to the word-only route and its engagement evidence;
  that is invitation-level attribution, not proof that the named person visited.
- **Small custom reflection** is the approved W4a-L2b direction: borrow the
  short fixed-choice and immediate-results patterns from Formbricks, without
  adopting a Formbricks provider. Private opaque invitation attribution remains internal; visitor-facing attribution disclosure and expanded identity association are deferred by DR-49/DR-50.
- **Limited LinkedIn beta attribution** is prioritized in W7-L0a: use the
  existing Unipile API LinkedIn connection to privately map a profile/provider
  ID to its opaque invitation and activity, while retaining forwarded/scanner
  uncertainty and keeping reflection answers separate. This is the one narrow
  W6 exception; it authorizes no credentials, API calls, profile ingestion, or outreach.
- **n8n and providers** are separately approved scale/reconciliation tools;
  they do not own canonical state or gain automatic send authority.
- **Prototype tempo:** until records need to be kept, prefer reset-and-realign
  over multi-environment diagnosis. Private-test is not live, and live is not
  the working copy until a dated decision says so. See the planning-vault
  `AGENTS.md` section “Prototype tempo.”

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
