# Chiến lược Blog — R.AI Landing

## Hiện trạng

Blog hiện đang hardcode trong `src/lib/posts.ts` — mỗi bài là 1 object với content dạng markdown string. Có 3 bài mẫu. Renderer tự viết (parse heading, list, bold/italic). Không có editor, không có CMS.

---

## Đề xuất: 3 phương án tích hợp blog

### Phương án 1: MDX local files (Khuyên dùng cho giai đoạn hiện tại)

**Mô tả:** Viết blog bằng file `.mdx` trong thư mục `content/blog/`, commit vào repo, deploy cùng site.

**Ưu điểm:**
- Zero cost, zero dependency bên ngoài
- Full control: custom components, code highlighting, diagrams
- SEO tối ưu (static generation)
- Workflow đơn giản: viết → commit → deploy
- Phù hợp team kỹ thuật (viết trong VS Code / Cursor)

**Nhược điểm:**
- Cần biết git để publish bài
- Không có visual editor cho non-tech writer
- Không có scheduling, draft management ngoài git branch

**Cần cài:**
- `@next/mdx` hoặc `next-mdx-remote` (render MDX)
- `gray-matter` (parse frontmatter)
- `rehype-highlight` hoặc `shiki` (code syntax)
- `content-collections` (optional, type-safe content)

**Cấu trúc:**
```
content/
  blog/
    tai-sao-98-phan-tram-ai-that-bai.mdx
    llm-gateway-tiet-kiem-60-phan-tram.mdx
    domain-specific-ai-2028.mdx
```

**Frontmatter mẫu:**
```mdx
---
title: "Tại sao 98% dự án AI không tạo được giá trị"
excerpt: "Gartner 2026 cho thấy chỉ 2% AI initiatives tạo ra giá trị..."
date: "2026-05-20"
readTime: "5 phút"
tag: "AI Strategy"
published: true
---

## Bối cảnh

Nội dung bài viết ở đây...
```

**Đánh giá:** ⭐⭐⭐⭐⭐ cho team nhỏ, tech-savvy, giai đoạn đầu.

---

### Phương án 2: Sanity CMS (Khuyên dùng khi cần non-tech writer)

**Mô tả:** Dùng Sanity làm headless CMS. Viết bài trên Sanity Studio (web app), fetch content qua API về Next.js.

**Ưu điểm:**
- Visual editor đẹp, real-time collaboration
- Non-tech writer có thể viết và publish
- Free tier rộng rãi (3 users, 500K API requests/tháng, 20GB bandwidth)
- TypeScript SDK, tích hợp Next.js App Router tốt nhất hiện tại
- Live preview, draft mode
- Image CDN built-in
- GROQ query language mạnh

**Nhược điểm:**
- Thêm dependency bên ngoài (hosted service)
- Setup ban đầu phức tạp hơn MDX
- Content nằm trên Sanity cloud (không trong repo)
- Nếu scale lớn, Growth plan $99/tháng

**Cần cài:**
- `sanity` (Studio)
- `next-sanity` (Next.js toolkit)
- `@sanity/image-url` (image transform)

**Free tier bao gồm:**
- 3 user seats
- 2 datasets
- 500K API CDN requests/tháng
- 20GB bandwidth
- 10GB asset storage
- Không giới hạn documents

**Đánh giá:** ⭐⭐⭐⭐ cho team có content writer riêng, cần workflow editorial.

---

### Phương án 3: Notion as CMS (Nhanh nhất nếu đã dùng Notion)

**Mô tả:** Viết blog trên Notion, dùng Notion API để fetch content về Next.js. Notion đóng vai trò CMS.

**Ưu điểm:**
- Viết trên Notion quen thuộc, không cần học tool mới
- Free (Notion API miễn phí)
- Collaboration tốt (share page, comment)
- Rich content: embed, table, toggle, callout

**Nhược điểm:**
- API rate limit (3 requests/second)
- Render Notion blocks → HTML phức tạp (cần `react-notion-x` hoặc tự map)
- Không có image optimization (ảnh từ Notion CDN, URL expire)
- Performance kém hơn static (cần ISR/revalidate)
- Notion có thể thay đổi API bất cứ lúc nào
- Không có draft/publish workflow rõ ràng

**Cần cài:**
- `@notionhq/client` (official API)
- `react-notion-x` (renderer) hoặc tự build renderer

**Đánh giá:** ⭐⭐⭐ nhanh để bắt đầu nhưng technical debt cao, không khuyến khích cho production lâu dài.

---

### Phương án 4: Hashnode Headless (Nếu muốn community + SEO sẵn)

**Mô tả:** Viết trên Hashnode, dùng GraphQL API để hiển thị trên site riêng.

**Ưu điểm:**
- Editor tốt, hỗ trợ markdown
- SEO built-in trên Hashnode domain (bonus backlink)
- Free hoàn toàn
- GraphQL API đầy đủ
- Community/newsletter built-in

**Nhược điểm:**
- Content bị duplicate (trên Hashnode + site riêng) → cần canonical URL
- Ít control hơn về content structure
- Phụ thuộc vào Hashnode platform
- Không phổ biến ở Việt Nam

**Đánh giá:** ⭐⭐⭐ phù hợp nếu muốn vừa có blog riêng vừa có presence trên Hashnode.

---

## So sánh tổng hợp

| Tiêu chí | MDX Local | Sanity | Notion | Hashnode |
|----------|-----------|--------|--------|----------|
| Chi phí | Free | Free (3 users) | Free | Free |
| Setup time | 2-3 giờ | 4-6 giờ | 3-4 giờ | 2-3 giờ |
| Non-tech writer | ❌ | ✅ | ✅ | ✅ |
| Performance | ⚡ Tốt nhất | ⚡ Tốt (ISR) | 🔶 Trung bình | 🔶 Trung bình |
| SEO control | Full | Full | Full | Partial |
| Custom components | ✅ MDX | ✅ Portable Text | ❌ Limited | ❌ |
| Image optimization | Next/Image | Sanity CDN | ❌ Expire URLs | ❌ |
| Vendor lock-in | Không | Thấp (export được) | Thấp | Trung bình |
| Scale | Unlimited | 500K req free | Rate limited | Unlimited |

---

## Khuyến nghị theo giai đoạn

### Giai đoạn 1 (Hiện tại → 10 bài): MDX Local

Lý do:
- Team nhỏ, tech-savvy, viết không nhiều
- Không cần thêm service/dependency
- Migrate từ hardcode hiện tại sang MDX rất nhanh
- Performance tốt nhất (full static)

Việc cần làm:
1. Tạo thư mục `content/blog/`
2. Chuyển 3 bài hiện tại sang file `.mdx`
3. Cài `gray-matter` + MDX renderer
4. Update `src/lib/posts.ts` để đọc từ file system
5. Thêm syntax highlighting cho code blocks

### Giai đoạn 2 (10+ bài, có content writer): Sanity CMS

Khi nào chuyển:
- Có người viết content không biết git
- Cần scheduling, draft review workflow
- Cần image management tốt hơn
- Muốn preview trước khi publish

Migration path: MDX → Sanity rất straightforward vì cả hai đều dùng structured content.

---

## Workflow đề xuất (MDX)

```
1. Viết bài trong VS Code / Cursor (file .mdx)
2. Preview local: `bun dev` → xem tại /blog/[slug]
3. Commit + Push → Auto deploy (Vercel/Docker)
4. Bài mới live trong 1-2 phút
```

## Workflow đề xuất (Sanity)

```
1. Viết bài trên Sanity Studio (web app)
2. Preview draft trực tiếp trên site (draft mode)
3. Click "Publish" → Webhook trigger revalidation
4. Bài mới live trong vài giây (ISR)
```

---

## Action items

- [ ] Chọn phương án (MDX recommended cho hiện tại)
- [ ] Migrate 3 bài hiện tại sang format mới
- [ ] Setup MDX pipeline (gray-matter + renderer)
- [ ] Thêm syntax highlighting
- [ ] Thêm Table of Contents tự động
- [ ] Thêm related posts ở cuối bài
- [ ] Thêm share buttons (copy link, Twitter, LinkedIn)
- [ ] Setup RSS feed (`/feed.xml`)
- [ ] Thêm bài mới theo CONTENT-GUIDE.md
