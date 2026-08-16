# MindfulText Epoch 1 — Decision Record — 2026-08-14 — word-only opaque route handles

Last updated: 2026-08-14 17:14:43 PDT — edited by: Codex

**decision_id:** [[decisions/DECISION-REGISTER|DR-54]]

## DR-54 — word-only opaque route handles

Mark directs recipient URLs to use a controlled semantic entry slug and a
cryptographically random word-only opaque handle, rather than a visible
machine-like token string. Example shape:

`/team-alignment/calm-harbor-kind-forest-...`

### Approved URL rule

- The entry slug may use only the approved neutral vocabulary: `care-team-fit`,
  `care-team-alignment`, `team-alignment`, `staff-alignment`,
  `workday-alignment`, `support-alignment`, `staff-support`, or `workday-reset`.
- The handle contains lowercase words separated by hyphens and no numbers,
  UUIDs, recipient names, organization names, campaign codes, or encoded
  metadata.
- The issued handle must have at least 96 bits of cryptographic randomness;
  word choice is a presentation format, never a source of recipient meaning.
- Growth Ops stores only a keyed hash of the handle and privately maps it to
  the invitation. A matching handle remains invitation-level activity, not
  proof that the named person visited.

### Boundary

This authorizes source/local implementation of the URL format only. It does
not authorize credentials, a database target, Preview, deployment, public data
collection, analytics/provider activation, LinkedIn outreach, or external
sends. Existing no-PII, forwarding/scanner uncertainty, answer-separation, and
generic-invalid-link requirements remain unchanged.

## Related records

- [[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]]
- [[decisions/2026-08-14-opaque-invitation-attribution-prototype|DR-49]]
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
- [[planning/GROWTH-SYSTEM-ORDERED-TASK-MAP|Growth System Ordered Task Map]]
