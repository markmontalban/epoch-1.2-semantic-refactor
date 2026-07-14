# MindfulText Epoch 1 — Decision Record — 2026-07-12 — Mark directions

Last updated: 2026-07-12 19:35:08 PDT — edited by: Codex

**Authority:** Mark's directions in the 2026-07-12 working session. These
records amend the current checklist and the affected run/platform artifacts;
they do not override `AGENTS.md` or the charter's data boundary.

## DR-17 — Run 001 manual invocation policy

Run 001 may be started only from a prompt manually issued by Mark. The prompt
names the participating agent/provider for that invocation; there is no
project-level provider default or silent fallback. The harness supplies and
enforces the invocation budget, so Epoch 1 does not add a second project
budget system. The run's time stop condition and data-class rules still apply.

**Status:** Mark-approved 2026-07-12; provider identity is recorded at
execution in the run card/trace.

## DR-18 — Run 001 evidence confirmation

Mark confirmed the approved evidence direction: the four retained candidates
may be used as `external-okay` inputs, subject to the required physical import
and spot-check. This confirms the decision; it does not represent that the
asset contents have already been copied into the inventory.

**Status:** Mark-confirmed 2026-07-12; import and spot-check remain execution
steps, with asset 2's third-party content requiring special attention.

## DR-19 — MindfulText local-model core

Replace the provisional `gpt-oss:20b` dashboard core with `qwen3:8b`. This is
the lighter model already used by the classifier/dedupe/tag routes and already
described by the router as the always-fitting core candidate. Keep task
assignment configuration-driven through `router.json`; do not preserve the
old prototype's model-specific assumptions in active comments or onboarding
material. The dashboard's memory-residency budget remains a hardware setting,
separate from harness-controlled agent spend.

**Status:** Mark-approved 2026-07-12; implemented in dashboard commit
`7b1cec0`, passed 202 tests/lint, merged to `main`, restarted, and verified
live with `core_degraded: false` and `qwen3:8b` configured as core.

## DR-20 — Local-only sensitive-input store

Use the Seagate volume as the separate local-only store for raw sensitive
MindfulText inputs. It must be a dedicated encrypted, non-Git,
non-cloud-synced folder. If the volume or folder is unavailable, stop and do
not fall back to a copy in the tracked lab or another location. The separate
authorization to move the lab folder remains a distinct decision.

**Status:** Mark-confirmed 2026-07-12 at
`/Volumes/Seagate Desktop Drive/MindfulText-local-only/`: encrypted, non-Git,
non-cloud-synced, with no fallback when unavailable.

## DR-21 — Hermes included in Epoch 1 scope

Hermes is included in Epoch 1 work for bounded, manually prompted task cards,
including Run 001 participation when Mark names it for that invocation. The
existing C4 verification remains required before first use: Mark must verify
Hermes' provider boundary and identify the router's Telegram consumer. This
decision expands scope; it does not authorize autonomous Telegram task
creation, arbitrary shell work, provider/config changes, or external action.

**Status:** Mark-approved 2026-07-12; Hermes is in scope but operationally
awaiting C4 verification.
