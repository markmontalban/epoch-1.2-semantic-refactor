# Epoch 1 — Stability Observation Restart — 2026-07-10

Last updated: 2026-07-10 12:05:06 PDT — edited by: Terra 5.6 High

**Restarted:** 2026-07-10T14:38:25.508Z

**Baseline:** `dashboard.log` line **1311**, recorded immediately after the
post-merge dashboard boot completed. Pre-baseline entries are excluded because
they predate the ISO timestamp logging change and the restart.

**Configuration under observation:** budget `116` GB; `window_watch.enabled:
false`; `babysitter.enabled: false`.

**Pass condition (24 hours from this baseline):** no timestamped core
re-pinning or `503` / `maximum pending requests` event after line 1311, with
dashboard health stable. Boot activity immediately around the restart is not
attributed to steady-state behavior.

**Initial spot check (2026-07-10T14:39:07Z):** dashboard health returned OK;
zero matching events after the baseline.

**Spot check (2026-07-10T14:56:12Z):** dashboard health returned OK; zero
post-baseline `503` / `maximum pending`, core re-pin, or eviction entries.

**Spot check (2026-07-10T14:57:49Z):** dashboard health returned OK; zero
post-baseline `503` / `maximum pending`, core re-pin, or eviction entries.

**Spot check (2026-07-10T15:00:19Z):** `/api/health` returned OK and
`/api/overview` reported `dispatcher.core_degraded: false`,
`queued_for_resume: 0`, and `fallback_resident: false`; zero post-baseline
`503` / `maximum pending`, core re-pin, or eviction entries.

**Spot check (2026-07-10 12:03:39 PDT / 2026-07-10T19:03:39Z):**
`/api/health` returned OK and `/api/overview` reported
`dispatcher.core_degraded: false`, `queued_for_resume: 0`, and
`fallback_resident: false`. Post-baseline count: `503` / `maximum pending` =
0; `re-pinning evicted core` = 2; `evict` = 2. Both eviction matches are
`[residency] re-pinning evicted core: gpt-oss:20b` at
`2026-07-10T17:25:26.063Z` and `2026-07-10T18:40:26.171Z`.

**Observation result:** failed before the 24-hour window completed. The core
was re-pinned twice after the baseline, so this baseline cannot support the
pass condition. Preserve the configuration and await Mark's D2 direction;
only Mark may authorize a D2 iteration or choose the core-model fallback.

**Check command:**

```bash
cd ~/AI-Studio/Projects/model-dashboard-live
tail -n +1312 dashboard.log | grep -cE '503|maximum pending|re-pinning evicted core'
```
