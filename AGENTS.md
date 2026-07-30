# MindfulText vault governance

For any change to Markdown, Obsidian links, stable IDs, run cards, outputs,
decision records, or navigation, use the `mindfultext-obsidian-governance`
skill when it is available.

Apply its core rule even for a small edit: link upward to the highest relevant
canonical owner (subject, run, or dated decision), not automatically to a root
index or [[OBSIDIAN-HOME|Obsidian Home]]. Preserve historical snapshots and validate with
`python3 tools/validate-obsidian-links.py` after relationship changes.
