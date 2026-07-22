# Repository quickstart

## What this repository is

`tbh · docs` has two related responsibilities:

1. **Documentation hub:** [`index.html`](../index.html) is a standalone Vietnamese landing page that links to deployed technical-learning portals.
2. **Claude Code plugin marketplace:** [`.claude-plugin/marketplace.json`](../.claude-plugin/marketplace.json) publishes the `write-docs` skill stored under [`skills/write-docs/`](../skills/write-docs/).

The landing page is intentionally plain HTML, inline CSS, and inline JavaScript. There is no `package.json`, framework, build step, application server, test suite, database, or API in this repository. Cloudflare Pages serves the repository root as static files. The `write-docs` plugin, by contrast, is guidance for authoring Vietnamese documentation in other Next.js/Fumadocs repositories; it is not used to render this landing page.

## Rule loading

Before changing repository files:

1. Read the reviewed global rules in [`wiki/_rules.md`](_rules.md).
2. Read every applicable section `_rules.md` linked here. There are no section-specific rule files in the initial wiki.
3. Re-read the applicable rules if the task expands into another area.

Do not modify any `wiki/**/_rules.md` outside the approved Harness proposal and apply workflow.

## Repository map

| Path | Role | Source of truth for |
|---|---|---|
| [`index.html`](../index.html) | Complete static site: metadata, CSS, portal cards, and browser animation code | Current portal inventory and landing-page behavior |
| [`.claude-plugin/marketplace.json`](../.claude-plugin/marketplace.json) | Claude Code marketplace manifest | Marketplace name and published plugin source |
| [`skills/write-docs/SKILL.md`](../skills/write-docs/SKILL.md) | Editable `write-docs` skill definition | Documentation-authoring workflow and rules |
| [`skills/write-docs/references/`](../skills/write-docs/references/) | Templates and focused Fumadocs guidance | Writing styles, syntax, components, and deployment examples |
| [`skills/write-docs/.claude-plugin/plugin.json`](../skills/write-docs/.claude-plugin/plugin.json) | Plugin metadata | Plugin identity, version, category, and skill entrypoint |
| [`skills/install.sh`](../skills/install.sh) | Manual archive installer | Installation into `~/.claude/skills/` |
| [`README.md`](../README.md), [`AGENTS.md`](../AGENTS.md), [`CLAUDE.md`](../CLAUDE.md) | Original human and agent notes | Historical intent and basic deployment guidance |

The root documentation predates many portal additions and still contains obsolete two-card/TODO examples. Use `index.html` for the current portal list and this wiki for current repository orientation.

## Architecture at a glance

```text
Cloudflare Pages
└── index.html
    ├── HTML metadata and navigation
    ├── Inline CSS and responsive bento-card layout
    ├── 18 outbound portal links
    └── Inline JavaScript
        ├── Card pointer spotlight
        ├── Particle canvas
        └── Day/night, clouds, weather, and dynamic theme canvas

Claude Code marketplace
└── .claude-plugin/marketplace.json
    └── skills/write-docs/
        ├── .claude-plugin/plugin.json
        ├── SKILL.md
        └── references/*.md
```

These two surfaces share the repository but do not call each other at runtime.

## Start locally

No installation is required. From the repository root, either open `index.html` directly or serve it with a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

A server is preferable when checking URL behavior and browser tooling. No repository-defined build or test command exists.

## Common change paths

### Change or add a portal

Start with [Landing page](landing-page.md). All production UI changes belong in `index.html`. Keep the card count, accent class, animation delay selector, descriptive metadata, and card content consistent.

### Change visual effects or responsive behavior

Start with [Landing page](landing-page.md#browser-behavior-and-animation). Preserve the `prefers-reduced-motion` exits and test desktop and mobile layouts in a browser.

### Change the documentation-writing skill

Start with [Write-docs plugin](write-docs-plugin.md). Treat `skills/write-docs/SKILL.md` and its references as editable source. Do not assume either checked-in `.skill` archive is synchronized with that source.

### Change marketplace metadata

Read [Write-docs plugin](write-docs-plugin.md#marketplace-and-plugin-metadata), then keep the marketplace manifest and plugin manifest semantically aligned.

## Validation and deployment

For any change, begin with:

```bash
git diff --check
git status --short
```

For landing-page changes, run a local static server and perform the browser checks documented in [Landing page](landing-page.md#validation-checklist). Deployment is handled by Cloudflare Pages with an empty build command and `/` as the output directory, according to the repository's root documentation. There is no checked-in Cloudflare configuration or CI workflow for this site, so deployment behavior is configured outside the repository.

For plugin changes, validate JSON syntax and inspect archive contents as described in [Write-docs plugin](write-docs-plugin.md#safe-maintenance-workflow). There is no automated packaging or release workflow checked into the repository.

## Historical context

Git history shows an early Next.js implementation was deliberately replaced with a plain HTML/CSS site. Later work evolved that single file through a bento-grid redesign, richer card interactions, a 60-second day/night cycle, weather effects, and incremental portal additions. Separately, the Claude Code marketplace and `write-docs` skill were added and then expanded with Fumadocs component, Markdown syntax, and child-page guidance. This explains why the repository remains dependency-free while still containing substantial browser JavaScript and plugin documentation.

## Further reading

- [Landing page](landing-page.md) — portal model, styling, animation, and change checklist.
- [Write-docs plugin](write-docs-plugin.md) — marketplace structure, skill behavior, references, packaging, and maintenance cautions.

## Backlog

No substantial repository area was deferred in this initial pass.
