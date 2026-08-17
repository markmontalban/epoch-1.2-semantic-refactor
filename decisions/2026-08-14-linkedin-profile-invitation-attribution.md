# MindfulText Epoch 1 — Decision Record — 2026-08-14 — LinkedIn profile invitation attribution

Last updated: 2026-08-14 14:53:22 PDT — edited by: Codex

**decision_id:** [[decisions/DECISION-REGISTER|DR-51]]

## DR-51 — W7 limited LinkedIn profile-to-invitation attribution

For the limited manual LinkedIn beta, MindfulText will treat the public LinkedIn profile resolved through the existing Unipile API connection as the identifiable invitation record and link invitation activity to that record through the opaque invitation token. This is a W7 prerequisite because it serves the manual buyer-learning batch; its narrow provider slice is defined by DR-52 rather than restarting W6.

### Approved attribution boundary

- Before a manually approved invitation is sent, Growth Ops may hold the Unipile-resolved public LinkedIn profile URL, displayed name, public title/organization, provider identifier, invitation/campaign/message metadata, and opaque invitation token together as one private invitation record.
- Link opens and permitted high-level activity may be recorded against that invitation record, allowing the manual beta to synthesize activity by the selected LinkedIn profile.
- This is invitation-level attribution, not proof that the profile owner performed the activity. Scanner, preview, and forwarded-link ambiguity remains `forwarded_or_unknown` unless later direct evidence resolves it.
- Reflection answers remain separate from the profile and invitation record. This decision does not authorize answer-to-profile linkage, contact-form collection, or expanded identity-association UX.
- The public experience continues not to disclose the private attribution mapping in the prototype.

### W7 priority and boundary

Create `W7-L0a` as the first limited-beta readiness task: define and test the private profile-to-invitation schema, opaque-token mapping, activity classifications, masking/retention controls, and evidence export needed for the manually approved batch. It must be accepted before `W7-L2a`.

This is a direction and planning decision only. It does not authorize code changes, profile ingestion, scraping, credentials, API calls, public collection, deployment, LinkedIn outreach, or any external send. Each remains subject to its existing separate approval.

## Consequences

- DR-49's deferment of broader identity-association work is narrowed only for this limited, pre-invitation LinkedIn-profile mapping.
- W6 remains deferred except for DR-52's narrow W7-L0a Unipile LinkedIn read/reconciliation slice; no Gmail, Calendar, Stripe, LinkedIn sending, or other relationship-data integration is required for the manual beta.
- W7 synthesis may report attributable activity by invitation/profile and must label confidence honestly rather than asserting recipient identity from a token alone.

## Related records

- [[decisions/2026-08-13-l2-buyer-learning-funnel|DR-46]]
- [[decisions/2026-08-14-opaque-invitation-attribution-prototype|DR-49]]
- [[decisions/2026-08-14-w4a-l2b-custom-reflection-direction|DR-50]]
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
- [[planning/GROWTH-SYSTEM-ORDERED-TASK-MAP|Growth System Ordered Task Map]]
