#!/usr/bin/env python3
"""Read-only structural audit for this Obsidian vault.

Checks local Markdown and wikilink targets, eligible stable IDs that remain
plain text, and Markdown notes with no graph edge.  Exemptions are glob paths
listed in tools/obsidian-link-exemptions.txt.  This tool never modifies files.
"""

from __future__ import annotations

import fnmatch
import re
import sys
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
EXEMPTIONS = ROOT / "tools" / "obsidian-link-exemptions.txt"
FENCE_RE = re.compile(r"```.*?```", re.DOTALL)
INLINE_CODE_RE = re.compile(r"`[^`]*`", re.DOTALL)
WIKILINK_RE = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]*)?\]\]")
MARKDOWN_LINK_RE = re.compile(r"\[[^\]]*\]\(([^)]+)\)")
ANY_LINK_RE = re.compile(r"\[\[[^\]]+\]\]|\[[^\]]*\]\([^)]+\)")
ID_RE = re.compile(r"\b(?:SEG|GH|GTM|CDP|ICP|SOC|PRO|EV|ACC|RUN|DR|CMP)-\d{1,3}\b")
HEADING_RE = re.compile(r"^#{1,6}\s+(.*)$", re.MULTILINE)


def vault_files():
    return {
        path.resolve()
        for path in ROOT.rglob("*.md")
        if ".git" not in path.parts and ".obsidian" not in path.parts
    }


def relative(path):
    return path.resolve().relative_to(ROOT).as_posix()


def load_exemptions():
    if not EXEMPTIONS.exists():
        return []
    return [
        line.strip()
        for line in EXEMPTIONS.read_text(encoding="utf-8").splitlines()
        if line.strip() and not line.lstrip().startswith("#")
    ]


def is_exempt(path, patterns):
    return any(fnmatch.fnmatch(relative(path), pattern) for pattern in patterns)


def heading_slug(heading):
    heading = heading.lower().replace(" — ", "--")
    heading = re.sub(r"[^a-z0-9\s-]", "", heading)
    return re.sub(r"\s+", "-", heading.strip())


def canonical_files(files):
    """Return a stable-ID -> canonical Markdown file map for self-link checks."""
    result = {}
    fixed = {
        "SEG": "growth/SEGMENTS.md",
        "GH": "growth/HYPOTHESES.md",
        "GTM": "growth/GTM-MOTIONS.md",
        "CDP": "growth/CDP-001.md",
        "ICP": "growth/ICP-REGISTRY.md",
        "SOC": "growth/SOCIAL-IDEA-LEDGER.md",
        "PRO": "product/PRODUCT-IDEAS.md",
        "EV": "growth/EVIDENCE-REGISTER.md",
        "ACC": "growth/account-registry/README.md",
        "CMP": "runs/run-003/CMP-001-Comparison-Protocol.md",
        "DR": "decisions/DECISION-REGISTER.md",
    }
    for prefix, rel in fixed.items():
        result[prefix] = (ROOT / rel).resolve()

    for path in files:
        text = path.read_text(encoding="utf-8", errors="replace")
        run = re.search(r"^(?:run:\s*|\*\*run_id:\*\*\s*)(RUN-\d{3})\s*$", text, re.MULTILINE)
        if run and ("record_type: run-card" in text[:500] or "**run_id:**" in text[:500]):
            result[run.group(1)] = path
        for heading in HEADING_RE.findall(text):
            # Only a decision record's own heading may establish its canonical
            # owner.  A working-note heading can mention a DR wikilink.
            match = re.match(r"\s*(DR-\d{1,3})\b", heading)
            if match:
                result[match.group(0)] = path
    return result


def wiki_targets(source, text, files):
    targets = []
    for raw in WIKILINK_RE.findall(text):
        raw = raw.strip()
        if not raw:
            continue
        candidate = (ROOT / raw).resolve() if "/" in raw else None
        if candidate and candidate not in files and candidate.with_suffix(".md") in files:
            candidate = candidate.with_suffix(".md")
        if candidate in files:
            targets.append(candidate)
            continue
        matches = [path for path in files if path.stem == raw or path.name == raw]
        targets.extend(matches)
    return targets


def markdown_targets(source, text):
    targets = []
    for raw in MARKDOWN_LINK_RE.findall(text):
        raw = raw.strip().strip("<>").split("#", 1)[0]
        if not raw or re.match(r"(?:https?|mailto|obsidian):", raw):
            continue
        targets.append((source.parent / raw).resolve())
    return targets


def main():
    files = vault_files()
    exemptions = load_exemptions()
    canonical = canonical_files(files)
    unresolved = []
    unlinked_ids = []
    degree = defaultdict(int)

    for source in sorted(files):
        text = source.read_text(encoding="utf-8", errors="replace")
        visible = FENCE_RE.sub("", text)
        prose = INLINE_CODE_RE.sub("", visible)
        exempt = is_exempt(source, exemptions)

        for target in wiki_targets(source, prose, files):
            degree[source] += 1
            degree[target] += 1
        for raw in WIKILINK_RE.findall(prose):
            raw = raw.strip()
            if not raw:
                continue
            candidate = (ROOT / raw).resolve() if "/" in raw else None
            if candidate and candidate not in files and candidate.with_suffix(".md") in files:
                candidate = candidate.with_suffix(".md")
            if candidate is None:
                matches = [path for path in files if path.stem == raw or path.name == raw]
                if not matches and not exempt:
                    unresolved.append((relative(source), "[[{}]]".format(raw)))
            elif candidate not in files and not exempt:
                unresolved.append((relative(source), "[[{}]]".format(raw)))

        for target in markdown_targets(source, prose):
            if not target.exists() and not exempt:
                try:
                    display = str(target.relative_to(ROOT.parent))
                except ValueError:
                    display = str(target)
                unresolved.append((relative(source), display))
            elif target in files:
                degree[source] += 1
                degree[target] += 1

        protected = ANY_LINK_RE.sub("", prose)
        for match in ID_RE.finditer(protected):
            identifier = match.group(0)
            prefix = identifier.split("-", 1)[0]
            key = identifier if prefix in {"RUN", "DR"} else prefix
            owner = canonical.get(key)
            if owner == source:
                continue
            if not exempt:
                unlinked_ids.append((relative(source), identifier))

    orphans = [
        relative(path)
        for path in files
        if degree[path] == 0 and not is_exempt(path, exemptions)
    ]

    if unresolved:
        print("Unresolved links:")
        for source, target in unresolved:
            print("  {} -> {}".format(source, target))
    if unlinked_ids:
        print("Eligible stable IDs left as plain text:")
        for source, identifier in unlinked_ids:
            print("  {}: {}".format(source, identifier))
    if orphans:
        print("Markdown notes with no graph edge:")
        for path in sorted(orphans):
            print("  {}".format(path))

    if unresolved or unlinked_ids or orphans:
        sys.exit(1)
    print("Obsidian link audit: OK ({} Markdown notes checked)".format(len(files)))


if __name__ == "__main__":
    main()
