# Epoch 1 — Decision Record — 2026-07-10

Last updated: 2026-07-12 22:25:32 PDT — edited by: Codex

**Decider:** Mark (approved Claude's 2026-07-10 review recommendations: "go")
**Prepared by:** Claude (Cowork session)
**Scope:** Phase 0 of `planning/next-steps-plan.md` (rev 2): D1–D4, charter amendments, re-dated targets, caps, lab bootstrap.
**Conduct:** no live system, config, router, model, or provider state was touched; nothing outbound. All changes are Markdown edits inside `Docs/` plus a new local git repo at `Docs/mindfultext-epoch-1/`.

**Legend** — *Recorded:* decided and documented. *Pending apply:* decided; applying needs Mark's Mac (outside this session's access). *Needs Mark:* judgment or action only Mark can supply.

---

## DR-1 — D1 gate rule = Option C (per-surface)

**Decision:** corroboration (lone BLOCK → WARN) for internal artifacts; **either-BLOCKs → BLOCK** for anything outbound, customer-facing, paid, or irreversible. Preserves the empirical motivation at `gates.js:142–145` (Gate A false-blocking trivial changes) while keeping the hard line on external actions. Charter §8 unchanged.
**Status:** Recorded. **Pending apply (on-Mac):** per-surface routing in `combineGateVerdicts` (`gates.js:139–163`), fix `gates.js:4` header comment, AGENTS.md §Dual-gate, and `test/gates.test.js`. Codex implements, Claude reviews, Mark approves the merge.
**Verify first:** `sed -n '1,6p;139,163p;385,390p' Projects/model-dashboard-live/gates.js`

## DR-2 — D2 residency & budget

**Decision:** keep `gpt-oss:20b` as core **provisionally** — final call is Mark's model-quality judgment (needs Mark). Budget 124 → **116 GB** (basis: ops-plan §8's 8–12 GB OS headroom on 128). Caveat recorded: budget-lowering alone is unproven as the fix (Doc B §3) — the budget is advisory and evictions occurred with 8.1–14.3 GB free; plan §1.5's 24h observation is the test; D3 is likely the bigger lever.
**Status:** Recorded. **Pending apply (on-Mac):** set budget in dashboard `settings.json`; **enable `dashboard.log` timestamps** (the log is untimestamped — C2 — which blocked root-causing). This session could not reach `localhost:7070` (sandboxed); run `curl -s localhost:7070/api/health`, `/api/memory`, `/api/ps` before applying.

## DR-3 — D3 watcher jobs

**Decision:** disable `babysitter` (ornith:35b-q8) and `window-watch` (qwen3:8b) for Epoch 1 — both 503-ing, neither on the Runs 001–003 critical path. Re-enable post-Run-003 only with a concurrency cap.
**Status:** Recorded. **Pending apply (on-Mac):** `window_watch.enabled: false` + babysitter equivalent in dashboard settings/router.

## DR-4 — D4 AGENTS.md refresh

**Decision:** refresh per C3 once D1–D3 are applied: path → `Projects/model-dashboard-live/`; add `gpt-oss:20b` and `ornith:35b-q8` to the model list; budget → 116; profiles live in `residency.json`; document `babysit`/`window_watch` as disabled; gate rule → DR-1.
**Status:** Recorded. **Blocked here:** `~/AI-Studio/AGENTS.md` is outside the mounted Docs folder. Assign to an on-Mac Codex/Claude Code session; Mark approves.

## DR-5 — Charter amendments adopted (v1.1)

All P1 (Doc B §6) except its §3 gate claim (superseded by C1/DR-1), plus the Doc A §3 items including social-intel disposition, path-scoring rubric, trace privacy, and review model. Applied to the charter as §14; targets re-dated (DR-6); status header updated. The scope draft already carried its Superseded banner; the finalization brief is archived.
Charter's self-declared canonical path corrected to its actual location. **Needs Mark (optional):** move the charter file to `Docs/` root to match the original declaration.
**Status:** Recorded & applied (docs only).

## DR-6 — Targets re-dated

Jul 23 → **2026-08-14**: three reproducible runs produce one founder-approved signal-test packet and one primary/one backup ROI path. Aug 8 → **2026-09-04**: three ICP-qualified level-2 conversations or one level-3 commitment (still requires a Mark-authorized manual test; never authorizes outreach by itself).
**Rationale:** the original dates were Terra's inserts, flagged `proposed`, and unachievable from 2026-07-10 under any cadence in the plan; new dates match plan rev 2 (Runs 001–002 by Jul 31, Run 003 + eval by Aug 14). A miss triggers review/re-scope, never expanded automation.
**Status:** Recorded (Mark confirmed via go-ahead; amendable by dated record).

## DR-7 — Pi's Epoch-1 role

Optional-later (charter §5 default) stands; Hermes never invokes Pi autonomously. **Status:** Recorded.

## DR-8 — Spending caps

Per-run external-model cap **$0**; sandbox cap **$0**. Fail-closed defaults per Doc B §7.3; Mark raises by dated record when a specific run needs external spend. Note: Run 001 uses Mark's Claude subscription — no per-run provider spend, compatible with the $0 cap.
**Status:** Recorded.

## DR-9 — Lab location

Scaffold staged at `Docs/mindfultext-epoch-1/`. **Mark confirmed the final home:** `~/AI-Studio/Projects/mindfultext-epoch-1/` (non-iCloud per ops-plan §6.1; already pi-trusted per `trust.json`) on 2026-07-10. This records the destination only, not authorization to move; moving the folder preserves the Git repo intact and must wait for Mark's separate move authorization and a closed lab session. The separate local-only store for raw sensitive inputs remains pending. Mark is considering `/Volumes/Seagate Desktop Drive`; it is acceptable only as a dedicated encrypted, non-Git, non-cloud-synced folder with no fallback copy into the lab when the volume is unavailable.
**§6.3 waiver:** the new-repo test is arguably not met (the lab is ops/strategy and could be an `mt-content` folder) — waiver granted per Doc A §5. Rationale: non-iCloud requirement, clean agent-coordination history, run provenance, local-only remoteless git.
**Status:** Final location recorded; local-only store and move authorization need Mark.

## DR-10 — Git bootstrap exception

Repo initialized with no remote; the scaffold is committed directly to `main` as the bootstrap commit (nothing existed to branch from). From the next change onward: `agent/<tool>/<task>` branches, frequent checkpoints, Mark-reviewed merges (ops-plan §6.1; charter §11.1 exception recorded here).
**Housekeeping note:** the sandbox mount cannot delete git lock files, so stray `.lock` / `tmp_obj_*` / `stale-*` files linger inside `.git/`. Harmless, but before first git use on the Mac run (with no git process open): `rm -f .git/*.lock .git/stale-* .git/objects/maintenance.lock .git/objects/*/tmp_obj_*`. History is intact: `fa16547` bootstrap scaffold, `c50dc5d` Run 001 draft card.
**Status:** Recorded & applied.

## DR-11 — C4 verifications (blocking for any Hermes use)

Before Hermes does anything, including compaction: (a) Mark opens/pastes `~/.hermes/config.yaml` to confirm the external-default-provider assumption in charter §6 (dot-dirs are default-deny for agents); (b) identify what consumes the router's `telegram` route; inbound Telegram is untrusted data and never a source of task cards without Mark.
**Status:** Needs Mark.

## DR-12 — Evidence & the Run 001 data class

No MindfulText evidence assets exist in `Docs/` — Mark supplies validation notes, pilot feedback, the ICP one-liner, etc. into the plan §1.3 inventory (`growth/HYPOTHESES.md` is ready for intake).
**Collision to resolve:** Run 001 executes on Claude (an external provider surface, team-config v0.1); unassigned evidence defaults to `local-only`, which may not be given to Claude (charter §5). Mark must class the Run 001 input set `external-okay` (or approve a redacted derivative) at import, or Run 001 cannot run as designed.
**Status:** Needs Mark (blocks Run 001 execution, not preparation).

---

## Summary — what still needs Mark

1. Confirm `gpt-oss:20b` stays core (DR-2); apply D2/D3 + log timestamps on the Mac (run the verify curls first).
2. `gates.js` alignment (DR-1) and AGENTS.md refresh (DR-4) via an on-Mac coding session — Codex implements, Claude reviews, Mark approves.
3. C4: paste `~/.hermes/config.yaml`; identify the telegram-route consumer (DR-11).
4. Supply and class the Run 001 evidence set; resolve the data-class collision (DR-12).
5. Choose the local-only store and separately authorize the move to the confirmed final lab location (DR-9). Optional: move the charter to `Docs/` root (DR-5).
6. Review/approve: rubric v0.1, team config v0.1, Run 001 card.
