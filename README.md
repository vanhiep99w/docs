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

## Skill biên soạn dùng chung

Marketplace `write-docs`, installer và các bản `.skill` đã được gỡ khỏi repo này. Hai skill được quản lý một lần ở root thư mục tập hợp `my-docs`:

- `../.agents/skills/fumadocs-project-init/SKILL.md`: khởi tạo repo tài liệu và curriculum.
- `../.agents/skills/fumadocs-technical-writer/SKILL.md`: viết hoặc chỉnh sửa bài kỹ thuật.

Không sao chép skill vào từng doc. Nếu checkout riêng repo `docs`, các đường dẫn trên không có sẵn; cần mở thư mục tập hợp hoặc cấu hình agent dùng skill chung. Toàn bộ skill của `aws-learn` được giữ nguyên.

## Khi thêm site mới

Thêm 1 portal card vào `index.html` theo pattern của các card hiện có.
