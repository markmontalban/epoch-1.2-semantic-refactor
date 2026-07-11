# Run 001 — Unblock Packet (Mark fill-in)

Last updated: 2026-07-11 00:56:51 PDT — edited by: Claude Dispatch — task: Execute master checklist, Run 001

**Purpose:** Run 001 is APPROVED (DR-13…DR-16) but blocked on the two E1-N04
items, which are Mark-only. A 2026-07-11 00:56 PDT on-disk verification found
neither done, despite a dispatch reporting them complete. This packet is the
minimal fill-in that unblocks execution. No agent may complete any part of it.

## Blocker 1 — evidence import (E1-N04a; DR-13 caveat)

For each of the four approved assets, paste or reference the actual content
into `01-product-evidence.md`:

- Add the cleared summary + provenance under **Approved evidence**.
- Spot-check the actual asset against `external-okay` — especially asset 2's
  third-party pilot-feedback content. Mismatch = strike or reclass; the run
  stops on data-class ambiguity.
- Flip the inventory row status from "approved — awaiting import" to
  "imported YYYY-MM-DD", and add an Import log row.
- Founder assumptions go in their own section, tagged `founder-assumption`.

| # | Asset | Imported? | Spot-check vs `external-okay` |
|---|---|---|---|
| 1 | Validation notes | ☐ | ☐ |
| 2 | Pilot feedback (third-party content!) | ☐ | ☐ |
| 3 | ICP one-liner | ☐ | ☐ |
| 4 | Positioning docs | ☐ | ☐ |

## Blocker 2 — name the concrete provider set (E1-N04b/c; DR-15)

"Combo of Codex, Claude, Hermes, etc." is policy, not a run manifest
(team-config v0.1.1). Write the actual set into the run card's
`allowed_tools_providers` line, e.g.:

> Named by Mark YYYY-MM-DD: Claude (Anthropic, subscription), Codex (OpenAI,
> subscription). No others; no fallback.

- Hermes is NOT eligible until C4 (E1-G04) — do not name it yet.
- Confirm each named provider runs on subscription/free tier under the $0
  agent-side cap, or record a dated cap decision first.

## Then

1. `python3 tools/validate-run-card.py runs/run-001/run-card.md` — must stay
   valid and approved.
2. Commit the edits.
3. Any agent session on a named provider may then execute Run 001 per its card
   (≤4 h, $0 agent spend, stop conditions as written), recording charter
   v1.2 + commit hash in the card at execution (E1-P202).

*This packet supersedes nothing; it restates E1-N04 / DR-15 in fill-in form.
Delete or archive after Run 001 executes.*
