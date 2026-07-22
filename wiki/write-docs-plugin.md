# `write-docs` Claude Code plugin

## Purpose

The repository doubles as the `vanhiep-plugins` Claude Code marketplace. Its only declared plugin, `write-docs`, is a Vietnamese technical-documentation playbook for Next.js, Fumadocs, and Cloudflare-based documentation projects.

This plugin is a content and workflow asset, not a runtime dependency of the landing page. The hub in [`index.html`](../index.html) continues to work if the plugin files are absent, and the plugin does not import or execute landing-page code.

## Marketplace and plugin metadata

[`.claude-plugin/marketplace.json`](../.claude-plugin/marketplace.json) defines:

- marketplace name: `vanhiep-plugins`;
- plugin root: `./skills`;
- one plugin named `write-docs`;
- plugin source: `./skills/write-docs`;
- version `1.0.0` and documentation-oriented keywords/category.

[`skills/write-docs/.claude-plugin/plugin.json`](../skills/write-docs/.claude-plugin/plugin.json) repeats the plugin identity, description, version, author, keywords, category, and declares `"skills": ["./"]`. When metadata changes, compare both manifests so the marketplace listing and installed plugin do not disagree.

The user-facing marketplace commands documented in [`README.md`](../README.md) are:

```text
/plugin marketplace add vanhiep99w/docs
/plugin install write-docs@vanhiep-plugins
```

A Claude Code restart is expected after installation. These are Claude Code slash commands, not shell commands provided by this repository.

## Editable source layout

```text
skills/write-docs/
├── .claude-plugin/plugin.json
├── SKILL.md
└── references/
    ├── api_reference.md
    ├── aws-style.md
    ├── case-study-style.md
    ├── doc-template.md
    ├── fumadocs-components.md
    ├── md-syntax.md
    ├── microservice-style.md
    └── setup-deploy.md
```

[`skills/write-docs/SKILL.md`](../skills/write-docs/SKILL.md) is the primary editable instruction source. Its YAML frontmatter determines the skill name and matching description; the body defines the workflow and links to the detailed references.

## Skill behavior and business rules

The skill is designed for creating, reviewing, or restructuring Vietnamese technical documentation in external learning repositories. Important rules encoded in `SKILL.md` include:

- Ask which target project to use when the user does not specify one. The current file contains environment-specific absolute content paths for three known projects; verify those paths in the execution environment rather than generalizing them.
- Write prose in Vietnamese while retaining technical names, code, commands, configuration values, URLs, and identifiers in their accurate form.
- Require `title` and `description` frontmatter for documentation pages.
- Use a deliberate learning order in Fumadocs `meta.json` `pages` arrays rather than relying on alphabetical discovery.
- Register every new page in the applicable `meta.json`, and register a new category at the root.
- Never overwrite an existing `meta.json`; read it and patch only the needed fields or entries.
- When converting a page into a parent with children, move the original content to `folder/index.md`, add child pages and a folder-level `meta.json`, then preserve ordering in the parent metadata.
- Prefer problem-first explanations, meaningful diagrams/tables, runnable examples, trade-offs, and validation through the target repository's development server.

These rules apply to the external documentation repositories targeted by the skill. They do not imply that this repository itself uses Next.js, Fumadocs, `meta.json`, or `wrangler.toml`.

## Reference guide map

| Reference | Use it for |
|---|---|
| [`doc-template.md`](../skills/write-docs/references/doc-template.md) | Base frontmatter, table of contents, overview, concepts, setup, best practices, comparisons, and sources |
| [`aws-style.md`](../skills/write-docs/references/aws-style.md) | AWS service-reference section order, exam tips, comparisons, naming, and category page ordering |
| [`microservice-style.md`](../skills/write-docs/references/microservice-style.md) | Fundamentals, pattern, and case-study conventions; problem-first structure; sequence diagrams and trade-offs |
| [`case-study-style.md`](../skills/write-docs/references/case-study-style.md) | Requirements, decomposition, decisions, migration roadmap, and expected depth for case studies |
| [`md-syntax.md`](../skills/write-docs/references/md-syntax.md) | Fumadocs Markdown/MDX gotchas: frontmatter, links, JSX spacing, admonitions, fenced code, Mermaid, headings, and tables |
| [`fumadocs-components.md`](../skills/write-docs/references/fumadocs-components.md) | Usage examples for Callout, Cards, Steps, Tabs, Accordion, TypeTable, and Mermaid |
| [`setup-deploy.md`](../skills/write-docs/references/setup-deploy.md) | Example Next.js/Fumadocs dependencies, Cloudflare configuration, local/deploy commands, component wiring, Mermaid, fonts, layout, and route troubleshooting |
| [`api_reference.md`](../skills/write-docs/references/api_reference.md) | Short generic guidance for API references and workflow guides |

Use `SKILL.md` as the policy and workflow entrypoint. Open only the references needed for the requested document type instead of loading every example by default.

## Packaged artifacts and installer

The repository tracks two zip-format `.skill` artifacts:

- [`write-docs.skill`](../write-docs.skill) at the repository root;
- [`skills/write-docs.skill`](../skills/write-docs.skill) beside the installer.

[`skills/install.sh`](../skills/install.sh) installs **the second file**, `skills/write-docs.skill`. It:

1. resolves the archive relative to the script;
2. exits if that archive is missing;
3. creates `~/.claude/skills`;
4. removes any existing `~/.claude/skills/write-docs` directory;
5. unzips the archive into the destination;
6. asks the user to restart Claude Code.

The removal is intentional replacement behavior. Review the resolved destination before changing or running the script.

### Synchronization hazard

At the initial wiki inspection, neither archive's embedded `SKILL.md` matched the current editable [`skills/write-docs/SKILL.md`](../skills/write-docs/SKILL.md). The nested archive used by `install.sh` also contained fewer reference files than the current source tree. No packaging script or release automation is checked in.

Therefore:

- do not edit a binary archive as the primary source;
- do not assume changing `skills/write-docs/` automatically refreshes either archive;
- do not assume the two archives contain the same release;
- decide explicitly whether a task concerns marketplace source, manual-install distribution, or both;
- verify archive members and contents before publishing or testing an installation.

This is the most important maintenance caveat in the plugin domain.

## Safe maintenance workflow

### Change skill instructions or references

1. Read [`wiki/_rules.md`](_rules.md) and the current `SKILL.md`.
2. Open only the relevant reference pages.
3. Edit `skills/write-docs/SKILL.md` and/or `skills/write-docs/references/*.md`.
4. Preserve relative reference links and the distinction between this repository and target repositories.
5. If the change is intended for manual archive users, rebuild the applicable `.skill` artifact through an explicitly agreed process; none is currently codified in the repository.
6. Inspect the resulting archive rather than trusting its timestamp.

### Change manifests

Keep marketplace and plugin metadata aligned, then validate both files:

```bash
python3 - <<'PY'
import json
from pathlib import Path
for name in [
    '.claude-plugin/marketplace.json',
    'skills/write-docs/.claude-plugin/plugin.json',
]:
    json.loads(Path(name).read_text())
    print(f'{name}: OK')
PY
```

### Inspect package contents

```bash
unzip -l write-docs.skill
unzip -l skills/write-docs.skill
```

To compare an embedded skill entry with editable source without extracting it:

```bash
cmp \
  <(unzip -p skills/write-docs.skill write-docs/SKILL.md) \
  skills/write-docs/SKILL.md
```

A non-zero `cmp` exit means the installer archive is not synchronized with source. Repeat with the root archive when that distribution is in scope.

### Test the manual installer safely

The installer writes outside the repository and deletes the prior installed skill directory, so do not run it casually during documentation-only validation. When installation testing is explicitly required, use an isolated `HOME` or a disposable environment, inspect the installed tree, and then invoke Claude Code according to its own plugin/skill testing workflow.

## Git history context

The marketplace and initial skill package were introduced together. Later changes added Fumadocs components, Markdown syntax guidance, deployment refinements, font setup, and the file-to-folder child-page pattern. The editable source continued evolving after the checked-in archives were created, which explains the present synchronization risk and makes source-versus-distribution review necessary for future release work.
