# MindfulText Epoch 1 — Decision Record — 2026-08-17 — W4b-L1c/L2d private-test authorization

Last updated: 2026-08-17 20:50:24 PDT — edited by: Cursor

**decision_id:** [[decisions/DECISION-REGISTER|DR-57]]

## DR-57 — W4b-L2d laptop polish and W4b-L1c/L2d private-test checks

On 2026-08-17 Mark authorized, in conversation, continued laptop polish toward
**W4b-L2d** and the private-test acceptance checks for **W4b-L1c** and
**W4b-L2d**.

### Authorized

- Laptop polish against the W4b-L2d list (accessibility, outage copy,
  forwarded-link caveats, cookie notice beside the [DR-55](2026-08-16-w4b-l1b-masked-analytics-replay.md)
  purpose notice) with no live-site put-online.
- Authenticated Vercel Preview (private-test) acceptance for W4b-L1c and
  W4b-L2d on the existing public-site and Growth Ops Preview projects. This
  is the same evidence class as W1b/W2b: owner-authenticated Preview, not
  Production, and not public collection.
- Disposable Neon `growth-ops-dev` only, if a storage-layout switch for
  migrations `005`/`006` is required so Preview can resolve word-only
  recipient links. Production Neon remains untouched.

### Still separately gated

- Production deployment, DNS, and live-site put-online.
- Public collection from real buyers or a LinkedIn batch (`W7-L2a`).
- PostHog credential creation/use and live replay ([DR-55](2026-08-16-w4b-l1b-masked-analytics-replay.md)).
- n8n activation, broader W6 providers, outreach, and external sends.

Visitor-facing copy must not disclose invitation attribution ([DR-49](2026-08-14-opaque-invitation-attribution-prototype.md)).
Forwarding/scanner uncertainty remains an internal evidence caveat and a
visitor-safe statement that a forwarded link may still be used anonymously.

## Related records

- [[decisions/2026-08-17-w4b-l1-build-confirmation-and-l2-continue|DR-56]]
- [[decisions/2026-08-16-w4b-l1b-masked-analytics-replay|DR-55]]
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
- [[planning/GROWTH-SYSTEM-ORDERED-TASK-MAP|Growth System Ordered Task Map]]
