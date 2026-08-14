# W5 n8n Readiness Evidence — 2026-08-11

## Evidence role

This note retains the decision-relevant result of the read-only n8n audit. It
does not authorize workflow creation, activation, execution, credentials, SSH
changes, or provider activity. W5 remains blocked on a proven Growth Ops API
and scoped credential.

Source report:
`/Users/mgzm-studio/Library/Mobile Documents/com~apple~CloudDocs/stu-mbp/Growth Ops Shared Files/produced by mbp/n8n-growth-ops-readiness-2026-08-11 copy.md`

SHA-256: `83dad58510d012cd878e37b3028508b91132a441e35b8b9c2274d81e2f0bb63c`

## Confirmed facts

- `https://n8n.mindfultext.com` returned UI `200`; `/healthz` and
  `/healthz/readiness` returned `{"status":"ok"}`; nginx reported `1.26.0`.
- MCP inventory found 101 workflows and zero active workflows.
- Known inactive production webhook paths returned `404`, as expected while
  inactive.
- A 2026-03-09 host baseline documents n8n `2.11.2`, Node `v22.22.1`, PM2,
  SQLite persistence, daily backups with 90-day retention, manual n8n updates,
  and OS unattended upgrades. Exact live n8n version and current backup cron
  were not re-verified through SSH.
- The TLS certificate observed by the audit is valid from 2026-06-17 through
  2026-09-15.
- Inactive inventory includes LinkedIn-, Gmail-, Stripe-, and Slack-capable
  workflows plus empty `cold-reply`, `nurture-check`, and `batch-enrich` stubs.

## Risks requiring follow-up before W5 activation

- An inline Zoom secret pattern exists in an inactive workflow. Rotate it and
  move the replacement to n8n Credentials before any reactivation; do not
  record its value.
- MCP agent permissions include workflow create, update, delete, and execute.
  Read-only audit agents should use least-privilege access.
- Inactive LinkedIn/email-capable workflows could be activated accidentally.
  Mark must choose archive/quarantine versus inactive-but-present handling.
- SQLite is acceptable for sparse workflow coordination, not canonical audit,
  idempotency, or outbox state; those remain in Growth Ops.
- Backup cron, restore ability, update script, and exact live version still need
  a short read-only host verification if Mark requires current operational
  proof rather than accepting the documented baseline.

## W5 boundary retained

The first workflow remains `call-request.notify`, and it may be built only
after Growth Ops exposes the approved claim/complete contract and a narrow n8n
credential. No Gmail/LinkedIn send, direct Neon access, or canonical state is
authorized.

## Related records

- [[decisions/2026-08-10-growth-ops-hosting|DR-40]] — n8n execution boundary.
- [[planning/workstreams/W2-OPERATIONS-FOUNDATION|W2 Operations Foundation]] — API and job prerequisites.
- [[planning/workstreams/W3-GROWTH-API-CONTRACT-PROPOSAL|W3 API proposal]] — non-frozen contract context.
- [[planning/GROWTH-SYSTEM-MASTER-CHECKLIST|Growth System Master Checklist]] — W5 status authority.
