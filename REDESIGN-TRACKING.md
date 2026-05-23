# R.AI Website Redesign — Implementation Tracking

## Design References
- **Linear** (linear.app): dark hero, purple accent, product UI, consistency
- **Vercel** (vercel.com): bento grid, monochrome, engineered feel
- **Stripe** (stripe.com): gradient text, whitespace, premium feel
- **Anthropic** (anthropic.com): minimalist authority, clean type

## Design Tokens

```
Background:    #000000 (hero), #09090b (sections), #111111 (cards)
Text:          #ffffff (headings), #a1a1aa (body), #52525b (muted)
Accent:        #7c3aed (purple — sparingly)
Font:          Geist Sans (headings + body)
Hero size:     text-7xl / text-8xl
Section pad:   py-32 lg:py-40
Card radius:   rounded-2xl
Borders:       NONE — use bg difference or subtle 1px rgba(255,255,255,0.06)
```

---

## Sitemap (5 sections)

| # | Section | Headline | Layout | Visual |
|---|---|---|---|---|
| 1 | Hero | "Data & AI First" | Full-screen centered | Animated gradient mesh bg |
| 2 | Technology | "Những gì chúng tôi xây dựng" | Bento grid 2x2 asymmetric | Abstract glowing cards |
| 3 | Verticals | "Lĩnh vực ứng dụng" | Interactive tabs | Icon + bullets per tab |
| 4 | Why R.AI | "Tại sao R.AI" | Stats row + timeline strip | Counter animation |
| 5 | Contact | "Bắt đầu" | Centered, minimal | Email + form |

---

## Implementation Tasks

### Phase 1: Design System & Foundation
- [ ] 1.1 Install Geist font
- [ ] 1.2 Rewrite globals.css (new tokens, remove old light mode)
- [ ] 1.3 Update layout.tsx (Geist, pure black bg, remove dark/light class)
- [ ] 1.4 Rewrite Header (4 links max, minimal, no theme toggle for now)

### Phase 2: Hero Section
- [ ] 2.1 Full viewport height (min-h-screen)
- [ ] 2.2 Animated gradient mesh background (CSS/canvas)
- [ ] 2.3 Headline: "Data & AI First" — text-7xl lg:text-8xl, gradient
- [ ] 2.4 Subtitle: 1 sentence, text-xl, muted
- [ ] 2.5 Single CTA button (white bg, black text)
- [ ] 2.6 Scroll indicator (animated chevron)

### Phase 3: Technology Section (Bento Grid)
- [ ] 3.1 Section heading: "Những gì chúng tôi xây dựng"
- [ ] 3.2 Bento layout: 1 large card (OneAir) + 2 medium (LLM Gateway, Domain AI) + 1 wide (Cloud & Data)
- [ ] 3.3 Each card: title + 1-line description + subtle glow on hover
- [ ] 3.4 No paragraphs — just keywords/chips inside cards
- [ ] 3.5 Hover: scale(1.02) + accent border glow

### Phase 4: Verticals Section (Tabs)
- [ ] 4.1 Tab bar: Edtech | Travel | Marketing | Cloud
- [ ] 4.2 Active tab: accent underline or fill
- [ ] 4.3 Tab content: headline + 3 bullets + optional stat
- [ ] 4.4 Animated transition (fade + slide)
- [ ] 4.5 Mobile: horizontal scroll tabs or accordion

### Phase 5: Why R.AI (Stats + Timeline)
- [ ] 5.1 Stats row: 3 numbers (counter animation)
  - "$2.59T AI spending" / "2% success rate" / "6 năm R&D"
- [ ] 5.2 Timeline strip: horizontal, 3 milestones
  - 2019 Thành lập → 2022 OneAir → 2026 Data & AI First
- [ ] 5.3 Minimal — no paragraphs, just numbers and labels

### Phase 6: Contact Section
- [ ] 6.1 Headline: "Bắt đầu" or "Let's build"
- [ ] 6.2 Subtitle: 1 sentence
- [ ] 6.3 Email link (large, clickable)
- [ ] 6.4 Optional: 3-field form (name, email, message)
- [ ] 6.5 Phone number secondary

### Phase 7: Footer & Cleanup
- [ ] 7.1 Minimal footer: logo + 4 links + legal
- [ ] 7.2 Remove all unused components
- [ ] 7.3 Remove Problem.tsx, About.tsx, Applications.tsx, Products.tsx, FAQ.tsx, TechMarquee.tsx, Traction.tsx (old versions)
- [ ] 7.4 Final build test
- [ ] 7.5 Lighthouse audit (performance, accessibility)

---

## Content Spec (exact text)

### Hero
```
Tagline:  RESOLUTION AI
Headline: Data & AI First
Subtitle: Thiết kế nền tảng AI chuyên ngành cho doanh nghiệp Việt Nam. Từ 2019.
CTA:      Liên hệ hợp tác
```

### Technology Cards

| Card | Title | Line | Size |
|---|---|---|---|
| Large | OneAir Platform | Multi-model AI platform. Agents, RAG, workflows. | 2x2 |
| Medium | LLM Gateway | 100+ models. Smart routing. -60% cost. | 1x1 |
| Medium | Domain AI | Edtech · Travel · Marketing · Mobile | 1x1 |
| Wide | Cloud & Data | AWS data platform, AI infra, migration, FinOps | 2x1 |

### Verticals Tab Content

**Edtech:**
- AI adaptive learning theo level từng học viên
- Content generation từ curriculum
- Assessment AI với real-time feedback

**Travel:**
- AI trip planning theo preferences & budget
- Dynamic pricing real-time
- Conversational booking 24/7

**Marketing:**
- AI content creation consistent brand voice
- Campaign automation brief → ship
- Predictive analytics trước khi launch

**Cloud & Data:**
- Data lake/lakehouse trên AWS
- AI/ML infrastructure (Bedrock, SageMaker)
- Cost optimization & FinOps

### Stats
```
$2.59T    AI spending toàn cầu 2026 (Gartner)
2%        AI initiatives tạo giá trị thực
6 năm    R&D tích lũy platform & domain
```

### Contact
```
Headline: Bắt đầu với Data & AI
Subtitle: Discovery call 30 phút. Assessment miễn phí.
Email:    contact@resolutionai.vn
Phone:    082 2470465
```

---

## Status: COMPLETED
Started: 2026-05-23
Completed: 2026-05-23

### Summary
- [x] All 7 phases implemented
- [x] Build passes
- [x] Old components removed
- [x] 5 focused sections (Hero, Technology, Verticals, WhyRAI, Contact)
- [x] Geist font, pure black bg, monochrome + purple accent
- [x] Bento grid layout for Technology
- [x] Interactive tabs for Verticals
- [x] Animated counters for stats
- [x] Gradient mesh hero background
