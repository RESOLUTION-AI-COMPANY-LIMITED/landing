# R.AI Website Redesign Plan

## Tại sao website hiện tại "phèn"?

Vấn đề chính sau khi so sánh với Stripe, Linear, Vercel, Anthropic:

| Vấn đề | Website hiện tại | Benchmark (Linear/Stripe/Vercel) |
|---|---|---|
| **Quá nhiều text** | Mỗi section đổ cả đoạn văn | Headline + 1 sentence + visual |
| **Không có hero visual** | Chỉ text trên nền tối | Product screenshot / 3D animation / interactive demo |
| **Spacing quá chật** | Sections sát nhau, padding nhỏ | Generous whitespace — "double the space you think" |
| **Quá nhiều sections** | 10+ sections, scrolls forever | 5-7 focused sections, mỗi cái có 1 job duy nhất |
| **Không có motion cảm xúc** | Fade-in generic | Subtle parallax, gradient animations, product demos |
| **Font & type hierarchy yếu** | Chỉ dùng size khác nhau | Sharp, geometric, tight kerning, dramatic size contrast |
| **Thiếu product visual** | Toàn text mô tả | Screenshots, UI mockups, interactive diagrams |
| **Card grid syndrome** | Mọi thứ đều là grid cards giống nhau | Mix layouts: full-width, asymmetric, text + visual |
| **Accent color loãng** | Purple dùng khắp nơi → mất impact | Monochrome base + 1 accent dùng CỰC KỲ sparingly |

---

## 4 Design Principles (từ Stripe/Linear/Vercel analysis)

### 1. HIGH CONTRAST
- Pure black (`#000` hoặc `#0a0a0a`) background — không phải gray-950
- Text trắng tinh (#fff) — không phải gray-100
- Loại bỏ mọi "mid-tone" gây muddy

### 2. GENEROUS WHITESPACE
- Section padding: `py-32 lg:py-40` (hiện tại `py-20`)
- Giữa elements: double spacing hiện tại
- Hero: chiếm toàn bộ viewport height (`min-h-screen`)
- Fewer elements per section — 1 idea = 1 screen

### 3. MONOCHROME + 1 ACCENT
- Base: Black + White + Gray chỉ 2-3 shades
- Accent: 1 màu duy nhất dùng cho CTA + highlights
- Cho R.AI: **Purple (#7c3aed)** — nhưng dùng RẤT ÍT (chỉ 5% surface)
- Gradient chỉ cho 1 element đặc biệt (hero text hoặc CTA)

### 4. SHARP TYPOGRAPHY
- Font: **Geist** (Linear/Vercel dùng) hoặc **Inter** với tight tracking
- Hero: `text-6xl lg:text-8xl` — dramatic size
- Body: `text-base` (16px) — không nhỏ hơn
- Weight contrast: 400 (body) vs 700 (headings) — không dùng 500/600 ở giữa
- Letter-spacing tight cho headings: `-0.02em`

---

## Sitemap mới (5 focused sections)

```
┌──────────────────────────────────────────────────┐
│  HEADER (fixed, minimal: logo + 4 links + CTA)  │
├──────────────────────────────────────────────────┤
│                                                  │
│  1. HERO (full-screen)                           │
│     - 1 headline (< 8 words)                    │
│     - 1 subtitle (< 20 words)                   │
│     - 1 CTA button                              │
│     - 1 visual (product shot / animation)       │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  2. WHAT WE BUILD (Công nghệ)                   │
│     - 3 platforms: OneAir, LLM Gateway, Domain  │
│     - Layout: bento grid (asymmetric)           │
│     - Mỗi card: icon + name + 1 line + visual  │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  3. VERTICALS (Lĩnh vực)                        │
│     - Horizontal scroll hoặc tabs               │
│     - 4 verticals: Edtech, Travel, Mkt, Cloud   │
│     - Mỗi cái: headline + 3 bullets + visual   │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  4. WHY R.AI (Differentiators)                  │
│     - 3 killer stats (Gartner numbers)          │
│     - 3 reasons (Data First, Domain, Ship)      │
│     - Timeline mini (2019 → 2026)               │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  5. CONTACT (Simple)                            │
│     - 1 headline                                │
│     - Email + Phone                              │
│     - Optional: mini form (name, email, msg)    │
│                                                  │
├──────────────────────────────────────────────────┤
│  FOOTER (minimal: logo, links, legal)           │
└──────────────────────────────────────────────────┘
```

---

## Visual Inspirations cho R.AI

| Reference | Lấy gì | Áp dụng thế nào |
|---|---|---|
| **Linear** (linear.app) | Dark hero, purple accent, product screenshot, consistent execution | Dark mode base, purple = R.AI accent |
| **Vercel** (vercel.com) | Engineered feel, bento grid, monochrome, sharp | Bento layout cho Technology section |
| **Stripe** (stripe.com) | Gradient hero text, code snippets, interactive | Gradient "Data & AI First" text, code examples |
| **Anthropic** (anthropic.com) | Minimalist authority, clean typography, whitespace | Overall tone — less is more |
| **Cohere** (cohere.com) | AI product demo, dark + warm accent | Product visualization |

---

## Execution Plan

### Phase 1: Foundation (Design System)
- [ ] Switch font to **Geist** (Vercel's font, free, sharp)
- [ ] New color palette: `#000000`, `#ffffff`, `#a1a1aa` (zinc-400), `#7c3aed` (accent only)
- [ ] Spacing scale: `py-32` sections, `gap-16` between blocks
- [ ] Typography scale: 80px / 48px / 20px / 16px (4 sizes only)
- [ ] Remove ALL borders — use shadows or background difference for separation
- [ ] Remove emoji, use monochrome SVG icons or no icons

### Phase 2: Hero (full rewrite)
- [ ] Full viewport height (`min-h-screen`)
- [ ] 1 headline: "Data & AI First" (text-8xl, gradient)
- [ ] 1 subtitle: 1 sentence max
- [ ] 1 CTA button (white bg, black text — high contrast)
- [ ] Background: subtle animated gradient or grid pattern
- [ ] Optional: product screenshot below fold

### Phase 3: Technology (Bento Grid)
- [ ] Remove all paragraph text
- [ ] 3 cards in asymmetric bento layout (1 large + 2 small)
- [ ] Each card: name + 1-line + abstract visual/diagram
- [ ] Subtle hover animation (scale, glow)

### Phase 4: Verticals (Tabs or Horizontal)
- [ ] Tab interface: click to switch vertical
- [ ] Each tab: headline + 3 short bullets + relevant visual
- [ ] No more than 3 lines of text per vertical
- [ ] Animated transition between tabs

### Phase 5: Why R.AI (Stats + Timeline)
- [ ] 3 large numbers (animated count-up)
- [ ] Minimal timeline: 2019 → 2026, 3 milestones max
- [ ] No paragraph text — just data points

### Phase 6: Contact (Ultra-simple)
- [ ] "Let's talk" + email link + optional 3-field form
- [ ] Full-width dark section, centered text

---

## Design Tokens (New)

```css
/* Colors */
--bg: #000000;
--bg-elevated: #0a0a0a;
--bg-card: #111111;
--text: #ffffff;
--text-muted: #a1a1aa;
--text-dim: #52525b;
--accent: #7c3aed;
--accent-glow: rgba(124, 58, 237, 0.15);

/* Typography */
--font: 'Geist', system-ui, sans-serif;
--text-hero: 80px / 1.0 / -0.02em;
--text-heading: 48px / 1.1 / -0.01em;
--text-subheading: 20px / 1.4 / 0;
--text-body: 16px / 1.6 / 0;

/* Spacing */
--section-padding: 128px;  /* py-32 */
--block-gap: 64px;         /* gap-16 */
--card-padding: 32px;      /* p-8 */

/* Borders */
/* NO borders — use bg color difference or shadows */
--shadow-card: 0 0 0 1px rgba(255,255,255,0.05);
--shadow-hover: 0 0 30px rgba(124, 58, 237, 0.1);

/* Radius */
--radius: 16px;            /* rounded-2xl for cards */
```

---

## Key Rules

1. **Mỗi section = 1 viewport** — user scroll 1 lần = 1 idea
2. **Headline < 8 words** — nếu dài hơn → rewrite
3. **Body text < 2 lines** — nếu dài hơn → cut hoặc hide in expandable
4. **Max 3 cards per row** — quá 3 = cognitive overload
5. **Visual > Text** — mỗi section phải có 1 visual element chiếm >40% area
6. **Animation phải có purpose** — không animate để animate, animate để guide eye
7. **Mobile = same experience** — không phải "simplified version"

---

## Timeline estimate

| Phase | Effort | Notes |
|---|---|---|
| Phase 1: Design System | 1-2 hours | Font, colors, spacing, globals.css |
| Phase 2: Hero | 1 hour | Rewrite + animated gradient bg |
| Phase 3: Technology Bento | 2 hours | New component, asymmetric layout |
| Phase 4: Verticals Tabs | 2 hours | Interactive tabs with animation |
| Phase 5: Why R.AI | 1 hour | Stats + mini timeline |
| Phase 6: Contact | 30 min | Simplify existing |
| **Total** | **~8 hours** | |

---

## Next step

Confirm plan → mình bắt tay implement Phase 1-6 lần lượt.

Hoặc nếu muốn nhanh: mình rewrite TOÀN BỘ trong 1 lần theo plan này.
