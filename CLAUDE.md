# CLAUDE.md

## Project Overview

Landing page đơn giản cho hub tài liệu kỹ thuật tiếng Việt. Chỉ gồm 1 file `index.html` — không có framework, không có build step.

## Structure

```
docs/
  index.html   ← toàn bộ landing page (HTML + CSS inline)
  README.md
  AGENTS.md
  CLAUDE.md
  .gitignore
```

## Commands

Không có build command — deploy thẳng file tĩnh lên Cloudflare Pages.

Để xem local: mở `index.html` trong trình duyệt hoặc dùng any static server:
```bash
npx serve .
```

## Guidelines

- **Không thêm framework** (Next.js, Astro, v.v.) — plain HTML/CSS là đủ
- **Không thêm JS** trừ khi thực sự cần thiết
- **Không thêm package.json** — giữ repo tối giản
- Giữ tất cả CSS inline trong `<style>` tag trong `index.html`
- Khi thêm portal card mới: copy pattern hiện có, chỉ đổi màu và content

## Sites được link

- **AWS Learning** (`portal-aws`) — `aws-learn` repo
- **Microservices** (`portal-ms`) — `microservice-learn` repo

## Khi update URL

Tìm comment `TODO` trong `index.html` và thay URL thật.

## Deploy

Cloudflare Pages:
- Build command: _(để trống)_
- Output dir: `/`
