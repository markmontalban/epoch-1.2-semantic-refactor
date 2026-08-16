# MindfulText Epoch 1 — Decision Record — 2026-08-16 — W4b-L1b masked analytics and replay

Last updated: 2026-08-16 10:57:55 PDT — edited by: Codex

**decision_id:** [[decisions/DECISION-REGISTER|DR-55]]

## DR-55 — W4b-L1b masked analytics and replay

Mark approves PostHog activation for W4b-L1b to learn whether LinkedIn
recipient pages are useful and to find product problems. Growth Ops privately
links each approved LinkedIn profile and invitation to the word-only route and
its engagement evidence; that linkage remains attribution, not proof that the
named person visited.

### Approved measurement

- On the recipient landing page only, capture link-opened, active-time bucket,
  scroll threshold, CTA, return-visit, navigation, client-error, and
  validation-error-category signals.
- Enable session replay for that page only, with all inputs masked and the
  page text masked unless individually designated safe.
- Retain replay for 30 days. Mark is the sole replay reviewer.
- Place this short notice beside the cookie notice:

  > MindfulText uses privacy-masked activity data, such as scrolling and button
  > selections, to understand whether this page is useful and to fix problems.
  > Reflection answers and text you enter are not used for analytics.

### Exclusions

- Do not record literal keystrokes, typed values, reflection answers, free
  text, names, emails, raw route handles, IP/device fingerprints, or inferred
  health information.
- Do not replay the reflection, results, or later contact-request path.
- Do not enable AI replay analysis, replay export, raw network capture, or
  console-log recording.
- Do not treat an event as proof the original LinkedIn profile owner visited;
  forwarded/scanner uncertainty remains visible.

### Boundary

This authorizes the PostHog provider and L1b implementation direction. It does
not authorize credential creation or use, code changes, deployment, public
collection, Production, LinkedIn outreach, or external sends. Those actions
remain separately gated and require their own evidence.

## Related records

- [[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]]
- [[decisions/2026-08-14-opaque-invitation-attribution-prototype|DR-49]]
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
- [[planning/GROWTH-SYSTEM-ORDERED-TASK-MAP|Growth System Ordered Task Map]]
