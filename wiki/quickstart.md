# Repository quickstart

## What this repository is

`tbh · docs` is the documentation hub: [`index.html`](../index.html) is a standalone Vietnamese landing page that links to deployed technical-learning portals.

The landing page is intentionally plain HTML, inline CSS, and inline JavaScript. There is no `package.json`, framework, build step, application server, test suite, database, or API in this repository. Cloudflare Pages serves this repository root as static files.

The former `write-docs` marketplace, installer and skill archives have been removed. Documentation-authoring skills now live once in the parent `my-docs/.agents/skills/` directory; see [Shared skills and retired marketplace](write-docs-plugin.md). Older visual descriptions below also predate the current directory/filter UI; inspect `index.html` for current behavior.

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
```

The former marketplace is no longer part of this repository. Shared authoring skills are not a runtime dependency of the landing page.

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

### Use or change the documentation-writing skills

Start with [Shared skills](write-docs-plugin.md#shared-skills). The editable sources live in the parent collection, not this Git repository. Do not recreate the retired marketplace, local skill copies, installers or archives.

## Validation and deployment

For any change, begin with:

```bash
git diff --check
git status --short
```

For landing-page changes, run a local static server and perform the browser checks documented in [Landing page](landing-page.md#validation-checklist). Deployment is handled by Cloudflare Pages with an empty build command and `/` as the output directory, according to the repository's root documentation. There is no checked-in Cloudflare configuration or CI workflow for this site, so deployment behavior is configured outside the repository.

There is no skill packaging or marketplace release workflow to run in this repository anymore. Shared-skill maintenance belongs to the parent collection.

## Historical context

Git history shows an early Next.js implementation was deliberately replaced with a plain HTML/CSS site. Later work evolved that single file through a bento-grid redesign, richer card interactions, a 60-second day/night cycle, weather effects, and incremental portal additions. Separately, the Claude Code marketplace and `write-docs` skill were added and then expanded with Fumadocs component, Markdown syntax, and child-page guidance. This explains why the repository remains dependency-free while still containing substantial browser JavaScript and plugin documentation.

## Further reading

- [Landing page](landing-page.md) — portal model, styling, animation, and change checklist.
- [Shared skills and retired marketplace](write-docs-plugin.md) — current skill locations and standalone-checkout limitations.

## Backlog

No substantial repository area was deferred in this initial pass.
