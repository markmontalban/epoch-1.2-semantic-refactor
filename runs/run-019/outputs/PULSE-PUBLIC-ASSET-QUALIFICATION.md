# [[runs/run-019/RUN-019-Pulse-Public-Asset-Audit|RUN-019]] — Pulse Public-Asset Qualification

Last updated: 2026-07-28 10:44:41 PDT — edited by: Codex

## Decision

**Do not make Pulse public yet.** Treat it as a private research/prototype
asset until a separate, local-only provenance inventory resolves the dataset's
origin, scope, counts, permissions, retention, and methodology. It cannot yet
support a searchable landing page, a public archive, individual quotes, a
sentiment claim, or a public “40K” scale claim.

This is a qualification result, not a legal opinion or a judgment that the
prototype was improper. It prevents the evidence trail from being outrun by a
compelling content opportunity.

## What the retained materials show

| Question | Documentation-only result | Confidence / limit |
| --- | --- | --- |
| Was there a healthcare-discussion prototype? | Yes. Code and documentation describe a React/Express/Postgres application using Reddit/Sheets-style inputs, search, trends, and derived analysis. | High for prototype intent/architecture; no runtime was opened. |
| Could it hold raw or attributable source material? | Yes. Retained schema, storage, webhook, and workflow documents are designed to process raw post fields and derived analysis. | High for technical capability; actual stored data was not inspected. |
| What count is documented? | A June 17, 2025 internal note names 5,311 total, with a 965-post recent-week subset and a 963-post search index. | Medium as a historical implementation note; not independently verified. |
| Are 10K or 40K documented? | No. The amounts are retained as founder recollection only. | High that the inspected materials do not support a public number. |
| Is a public content asset licensed/authorized? | Unknown. Current Reddit terms require a use-case/rights/retention review and may require a separate agreement for commercial, high-volume research, or unexpressly permitted use. | Not a legal conclusion; no credentials, agreements, or data contracts were reviewed. |
| Is methodology reproducible? | Not yet. Code reveals possible components, but does not establish the live source period, field coverage, deduplication, model version, errors, exclusions, or refresh history. | Insufficient for public statistics or trend claims. |

## Why a public landing page is premature

1. The prototype's technical ability to store raw source material raises the
   burden for privacy, deletion, rights, and attribution; aggregation does not
   remove those questions automatically.
2. A number in code notes is not a validated public statistic. The current
   evidence supports only the qualified internal note above.
3. “Sentiment,” “trend,” and “pain point” can sound like population claims.
   Without documented method and coverage, they would overstate what was
   observed.
4. Current Reddit terms limit user-content use to the permitted app use case,
   reserve rights to users, and flag separate commercial/research arrangements
   where relevant. See [[runs/run-019/outputs/SOURCES|SOURCES]].

## Smallest next run: local-only provenance inventory

Before any public asset, approve one read-only inventory with a named data
steward and no raw-content export into this repository. It should record:

| Inventory item | Safe retained output |
| --- | --- |
| Data locations and owners | Location categories and access owner, not credentials or identifiers. |
| Record totals and date coverage | Counts by source/time window, methodology for counting, and reconciliation against the internal 5,311 note. |
| Acquisition method | API/export/manual source, authorization status, source terms version, and intended use case. |
| Field/identity map | Data categories and whether author-like, link, location, clinical, or sensitive fields exist; no field values. |
| Processing lineage | Deduplication, exclusion rules, model/provider versions, prompt/config class, error handling, and human review. |
| Retention/deletion | Current retention state, deletion capability, removal request path, and archival boundary. |
| Public-claim candidates | Only aggregate claims that can be reproduced, caveated, and reviewed for rights/privacy/policy fit. |

The inventory must stop if it needs a credential, live write, raw export, or
legal interpretation. It should be followed by the appropriate policy/legal
review before a commercial, research, or public distribution decision.

## Conditional future asset shape

If the inventory and later review pass, start with a bounded educational
methodology note or an aggregate insight brief—not a searchable corpus. It
would need a defined window, disclosed method, source/rights treatment,
limitations, no raw quotes or usernames, no clinical inference, and no claim
of representing an entire profession. This is a future option only.

## Relationship to the Social Studio

Pulse can eventually become a carefully qualified evidence input to the
mindfulness-rooted storytelling system in
[[runs/run-018/outputs/SOCIAL-STUDIO-OPERATING-MODEL|the Social Studio]]. It
cannot become its automated content engine or substitute for Mark's judgment.

## Related records

- [[runs/run-019/RUN-019-Pulse-Public-Asset-Audit|RUN-019]]
- [[growth/SOCIAL-IDEA-LEDGER|SOC-001]]
- [[growth/SOCIAL-IDEA-LEDGER|SOC-005]]
- [[runs/run-018/RUN-018-Mindfulness-Social-Studio|RUN-018]]
- [[runs/run-019/outputs/SOURCES|sources]]
