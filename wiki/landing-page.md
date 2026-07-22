# Landing page

## Purpose and ownership

[`index.html`](../index.html) is the entire deployed documentation hub. It presents a curated set of Vietnamese technical-learning destinations as clickable cards and provides the site's visual identity. HTML, CSS, SVG icons, and JavaScript all live in this one file by design; there is no compilation or asset pipeline.

For current UI behavior, trust `index.html` over the older examples in `README.md`, `AGENTS.md`, and `CLAUDE.md`. Those files still describe an earlier portal structure and naming convention.

## Page structure

The document is organized into four practical layers:

1. **Head metadata:** Vietnamese locale, responsive viewport, page title and description, an inline SVG favicon, and Google Fonts (`Outfit`, `Inter`, and `JetBrains Mono`).
2. **Inline styles:** theme variables, background layers, layout, card system, transitions, responsive breakpoints, and reduced-motion behavior.
3. **Content:** navigation, hero copy, the route counter, 18 portal cards, and footer.
4. **Inline scripts:** pointer tracking, particles, and a canvas-based sky/weather/theme loop.

The declared visual stack is:

```text
#sky-cycle         fixed, z-index -1
.bg-mesh/noise     fixed, z-index 0
#particles         fixed, z-index 0
.wrap              relative, z-index 1 (nav, content, footer)
```

## Portal card model

Every destination is a top-level anchor with two classes: `card` plus a portal-specific accent class such as `c-aws` or `c-gha`.

```html
<a href="https://example.pages.dev/" class="card c-example">
  <div class="card-glow card-glow-1"></div>
  <div class="card-glow card-glow-2"></div>
  <div class="card-body">
    <div class="card-top">
      <div class="card-icon">...</div>
      <div class="card-num-block">...</div>
    </div>
    <div>
      <div class="card-title">Example</div>
      <div class="card-desc">...</div>
    </div>
    <div class="card-tags">...</div>
    <div class="card-foot">...</div>
  </div>
</a>
```

The whole card is the link; the visual CTA is a `div` inside that anchor. Existing links navigate in the current tab and do not set `target="_blank"`.

### Current portal inventory

The visible route counter is `18`, matching these cards in source order:

| # | Card | Destination | Accent class |
|---:|---|---|---|
| 1 | AWS | `https://aws-learn.pages.dev` | `c-aws` |
| 2 | AWS Questions | `https://aws-learn.pages.dev/practice/` | `c-aws` |
| 3 | Microservices | `https://microservice-learn.pages.dev` | `c-ms` |
| 4 | Multi-Tenant | `https://multi-tenant-8ax.pages.dev` | `c-mt` |
| 5 | SQL | `https://sql-by4.pages.dev` | `c-sql` |
| 6 | Kafka | `https://kafka-learn.pages.dev` | `c-kafka` |
| 7 | Redis | `https://redis-learn.pages.dev/` | `c-redis` |
| 8 | Interview Questions | `https://interview-question.pages.dev` | `c-iq` |
| 9 | System Design Practice | `https://system-design-practice.pages.dev` | `c-sd` |
| 10 | React | `https://react-learn-awm.pages.dev/` | `c-react` |
| 11 | Java | `https://java-learn.pages.dev` | `c-java` |
| 12 | JMM | `https://jmm-ahk.pages.dev` | `c-jmm` |
| 13 | JavaScript | `https://js-learn.pages.dev/` | `c-js` |
| 14 | JWT | `https://jwt-learn.pages.dev/` | `c-jwt` |
| 15 | Kubernetes | `https://k8s-learn-2tg.pages.dev/` | `c-k8s` |
| 16 | Docker | `https://docker-learn.pages.dev/` | `c-docker` |
| 17 | GitHub Actions | `https://github-actions-learn.pages.dev/` | `c-gha` |
| 18 | Jenkins | `https://jenkins-learn.pages.dev/` | `c-jenkins` |

Card titles intentionally use the technology/product name without a `Learn` or `Learning` suffix. Descriptions and badges may still use learning-related words where they describe the route state.

## Styling and responsive layout

### Theme and accent variables

Global variables under `:root` define the dark base theme, typography colors, shared palette, and card radius. Portal classes define two comma-separated RGB accents:

```css
.c-gha {
  --ac: 32,136,255;
  --ac2: 129,140,248;
  --ac-hex: #2088ff;
  --ac2-hex: #818cf8;
}
```

Most effects consume `--ac` and `--ac2` through `rgb(var(--ac))` or `rgba(var(--ac), alpha)`: title color, icon treatment, glow, spotlight, border shimmer, tags, stats, and CTA gradient. Keep the variables as raw RGB triplets because callers add their own alpha values.

### Grid behavior

The bento container uses a 12-column grid:

- Above `920px`, each card spans four columns, producing three cards per row.
- At `920px` and below, each card spans six columns, producing two cards per row.
- At `768px` and below, the grid becomes a single column; the wrapper and hero spacing also tighten, stats can wrap, and the footer stacks.

The source has explicit `nth-child` selectors through card 18 to assign staggered reveal indices. A newly appended card works without one, because `--i` defaults to zero, but its reveal timing will be wrong relative to the sequence. Extend the selector list whenever the card count grows.

## Browser behavior and animation

Three isolated immediately invoked functions run after the page markup.

### Card pointer spotlight

A `mousemove` listener on every `.card` converts pointer coordinates to local card coordinates and writes `--mouse-x` and `--mouse-y`. CSS uses those values as the center of a radial hover spotlight.

### Particle canvas

`#particles` maintains 60 moving points. Nearby points are joined within a 100-pixel threshold, while pointer proximity within 150 pixels repels particles. The canvas is resized to the browser viewport and redraws continuously with `requestAnimationFrame`.

### Sky, weather, and live theme

`#sky-cycle` runs a 60-second day/night cycle. The drawing pipeline includes:

- interpolated night, dawn, morning, noon, evening, and dusk gradients;
- 120 twinkling stars;
- sun and moon arcs;
- procedurally generated clouds;
- a repeating weather queue of rain, clear, snow, clear, wind, and clear;
- rain lightning, snowflakes, wind streaks, dust, and leaves;
- live interpolation of text, card, border, and surface CSS variables.

Weather phases last 15 seconds and fade over 3 seconds. Canvas drawing runs per animation frame; DOM theme-variable updates are throttled to roughly 10 updates per second.

### Reduced motion

The CSS `prefers-reduced-motion: reduce` rule disables animations and nearly eliminates transitions. Each JavaScript animation function also returns before attaching or starting its animation loop when reduced motion is requested. Preserve both layers when changing effects.

## Adding a portal safely

1. Read [`wiki/_rules.md`](_rules.md).
2. Copy an existing complete `.card` block near the related topic.
3. Set the deployed `href` and verify it independently.
4. Choose a concise title, description, truthful count/state label, tags, footer stats, CTA text, and inline SVG icon.
5. Reuse an existing accent class only when the visual grouping is intentional; otherwise add a new `.c-*` class with `--ac`, `--ac2`, `--ac-hex`, and `--ac2-hex`.
6. If the gradient is dark, include the new class in the white CTA text selector.
7. Increment the visible `.sec-head .cnt` value.
8. Add the next `.bento .card:nth-child(N) { --i: N; }` reveal selector. If inserting in the middle, the existing selectors still follow DOM order and do not need renaming.
9. Update the head description and hero copy only when the new topic materially changes the site's advertised coverage.
10. Update this page's inventory during the next wiki update.

Do not add a dependency, `package.json`, framework, external icon package, or separate asset pipeline for a normal portal-card change.

## Editing an existing card

The destination URL, title, document count, description, tags, and footer stats are independent text fields. When one fact changes, search the entire card and update every duplicated representation. Counts currently appear in both the large number and footer stats for several portals.

When renaming titles, scope edits to `.card-title` unless the request also covers descriptions, badges, metadata, or URLs. Words embedded in deployment hostnames must not be changed merely to match display copy.

## Validation checklist

There is no automated test suite. Use focused static and browser checks.

### Static checks

```bash
git diff --check

grep -c 'class="card c-' index.html
grep -n 'class="card-title"' index.html
```

A dependency-free parser check is also useful:

```bash
python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path
HTMLParser().feed(Path('index.html').read_text())
print('HTML parser: OK')
PY
```

The standard-library parser catches gross parsing failures but is not a full conformance validator.

### Browser checks

Serve locally with `python3 -m http.server 8000`, then verify:

- all modified cards navigate to the intended deployed URLs;
- the route counter equals the number of card anchors;
- three-, two-, and one-column layouts at desktop, tablet, and mobile widths;
- card title/description truncation and tag overflow;
- hover spotlight, border shimmer, icon movement, and CTA contrast;
- canvas resize behavior and acceptable performance;
- day/night and weather transitions over time;
- reduced-motion mode disables continuous animation as expected;
- keyboard focus and activation still work on the card anchors.

## Deployment boundary

Root docs specify Cloudflare Pages with no build command and `/` as the output directory. No Cloudflare config or workflow is checked into this repository, so a source commit is the only repository-side deployment input. If deployment fails while the static file works locally, inspect the external Cloudflare Pages project settings rather than adding a build system by default.
