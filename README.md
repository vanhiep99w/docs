# tbh · docs

Landing page trung tâm — link đến các tài liệu kỹ thuật tiếng Việt.

## Cấu trúc

```
docs/
  index.html   ← landing page (plain HTML/CSS, không cần build)
  README.md
  AGENTS.md
  CLAUDE.md
  .gitignore
```

## Sites

| Site | Repo | URL |
|------|------|-----|
| AWS Learning | [aws-learn](https://github.com/vanhiep99w/aws-learn) | Cập nhật trong index.html |
| Microservices | [microservice-learn](https://github.com/vanhiep99w/microservice-learn) | Cập nhật trong index.html |

## Deploy

Cloudflare Pages — không cần build step:

| Setting | Value |
|---------|-------|
| Build command | _(để trống)_ |
| Output dir | `/` |
| Node version | _(không cần)_ |

## Khi update URL

Mở `index.html`, tìm 2 dòng comment `TODO` và thay URL:

```html
<!-- TODO: đổi href thành URL thật của aws-learn -->
<a href="https://YOUR-AWS-URL" ...>

<!-- TODO: đổi href thành URL thật của microservice-learn -->
<a href="https://YOUR-MS-URL" ...>
```

## Claude Code Plugin Marketplace

Repo này cũng đóng vai trò **plugin marketplace** cho Claude Code, hiện có:

| Plugin | Mô tả |
|--------|--------|
| `write-docs` | Hướng dẫn viết tài liệu kỹ thuật tiếng Việt (Next.js + Fumadocs + Cloudflare) |

### Cài vào project

```shell
/plugin marketplace add vanhiep99w/docs
/plugin install write-docs@vanhiep-plugins
```

Sau khi cài, restart Claude Code để plugin có hiệu lực.

### Cập nhật plugin

```shell
/plugin marketplace update vanhiep-plugins
```

## Khi thêm site mới

Thêm 1 portal card vào `index.html` theo pattern của các card hiện có.
