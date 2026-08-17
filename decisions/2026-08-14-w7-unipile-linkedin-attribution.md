# MindfulText Epoch 1 — Decision Record — 2026-08-14 — W7 Unipile LinkedIn attribution

Last updated: 2026-08-14 14:53:22 PDT — edited by: Codex

**decision_id:** [[decisions/DECISION-REGISTER|DR-52]]

## DR-52 — W7-L0a narrow Unipile-to-LinkedIn attribution slice

Mark confirms that W7-L0a will use the existing Unipile API connection to LinkedIn for the limited manual beta's profile-to-invitation attribution. This replaces the earlier incorrect assumption that profiles would be manually selected as a separate source.

### Approved W7 scope

- Use the Unipile-connected LinkedIn account to resolve the LinkedIn profile and provider identifiers needed to create or reconcile the private invitation record.
- Store the approved profile/invitation mapping in Growth Ops with the opaque invitation token and classify resulting activity by its evidence confidence.
- Keep the linked profile, invitation activity, and reflection answers distinct: activity is attributable to an invitation/profile record, but does not prove the profile owner visited and does not join reflection answers to identity.
- LinkedIn sending remains manual. This decision authorizes no Unipile send, invite, message, follow-up, automation, scraping, or webhook activation.

### W6 exception, not a W6 restart

The narrow Unipile LinkedIn read/reconciliation slice is a W7-L0a prerequisite. W6 remains deferred for its broader provider work: provider-observed outreach, Gmail, Calendar/Zoom, Stripe, webhooks, outbox/retry hardening, and automated/reconciled relationship activity.

### Boundary

This authorizes direction and planning reconciliation only. It does not authorize credentials, API calls, code changes, profile ingestion, public collection, deployment, outreach, or external sends. Those require the existing separate implementation and beta approvals.

## Related records

- [[decisions/2026-08-14-linkedin-profile-invitation-attribution|DR-51]]
- [[decisions/2026-08-14-opaque-invitation-attribution-prototype|DR-49]]
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]]
- [[planning/GROWTH-SYSTEM-ORDERED-TASK-MAP|Growth System Ordered Task Map]]
