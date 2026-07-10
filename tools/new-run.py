#!/usr/bin/env python3
"""Scaffold the next run directory for the MindfulText Epoch 1 lab.

Usage:
    python3 tools/new-run.py [--type lab-validation|market-test]
                             [--path-id ID] [--title "..."]

The lab root is resolved as the parent of the tools/ directory containing
this script, so the tool also works when invoked from elsewhere.
"""

import argparse
import datetime
import re
import sys
from pathlib import Path

LAB_ROOT = Path(__file__).resolve().parent.parent
RUNS_DIR = LAB_ROOT / "runs"
TEMPLATE = LAB_ROOT / "templates" / "run-card.md"

RUN_DIR_RE = re.compile(r"^run-(\d+)$")


def next_run_number():
    """Next run number: highest existing runs/run-NNN + 1 (starts at 1)."""
    highest = 0
    if RUNS_DIR.is_dir():
        for entry in RUNS_DIR.iterdir():
            match = RUN_DIR_RE.match(entry.name)
            if match and entry.is_dir():
                highest = max(highest, int(match.group(1)))
    return highest + 1


def set_field(text, field, value):
    """Replace the value of a '**field:** value' line, keeping the prefix."""
    pattern = re.compile(
        r"^(?P<prefix>\s*(?:-\s*)?\*\*" + re.escape(field) + r":\*\*)\s*.*$",
        re.IGNORECASE | re.MULTILINE,
    )
    replaced, count = pattern.subn(
        lambda m: "{} {}".format(m.group("prefix"), value), text, count=1
    )
    if count == 0:
        sys.exit("error: field '{}' not found in {}".format(field, TEMPLATE))
    return replaced


def main():
    parser = argparse.ArgumentParser(
        description="Create the next runs/run-NNN scaffold from templates/run-card.md."
    )
    parser.add_argument(
        "--type",
        dest="run_type",
        choices=["lab-validation", "market-test"],
        default="lab-validation",
        help="run_type for the run card (default: lab-validation)",
    )
    parser.add_argument("--path-id", dest="path_id", default=None)
    parser.add_argument("--title", default=None)
    args = parser.parse_args()

    if not TEMPLATE.is_file():
        sys.exit("error: template not found: {}".format(TEMPLATE))

    number = next_run_number()
    run_id = "RUN-{:03d}".format(number)
    run_dir = RUNS_DIR / "run-{:03d}".format(number)
    if run_dir.exists():
        sys.exit(
            "error: refusing to create {}: path already exists".format(run_dir)
        )

    today = datetime.date.today().isoformat()
    card = TEMPLATE.read_text(encoding="utf-8")
    card = set_field(card, "run_id", run_id)
    card = set_field(card, "date", today)
    card = set_field(card, "run_type", args.run_type)
    if args.path_id:
        card = set_field(card, "path_id", args.path_id)

    title = args.title or "Run {:03d}".format(number)
    blackboard = (
        "# {} — {}\n\n"
        "**run_id:** {}\n"
        "**date:** {}\n\n"
        "## Working notes\n\n"
        "- (append notes here; references only, no raw local-only content)\n"
    ).format(title, run_id, run_id, today)

    (run_dir / "outputs").mkdir(parents=True)
    (run_dir / "run-card.md").write_text(card, encoding="utf-8")
    (run_dir / "blackboard.md").write_text(blackboard, encoding="utf-8")
    (run_dir / "outputs" / ".gitkeep").write_text("", encoding="utf-8")
    (run_dir / "trace.jsonl").write_text("", encoding="utf-8")

    print("created:")
    for path in (
        run_dir,
        run_dir / "run-card.md",
        run_dir / "blackboard.md",
        run_dir / "outputs",
        run_dir / "trace.jsonl",
    ):
        print("  {}".format(path))


if __name__ == "__main__":
    main()
