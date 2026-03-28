# docs

Hub tài liệu học tập — tổng hợp từ nhiều repo riêng biệt, deploy thành một website duy nhất.

## Cấu trúc

```
docs/
├── aws-learn/            # Git submodule — tài liệu AWS
├── microservice-learn/   # Git submodule — tài liệu Microservices
├── scripts/
│   └── prepare-content.mjs   # Đọc từ submodules → generate content/docs/
├── src/                  # Next.js + Fumadocs app
├── content/docs/         # Generated (không commit)
│   ├── aws/
│   └── microservices/
├── source.config.ts
└── next.config.mjs
```

## URL Structure

| Path | Nội dung |
|------|----------|
| `/aws/{category}/{slug}` | Tài liệu AWS (116 bài) |
| `/microservices/{section}/{slug}` | Tài liệu Microservices (27 bài) |

## Content Repos

| Repo | Submodule | Nội dung |
|------|-----------|----------|
| [aws-learn](https://github.com/vanhiep99w/aws-learn) | `aws-learn/` | 116 dịch vụ AWS, 21 chủ đề |
| [microservice-learn](https://github.com/vanhiep99w/microservice-learn) | `microservice-learn/` | 27 bài Microservice Architecture |

## Commands

```bash
# Dev
npm run dev

# Build
npm run build

# Chỉ generate content
node scripts/prepare-content.mjs
```

## Khi thêm content repo mới

1. `git submodule add <repo-url> <folder-name>`
2. Cập nhật `scripts/prepare-content.mjs` — thêm hàm xử lý repo mới
3. Cập nhật README này

## Update submodules

```bash
# Pull latest từ tất cả submodules
git submodule update --remote

# Commit pointer mới
git add -A && git commit -m "chore: update submodules"
git push
```

## Deploy

Cloudflare Pages — tự động rebuild khi có commit mới trên `main`.

Build command: `node scripts/prepare-content.mjs && npm run build`
Output dir: `dist`
Node version: `20`
