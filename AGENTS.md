# AGENTS.md — Hướng dẫn cho AI Agent

## Mục đích

Repo này chỉ chứa 1 file `index.html` — landing page đơn giản link đến các tài liệu kỹ thuật. Không có framework, không có build step.

## Quy tắc

### Chỉ chỉnh sửa `index.html`
Mọi thay đổi về giao diện, link, content đều nằm trong `index.html`.

### Không thêm dependencies
Repo này cố ý không có `package.json`. Giữ nguyên — plain HTML/CSS.

### Khi thêm site mới
Copy một portal card (`<a class="portal ...">...</a>`) và điều chỉnh:
- `href` — URL của site mới
- class màu (`portal-aws` / `portal-ms`) — hoặc thêm class mới với CSS variable tương ứng
- Icon SVG
- Count, title, description, tags

### CSS variables cho màu portal mới
```css
.portal-new { --accent-color: rgba(251,191,36,.4); --scan-color: rgba(251,191,36,.04); }
.portal-new .portal-icon { background: rgba(251,191,36,.08); color: #fbbf24; }
.portal-new .portal-count { color: #fbbf24; }
.portal-new .portal-cta   { color: #fbbf24; }
```

## Cấu trúc file

```
docs/
  index.html   ← toàn bộ UI (HTML + CSS inline)
  README.md
  AGENTS.md
  CLAUDE.md
  .gitignore
```

## Deploy

Cloudflare Pages — build command để trống, output dir `/`.
