# AGENTS.md — Hướng dẫn cho AI Agent

## Mục đích của Repository

Đây là **hub repo** — không chứa content trực tiếp. Content đến từ các git submodules:

- `aws-learn/` — tài liệu AWS
- `microservice-learn/` — tài liệu Microservices

Repo này chứa:
- Next.js + Fumadocs app (`src/`)
- Script generate content (`scripts/prepare-content.mjs`)
- Cloudflare Pages deployment config

## Cấu trúc

```
docs/
├── aws-learn/                  # Submodule (readonly ở đây)
├── microservice-learn/         # Submodule (readonly ở đây)
├── scripts/
│   └── prepare-content.mjs     # Script chính — đọc submodules → content/docs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout với RootProvider
│   │   ├── page.tsx            # Landing page
│   │   ├── globals.css
│   │   ├── [[...slug]]/
│   │   │   ├── layout.tsx      # DocsLayout (sidebar)
│   │   │   └── page.tsx        # Docs page renderer
│   │   └── api/search/
│   │       └── route.ts        # Static Orama search index
│   └── lib/
│       └── source.ts           # Fumadocs source loader
├── content/docs/               # GENERATED — không chỉnh sửa trực tiếp
│   ├── aws/                    # Generated từ aws-learn/
│   └── microservices/          # Generated từ microservice-learn/
├── source.config.ts
├── next.config.mjs
└── package.json
```

## Quy tắc quan trọng

### KHÔNG chỉnh sửa content trực tiếp
`content/docs/` là thư mục generated — bị overwrite mỗi lần build.
Để sửa content:
- AWS docs → sửa trong `aws-learn/` repo
- Microservice docs → sửa trong `microservice-learn/` repo

### Khi thêm content repo mới
1. `git submodule add <url> <folder>`
2. Thêm hàm `process<RepoName>()` vào `scripts/prepare-content.mjs`
3. Output vào `content/docs/<prefix>/`
4. Cập nhật README.md

### Khi sửa UI/layout
- Sửa trong `src/` — đây là code Fumadocs Next.js bình thường
- Landing page: `src/app/page.tsx`
- Sidebar title: `src/app/[[...slug]]/layout.tsx`
- Global styles: `src/app/globals.css`

## Commands

```bash
# Generate content từ submodules
node scripts/prepare-content.mjs

# Dev (tự chạy prepare-content trước)
npm run dev

# Build
npm run build

# Update submodules lên latest
git submodule update --remote
git add -A && git commit -m "chore: update submodules"
git push
```

## Tech Stack

| Thành phần | Package |
|------------|---------|
| Framework | Next.js 15 (static export) |
| Docs UI | Fumadocs UI v14 |
| Search | Orama (static, client-side) |
| Deploy | Cloudflare Pages |
| Content | MDX via fumadocs-mdx |

## URL Structure

- `/aws/{category}/{slug}` — AWS docs
- `/microservices/{section}/{slug}` — Microservice docs
