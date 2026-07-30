#!/usr/bin/env python3
"""Scaffold the next run directory for the MindfulText Epoch 1 lab.

Usage:
    python3 tools/new-run.py [--type lab-validation|market-test]
                             [--path-id ID] [--title "..."]
                             [--workflow-id ID] [--workflow-version VERSION]
                             --semantic-workflow WF-NNN
                             [--product PROD-NNN] [--threads TRK-NNN,...]
                             [--input-runs RUN-NNN,...]
                             [--result-updates ID,...]
                             [--execution-kind initial|replay|fork|refresh]
                             [--parent-run RUN-NNN] [--subject-refs "..."]

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
TEMPLATE = LAB_ROOT / "templates" / "Run-Card-Template.md"

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


def set_property(text, field, value):
    """Replace one YAML frontmatter property."""
    pattern = re.compile(r"^{}:.*$".format(re.escape(field)), re.MULTILINE)
    replaced, count = pattern.subn(
        "{}: {}".format(field, value), text, count=1
    )
    if count == 0:
        sys.exit("error: property '{}' not found in {}".format(field, TEMPLATE))
    return replaced


def filename_label(title, word_limit):
    """Return a filesystem-safe title fragment with at most word_limit words."""
    words = re.findall(r"[A-Za-z0-9]+", title)
    return "-".join(words[:word_limit] or ["Untitled"])


def inline_list(value):
    """Normalize a comma-separated CLI value as a YAML inline list."""
    if not value:
        return "[]"
    items = [item.strip() for item in value.split(",") if item.strip()]
    return "[{}]".format(", ".join(items))


def main():
    parser = argparse.ArgumentParser(
        description="Create the next runs/run-NNN scaffold from templates/Run-Card-Template.md."
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
    parser.add_argument("--workflow-id", dest="workflow_id", default=None)
    parser.add_argument("--workflow-version", dest="workflow_version", default=None)
    parser.add_argument(
        "--semantic-workflow",
        required=True,
        help="Stable workflow catalog owner, for example WF-007",
    )
    parser.add_argument("--product", default="PROD-001")
    parser.add_argument("--threads", default="")
    parser.add_argument("--input-runs", dest="input_runs", default="")
    parser.add_argument("--result-updates", dest="result_updates", default="")
    parser.add_argument(
        "--execution-kind",
        dest="execution_kind",
        choices=["initial", "replay", "fork", "refresh"],
        default="initial",
    )
    parser.add_argument("--parent-run", dest="parent_run", default=None)
    parser.add_argument("--subject-refs", dest="subject_refs", default=None)
    args = parser.parse_args()

    if args.execution_kind == "initial" and args.parent_run:
        parser.error("--parent-run is not allowed for an initial execution")
    if args.execution_kind in ("replay", "fork", "refresh") and not args.parent_run:
        parser.error("--parent-run is required for {} executions".format(args.execution_kind))
    if not re.fullmatch(r"WF-\d{3}", args.semantic_workflow):
        parser.error("--semantic-workflow must use WF-NNN")
    if not re.fullmatch(r"PROD-\d{3}", args.product):
        parser.error("--product must use PROD-NNN")

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
    title = args.title or "Untitled Run"
    card = TEMPLATE.read_text(encoding="utf-8")
    card = set_property(card, "run", run_id)
    card = set_property(card, "title", title)
    card = set_property(card, "date", today)
    card = set_property(card, "product", args.product)
    card = set_property(card, "threads", inline_list(args.threads))
    card = set_property(card, "workflow", args.semantic_workflow)
    card = set_property(card, "run_type", args.run_type)
    card = set_property(card, "execution_kind", args.execution_kind)
    card = set_property(card, "parent_run", args.parent_run or "")
    card = set_property(card, "input_runs", inline_list(args.input_runs))
    card = set_property(card, "result_updates", inline_list(args.result_updates))
    card = re.sub(
        r"^# Run Card Template$",
        "# {} — {}".format(run_id, title),
        card,
        count=1,
        flags=re.MULTILINE,
    )
    card = set_field(card, "run_id", run_id)
    card = set_field(card, "date", today)
    card = set_field(card, "execution_kind", args.execution_kind)
    card = set_field(card, "parent_run", args.parent_run or "N/A")
    card = set_field(card, "run_type", args.run_type)
    if args.workflow_id:
        card = set_field(card, "workflow_id", args.workflow_id)
    if args.workflow_version:
        card = set_field(card, "workflow_version", args.workflow_version)
    if args.subject_refs:
        card = set_field(card, "subject_refs", args.subject_refs)
    if args.path_id:
        card = set_field(card, "path_id", args.path_id)

    notes = (
        "# {} — {} Notes\n\n"
        "**run_id:** {}\n"
        "**date:** {}\n\n"
        "## Working notes\n\n"
        "- (append notes here; references only, no raw local-only content)\n"
    ).format(run_id, title, run_id, today)
    card_name = "{}-{}.md".format(run_id, filename_label(title, 4))
    notes_name = "{}-{}-Notes.md".format(run_id, filename_label(title, 3))

    (run_dir / "outputs").mkdir(parents=True)
    (run_dir / card_name).write_text(card, encoding="utf-8")
    (run_dir / notes_name).write_text(notes, encoding="utf-8")
    (run_dir / "outputs" / ".gitkeep").write_text("", encoding="utf-8")
    (run_dir / "trace.jsonl").write_text("", encoding="utf-8")

    print("created:")
    for path in (
        run_dir,
        run_dir / card_name,
        run_dir / notes_name,
        run_dir / "outputs",
        run_dir / "trace.jsonl",
    ):
        print("  {}".format(path))


if __name__ == "__main__":
    main()
