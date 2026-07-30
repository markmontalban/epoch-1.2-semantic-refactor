# Workflow Catalog

Workflows define reusable learning procedures. A workflow is not a run and
does not authorize execution; a run freezes one workflow version, subjects,
inputs, owner, budget, and approval.

| Workflow | Purpose |
| --- | --- |
| [[workflows/WF-001-Growth-Hypothesis-Exploration|WF-001]] | Expand and rank one atomic growth belief. |
| [[workflows/WF-002-Segment-ICP-Qualification|WF-002]] | Qualify a segment and its user, buyer, or channel roles. |
| [[workflows/WF-003-Market-Evidence-Mapping|WF-003]] | Build bounded market, account, influence, or narrative evidence. |
| [[workflows/WF-004-Segment-Prioritization|WF-004]] | Compare candidate market contexts without claiming demand. |
| [[workflows/WF-005-Modular-Sales-Playbook|WF-005]] | Build reusable playbook cores and explicit overlays. |
| [[workflows/WF-006-Account-Asset-Qualification|WF-006]] | Qualify one account, asset, message, or public route. |
| [[workflows/WF-007-Product-Concept-Validation|WF-007]] | Reduce a product direction to a bounded testable concept. |
| [[workflows/WF-008-Brand-Social-Route-Qualification|WF-008]] | Qualify founder, brand, social, and search routes. |
| [[workflows/WF-009-Learning-Thread-Review|WF-009]] | Review one thread's evidence, gaps, stage, and next decision. |
| [[workflows/WF-010-Portfolio-Review-Lineage|WF-010]] | Review cross-thread priority and corpus lineage. |

`execution_kind` retains `initial`, `replay`, `fork`, and `refresh`. Direct
lineage belongs in `parent_run`; broader evidence dependencies belong in
`input_runs`.
