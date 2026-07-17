# Care-delivery account registry

Last updated: 2026-07-15 00:40:01 PDT — edited by: Codex

This directory is the canonical, organization-level account registry created by
`RUN-005`. It is durable research infrastructure for `SEG-001 — Care-delivery
organizations`; it is not a CRM, contact database, monitoring list, or
outreach queue.

## Files and authority

| File | Authority | What it contains |
| --- | --- | --- |
| `organizations.csv` | Canonical organization records | One immutable `ACC-###` record per organization. |
| `sources.csv` | Canonical public-source ledger | One immutable `SRC-###` record per public source. |
| `BUYER-TITLE-TAXONOMY.md` | Canonical role taxonomy | Potential buying-group functions and titles; never named contacts. |
| `../ACCOUNT-INTELLIGENCE.md` | Curated human summary | A small number of research-priority accounts; it does not duplicate this registry. |

## Record rules

- `account_id` is permanent. Do not reuse it, even if an organization closes,
  merges, renames, or is split; mark the record `archived / renamed` and link
  its successor in `relationship_note`.
- `source_ids` point to the normalized source ledger. Add a new source rather
  than replacing an old one, preserving the historical basis for every claim.
- `directory_status` is an observed classification, not a claim of current
  certification, eligibility, fit, intent, authority, budget, or willingness
  to pay. Recheck it in a separately approved public-research run before any
  discovery proposal.
- `buyer_profile_id` maps only to possible functions/titles. It must never be
  used to infer a person, decision right, procurement route, or contact detail.
- `priority_tier` ranks research attention, not revenue likelihood. `qualify-
  first` means two or more public contextual signals exist; `cluster-seed`
  means the organization is a structured comparison lead; `directory-lead`
  means it needs current first-party verification.
- `last_verified` records the date the cited source was reviewed. It is not a
  promise that the organization’s current operations have not changed.

## Update protocol

1. Open a public source manually in a newly approved research run. Do not
   scrape, monitor, log in, collect contact details, or use a paid database.
2. Add a new `SRC-###` row with the URL, source date if visible, retrieved date,
   source type, and a concise observable fact.
3. Update the relevant record’s `source_ids`, `last_verified`, and only the
   fields supported by that source. Retain explicit unknowns.
4. When a changed fact materially alters `SEG-###`, `ICP-###`, `GH-###`,
   `GTM-###`, or `CDP-###`, record it in the relevant reviewed Epoch artifact.
5. Never add names, emails, phones, personal profiles, or inferred buying
   authority. A manual discovery proposal remains a separate Mark approval.

## Current scope and caveat

The initial 56-record list intentionally concentrates on community behavioral
health and CCBHC contexts because those organizations offer a structured way
to compare care delivery, workforce workflows, and possible buying groups.
`SEG-003 — FQHCs with integrated behavioral health` remains a comparison
branch, not a conclusion that CCBHCs are the correct buyer segment. The
National Council source list used for many discovery records was published in
January 2024; every directory lead therefore carries an explicit current-status
verification gap.
