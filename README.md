# R.AI — resolutionai.vn

Corporate website cho **Resolution AI** (R.AI) — Data & AI First Company.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Font**: Geist Sans (self-hosted)
- **Runtime**: Bun (Docker) / Node.js (dev)
- **Deploy**: Docker (Bun distroless) / Vercel / AWS

## Cấu trúc

```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── about/                # Về R.AI
│   ├── solutions/            # Giải pháp (5 verticals)
│   ├── technology/           # Công nghệ (Bento grid)
│   ├── blog/                 # Blog listing
│   ├── blog/[slug]/          # Blog detail (SSG)
│   ├── contact/              # Liên hệ (form)
│   ├── faqs/                 # FAQ accordion
│   ├── terms/                # Điều khoản
│   ├── privacy/              # Bảo mật
│   ├── cookies/              # Cookies
│   ├── license/              # Giấy phép
│   ├── robots.ts             # robots.txt
│   ├── sitemap.ts            # sitemap.xml (14 URLs)
│   ├── opengraph-image.tsx   # Dynamic OG image (Edge)
│   └── icon.svg              # Favicon
├── components/
│   ├── Hero.tsx              # Full-screen hero
│   ├── HomePreview.tsx       # Stats + platform cards + CTA
│   ├── Technology.tsx        # Bento grid
│   ├── Verticals.tsx         # Horizontal scroll cards
│   ├── WhyRAI.tsx            # About: vision/mission/stats/timeline/team
│   ├── Contact.tsx           # Form + info
│   ├── Header.tsx            # Fixed nav
│   ├── Footer.tsx            # 3-column footer
│   ├── BlogList.tsx          # Blog listing
│   ├── BlogDetail.tsx        # Blog article
│   ├── LegalPage.tsx         # Shared legal layout
│   └── StructuredData.tsx    # JSON-LD schemas
└── lib/
    └── posts.ts              # Blog content (static)
```

## Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Docker

```bash
# Build & run
docker compose up --build -d

# Check status
docker compose ps

# Stop
docker compose down
```

Image: ~166MB (Bun distroless, Next.js standalone)

## Deploy

### Vercel (recommended for simplicity)

```bash
npx vercel
```

### Docker (AWS ECS / VPS / any container platform)

```bash
docker build -t rai-landing .
docker run -p 3000:3000 rai-landing
```

### Static Export (S3 + CloudFront)

Change `next.config.ts`:
```ts
output: "export"
```
Then upload `/out` directory.

## Routes

| Path | Trang |
|------|-------|
| `/` | Home |
| `/about` | Về R.AI |
| `/solutions` | Giải pháp (5 verticals) |
| `/technology` | Công nghệ |
| `/blog` | Blog |
| `/blog/[slug]` | Blog detail |
| `/contact` | Liên hệ |
| `/faqs` | FAQ |
| `/terms` | Điều khoản |
| `/privacy` | Bảo mật |
| `/cookies` | Cookies |
| `/license` | Giấy phép |

## SEO

- Title template: `%s | R.AI`
- OG Image: Dynamic (Edge runtime, 1200x630)
- JSON-LD: Organization + WebSite + BlogPosting
- Sitemap: 14 URLs auto-generated
- Canonical URLs per page
- Vietnamese locale (`vi_VN`)

## Company Info

- **Công ty**: CÔNG TY TNHH RESOLUTION AI
- **MST**: 0108572098
- **Website**: resolutionai.vn
- **Email**: contact@resolutionai.vn
- **Phone**: 082 2470465
- **Địa chỉ**: Hà Nội, Việt Nam

## License

Private. © 2026 Resolution AI Company Limited.
