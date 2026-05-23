# Đề xuất nội dung — R.AI Landing

Hướng dẫn nội dung chi tiết cho từng phần cần bổ sung.

---

## 1. Case Studies

Mỗi case study nên theo cấu trúc:

### Template

```
Tiêu đề: [Tên dự án / Khách hàng]
Ngành: [Edtech / Travel / Marketing / Cloud]
Thời gian: [X tháng]

**Bài toán**
- Khách hàng gặp vấn đề gì?
- Quy mô và bối cảnh

**Giải pháp**
- R.AI đã làm gì?
- Công nghệ sử dụng (AI Platform, LLM Gateway, etc.)
- Kiến trúc tổng quan (kèm diagram)

**Kết quả**
- Số liệu cụ thể (giảm X% chi phí, tăng Y% hiệu suất)
- Timeline triển khai
- Feedback từ khách hàng
```

### Gợi ý case studies nên viết

1. **AI Platform cho Edtech** — Adaptive learning, tạo content tự động, kết quả -94% thời gian
2. **LLM Gateway triển khai** — Quản lý multi-model, tối ưu chi phí -60%
3. **AWS Data Platform** — Migration, lakehouse, FinOps giảm -38% cloud cost
4. **Mobile App AI** — App trên Store, on-device AI, user metrics

---

## 2. Trang chủ — Bổ sung sections

### Client Logos

```
Đặt sau stats bar, trước platforms showcase.
- Tiêu đề: "Đồng hành cùng" hoặc "Trusted by"
- 4-8 logos, grayscale, hover hiện màu
- Nếu chưa có logo khách hàng lớn, dùng: "Phục vụ doanh nghiệp tại Việt Nam từ 2019"
```

### Testimonial

```
Đặt trước Final CTA.
- 1-2 quote ngắn từ khách hàng hoặc đối tác
- Format: "Quote" — Tên, Chức vụ, Công ty
- Nếu chưa có testimonial thực, thay bằng "Quy trình làm việc" chi tiết hơn
```

---

## 3. Trang About — Mở rộng

### Đội ngũ

Hiện chỉ có CEO. Nên bổ sung:

- **CTO / Tech Lead** — Focus: Backend, AI/ML, Infrastructure
- **Product** — Focus: UX, Domain Research
- **Quy mô team** — "Đội ngũ X người, chuyên sâu AI & Data Engineering"

Nếu không muốn liệt kê từng người, dùng format:

```
Đội ngũ R.AI
- X engineers chuyên AI/ML & Data
- Y năm kinh nghiệm trung bình
- Chứng chỉ: AWS Solutions Architect, AWS ML Specialty
```

### Giá trị cốt lõi

Thêm 3-4 core values:

1. **Data-First** — Mọi quyết định bắt đầu từ dữ liệu
2. **Production-Ready** — Không POC bỏ xó, chỉ ship production
3. **Domain Expertise** — Hiểu sâu ngành, không chỉ hiểu tech
4. **Transparent** — Chia sẻ kiến thức, pricing rõ ràng

---

## 4. Blog — Chiến lược nội dung

### Chủ đề nên viết (SEO + thought leadership)

**Technical (cho developer/CTO):**
- "Kiến trúc Multi-Agent AI cho doanh nghiệp Việt Nam"
- "So sánh RAG vs Fine-tuning: Khi nào dùng gì?"
- "LLM Gateway: Tại sao cần một lớp abstraction cho AI models"
- "AWS Bedrock vs OpenAI API: Chi phí thực tế sau 6 tháng"

**Business (cho CEO/Decision maker):**
- "AI Readiness: 5 câu hỏi trước khi đầu tư AI"
- "Tại sao 98% dự án AI thất bại và cách tránh"
- "ROI thực tế khi triển khai AI cho SME Việt Nam"
- "Data & AI First: Chiến lược chuyển đổi từ 0"

**Case-based:**
- "Giảm 94% thời gian tạo content giáo dục bằng AI"
- "Tối ưu chi phí cloud 38% với FinOps + AI"

### Tần suất

- Mục tiêu: 2 bài/tháng
- Độ dài: 1500-2500 từ
- Mỗi bài có CTA cuối dẫn về Contact

---

## 5. Technology — Bổ sung visual

### Diagram kiến trúc

Mỗi platform card nên có 1 diagram đơn giản:

```
AI Platform:
[User] → [AI Gateway] → [Agent Orchestrator] → [Knowledge Base]
                                              → [LLM Models]
                                              → [Tools & APIs]

LLM Gateway:
[App] → [Gateway API] → [Router] → [OpenAI / Claude / Gemini / Bedrock]
                                  → [Cost Monitor]
                                  → [Cache Layer]
```

### Tech Stack badges

Liệt kê stack cụ thể tăng trust:
- Python, TypeScript, Next.js, React Native
- AWS (Bedrock, SageMaker, Lambda, ECS)
- PostgreSQL, Redis, Pinecone/Qdrant
- Terraform, Docker, GitHub Actions

---

## 6. Solutions — Bổ sung CTA

Mỗi vertical card hoặc cuối trang Solutions nên có:

```
Bạn đang trong ngành [X]?
→ Xem case study cụ thể
→ Đặt lịch trao đổi 30 phút
```

---

## 7. Mô hình hợp tác (thay Pricing)

Không cần giá cụ thể, nhưng nên mô tả rõ:

| Hình thức | Mô tả | Phù hợp với |
|-----------|--------|-------------|
| **AI Consulting** | Đánh giá hiện trạng, thiết kế roadmap, đào tạo team | Doanh nghiệp mới bắt đầu với AI |
| **Platform License** | Sử dụng AI Platform / LLM Gateway theo subscription | Doanh nghiệp có team tech |
| **Custom Development** | Xây dựng giải pháp AI chuyên biệt end-to-end | Bài toán phức tạp, cần domain-specific |
| **Managed Service** | Vận hành và tối ưu hệ thống AI liên tục | Doanh nghiệp muốn outsource AI ops |

---

## 8. Tone of Voice

Giữ nhất quán trên toàn site:

- **Ngắn gọn, đi thẳng vào vấn đề** — Không dài dòng, không buzzword rỗng
- **Technical nhưng accessible** — Developer hiểu, CEO cũng hiểu
- **Confident nhưng không oversell** — Dùng số liệu thực, không "hàng đầu thế giới"
- **Tiếng Việt tự nhiên** — Dùng thuật ngữ tiếng Anh khi cần (AI, platform, production) nhưng câu văn tiếng Việt

---

## Ghi chú

- Ưu tiên viết Case Studies trước vì tác động lớn nhất đến conversion
- Blog có thể bắt đầu từ việc chuyển kiến thức nội bộ thành bài viết
- Visual/diagram có thể dùng Excalidraw hoặc Figma export SVG
