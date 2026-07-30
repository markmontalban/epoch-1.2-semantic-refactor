Last updated: 2026-07-30 11:07:00 PDT — edited by: Cursor

# [[runs/run-021/RUN-021-Wearable-Roadmap-Alpha-Focus|RUN-021]] — Offer definitions (R5a)

Three candidate alpha specializations, each defined concretely enough to be
sized and to have its claims exposure assessed. All example messages are
**synthetic**. No offer here is approved, priced, or built; this is the
definition layer the rest of the run depends on.

Every offer obeys three constraints carried over from the signal standard and
the Phase 1 audience decision:

- **Non-clinical.** No diagnosis, no treatment, no crisis role, no efficacy claim.
  ([Phase 1 A5](../../../../wearables/garmin/Docs/PHASE1-DECISIONS.md))
- **Freshness budget.** A signal that arrives too late to act on is stored but
  not actionable. Vendor-cloud data lands on device sync, so sleep arrives in
  the morning, not at 3 a.m. (`WEARABLE-SIGNAL-STANDARD.md` §B, §D4)
- **Message ceiling.** No more than two outbound messages per day plus one
  weekly reflection, with a 90-minute cooldown between triggered messages —
  the same anti-spam posture as the existing watch rule (`PHASE1-DECISIONS.md` A3).

Audience frame for all three is [[growth/ICP-REGISTRY|ICP-021]]: adults not
seeking therapy who are open to a private, text-based mindfulness practice and
already wear or own a device. [[growth/ICP-REGISTRY|ICP-005]] and
[[growth/SEGMENTS|SEG-001]] are treated as later distribution, not as v1 design
drivers.

---

## Offer A — blood-pressure reduction

**Working name:** Steady.

**What the subscriber receives.** A short daily wind-down practice by text, plus
a paced-breathing practice offered *at the moment they log a cuff reading* — not
in response to what the reading says. A weekly reflection shows how their
practice days and their measurement days line up, without interpreting either.

**The design decision that defines this offer.** The trigger is "you took a
reading," never "your reading was high." MindfulText does not read, threshold,
interpret, or react to the systolic or diastolic value. This is deliberate and
it is the single thing keeping the offer out of the monitoring-and-alerting
territory described in `FOCUS-DECISION-MATRIX.md`. It also means the offer is
strictly weaker than what a BP-reduction product could technically do — that
cost is real and is stated rather than hidden.

**Signal families.** `body.blood_pressure` (presence of a reading only),
`cardiac.heart_rate` (pulse accompanying the reading), `self_report`.

**Cadence.** One scheduled daily message; up to one reading-linked message per
day; one weekly reflection. Ceiling of two per day.

**Representative message (synthetic).**

> Morning reading's in. Before the day gets loud: four counts in, six counts
> out, six rounds. I'll pace it with you — reply GO.

> Weekly: You practiced on five of seven days, and four of those were days you
> also measured. Nothing to read into that yet — just noticing it with you.

---

## Offer B — sleep

**Working name:** Wind-down.

**What the subscriber receives.** An evening wind-down sequence timed to their
own recent bedtime pattern rather than to a fixed clock, and a morning-after
message on nights that ran short — one that offers a small daytime practice
rather than promising a sleep fix. A weekly reflection names the pattern the
person's own data shows.

**The design decision that defines this offer.** Nothing is sent during the
night. Cloud sleep data arrives on the morning sync, so the two windows that
actually work are *the evening before* (driven by the person's historical
pattern) and *the morning after* (driven by last night's summary). Building the
offer around those two windows is what makes it deliverable at all given the
latency described in the signal standard.

**Signal families.** `sleep.sleep_session` (duration, stages, efficiency,
score), `autonomic.hrv`, `self_report`.

**Cadence.** One evening message nightly; a morning message only on nights
flagged short or fragmented, capped at four per week; one weekly reflection.

**Representative message (synthetic).**

> Last night ran about ninety minutes under your usual. That tends to show up
> mid-afternoon rather than now. Two minutes of slow breathing before 3pm —
> want me to check in then?

> Evening: You've been asleep by about 11:20 most nights this week. You're
> twenty minutes out. Screens down, and here's a short one to land the day.

---

## Offer C — burnout

**Working name:** Load.

**What the subscriber receives.** A daily one-tap check-in (reply 1–5), a
short in-the-moment practice when the existing stillness-plus-elevated-heart-rate
rule fires or when recovery-type signals stay depressed across consecutive days,
and a weekly reflection that puts the person's self-reported load next to the
pattern in their signals.

**The design decision that defines this offer.** Self-report is the primary
signal, not a garnish. It is the only family with no vendor gate, no latency
risk, and no device cost, and it is the label that makes everything else
interpretable (`WEARABLE-SIGNAL-STANDARD.md` §A3). A subscriber with no wearable
at all can run this offer at reduced fidelity from day one, which none of the
other two can say.

**Signal families.** `self_report.tag` (primary), `autonomic.hrv` and
`autonomic.stress`, `sleep.sleep_session`, `activity.stillness`.

**Cadence.** One daily check-in; up to two triggered messages per day with a
90-minute cooldown; one weekly reflection.

**Representative message (synthetic).**

> You've been going since seven. Sixty seconds, standing, eyes open — just make
> the exhale longer than the inhale. That's the whole thing.

> Weekly: Four of the last seven days had that same afternoon pattern, and
> those were also your lowest check-ins. Worth asking what those four days had
> in common.

---

## What separates the three, in one table

| | Offer A — Steady | Offer B — Wind-down | Offer C — Load |
|---|---|---|---|
| Primary family | body (BP presence) | sleep | self_report |
| Device strictly required? | Yes — a connected cuff | Yes — a sleep-capable wearable | No; wearable improves it |
| Trigger moment | On measurement | Evening + morning-after | On rule fire + daily check-in |
| What it promises | A practice attached to a habit you already have | A better wind-down and a gentler morning after | Noticing your own load earlier |
| What it must never say | That practice lowers your numbers | That it treats insomnia | That it treats or prevents a mental-health condition |

## Related records

- [[runs/run-021/RUN-021-Wearable-Roadmap-Alpha-Focus|RUN-021 run card]]
- [[runs/run-021/outputs/SIZING-MODEL|sizing model]]
- [[runs/run-021/outputs/FOCUS-DECISION-MATRIX|access and claims scoring]]
- [[growth/ICP-REGISTRY|ICP-021]]
- [[runs/run-021/outputs/SOURCES|sources]]
