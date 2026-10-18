# Write-docs marketplace retired

## Current status

The `write-docs` marketplace has been removed from this repository. Its marketplace/plugin manifests, editable skill tree, installer and both `.skill` archives are no longer present. Do not use the old marketplace installation commands or recreate these distributions.

The landing page remains a standalone static site; removing the marketplace does not add a build step or change its outbound portal links.

## Shared skills

In the parent `my-docs` collection, use these paths relative to that collection root:

- `.agents/skills/fumadocs-project-init/SKILL.md` — initialize a new documentation repository and curriculum placeholders.
- `.agents/skills/fumadocs-technical-writer/SKILL.md` — write or revise a selected technical documentation page.

References resolve relative to each skill directory. Select the target repository and inspect its current authoring source, renderer, metadata and validation commands; shared templates do not override host configuration.

Per-repository skill copies and other skills outside AWS have been removed. All skills inside `aws-learn` are preserved as an explicit exception. No global installation under the user's HOME was changed.

## Standalone checkout boundary

A clone of the `docs` Git repository alone does not include the parent collection's shared skills. Open the collection root or explicitly configure the agent to access those skills. Do not restore local copies or symlinks as a workaround.

For this repository's own changes, follow the rule route in [Quickstart](quickstart.md#rule-loading). The root collection's canonical shared-skill overview is in `wiki/landing-and-authoring-tools.md` relative to `my-docs`.
