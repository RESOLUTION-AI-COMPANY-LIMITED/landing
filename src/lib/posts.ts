export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "tai-sao-98-phan-tram-ai-that-bai",
    title: "Tại sao 98% dự án AI không tạo được giá trị — và cách tiếp cận khác",
    excerpt:
      "Gartner 2026 cho thấy chỉ 2% AI initiatives tạo ra giá trị chuyển đổi. Nguyên nhân gốc không nằm ở model — mà ở data readiness và domain fit.",
    date: "2026-05-20",
    readTime: "5 phút",
    tag: "AI Strategy",
    content: `
## Bối cảnh

Năm 2026, thế giới chi $2.59 nghìn tỷ USD cho AI (tăng 47% YoY theo Gartner). Nhưng thực tế phũ phàng: chỉ 1 trên 50 dự án AI tạo ra giá trị chuyển đổi thực sự.

80% CEO nói AI buộc phải thay đổi vận hành, nhưng chỉ 27% có chiến lược AI rõ ràng. Đâu là nguyên nhân?

## 3 nguyên nhân gốc

### 1. Thiếu AI-ready data

Đa số doanh nghiệp nhảy vào AI mà không có nền data. Data nằm rải rác trong Excel, email, đầu người. AI không có gì để học.

Gartner Hype Cycle 2025 xác nhận: AI-ready data là prerequisite #1 cho mọi AI success.

### 2. Generic AI không fit nghiệp vụ

Dùng ChatGPT hay Claude cho mọi bài toán giống nhau. Nhưng mỗi ngành có context riêng, thuật ngữ riêng, quy trình riêng.

Gartner dự đoán 50% enterprise AI sẽ chuyển sang domain-specific models by 2028.

### 3. Strategy mà không execution

Nhiều doanh nghiệp thuê consultant làm 100 slides AI roadmap. Nhưng không ai ship. Gap giữa strategy và production quá lớn.

## Cách tiếp cận của R.AI

Chúng tôi đi theo thứ tự: **Data → AI → Value**.

1. **Data Ready**: Xây pipeline, làm sạch, tạo nền AI-ready data trước
2. **AI Deploy**: Domain-specific models, fine-tuned cho từng ngành
3. **Value Capture**: Đo ROI, tối ưu liên tục qua data feedback loop

Đây không phải framework lý thuyết — đây là process đã được áp dụng qua 6 năm phát triển platform.

## Kết luận

AI không khó vì thiếu model. AI khó vì thiếu nền tảng. Bắt đầu từ data, không phải từ ChatGPT.
    `,
  },
  {
    slug: "llm-gateway-tiet-kiem-60-phan-tram",
    title: "LLM Gateway: Giảm 60% chi phí AI mà không hy sinh chất lượng",
    excerpt:
      "Intelligent routing chọn model tối ưu cho mỗi request. Cách chúng tôi thiết kế hệ thống và kết quả thực tế từ production.",
    date: "2026-05-15",
    readTime: "7 phút",
    tag: "Technical",
    content: `
## Vấn đề

Hầu hết team engineering dùng 1 model (thường là GPT-4) cho mọi request. Nhưng không phải mọi request cần model mạnh nhất:

- Simple Q&A: model nhỏ đủ tốt, giá $0.25/1M tokens
- Complex reasoning: cần GPT-4/Claude, giá $15/1M tokens
- Code generation: cần model khác so với summarization

Kết quả: 60-70% chi phí bị lãng phí.

## Giải pháp: Intelligent Routing

LLM Gateway của R.AI hoạt động như reverse proxy cho AI models:

- **100+ model providers** qua 1 unified API
- **Smart routing**: phân tích complexity của mỗi request, route đến model tối ưu
- **Cost governance**: token-level tracking, budget alerts, rate limiting per team
- **Fallback chains**: nếu model A timeout → tự chuyển sang model B
- **Caching layer**: identical requests không gọi lại model

## Kết quả thực tế

Triển khai cho internal platform và clients:

- Chi phí LLM giảm 40-60% so với single-model approach
- Latency P95 giảm 30% nhờ routing request nhẹ đến model nhanh
- Uptime 99.9% nhờ fallback chains
- Full observability: biết chính xác team nào, feature nào dùng bao nhiêu

## Kiến trúc

Gateway chạy trên AWS, tích hợp với AI Platform. Hỗ trợ tất cả major providers: OpenAI, Anthropic, Google, Mistral, Cohere, và các open-source models self-hosted.

Dựa trên LiteLLM core với custom routing engine và governance layer.

## Ai nên dùng?

- Team engineering đang dùng >$2,000/tháng cho LLM APIs
- Tổ chức cần kiểm soát chi phí AI ở cấp team/project
- Platform cần multi-model support mà không lock vào 1 vendor
    `,
  },
  {
    slug: "domain-specific-ai-2028",
    title: "Domain-Specific AI: Xu hướng định hình enterprise AI đến 2028",
    excerpt:
      "Gartner dự đoán 50% enterprise AI sẽ là domain-specific by 2028. Tại sao generic models đang đến giới hạn và domain expertise là moat thực sự.",
    date: "2026-05-10",
    readTime: "6 phút",
    tag: "AI Trends",
    content: `
## Generic models đến giới hạn

GPT-4, Claude, Gemini — tất cả đều mạnh. Nhưng khi áp dụng vào nghiệp vụ cụ thể, chúng gặp vấn đề:

- Không hiểu thuật ngữ chuyên ngành
- Hallucinate khi thiếu context
- Không có data riêng của tổ chức
- Output chung chung, cần nhiều prompt engineering

## Domain-Specific Language Models (DSLMs)

Gartner đưa DSLMs vào Top 10 Strategic Technology Trends 2026. Dự đoán: 50% enterprise GenAI models sẽ domain-specific by 2028.

DSLMs là models được train hoặc fine-tune trên data chuyên ngành:
- Healthcare: hiểu medical terminology, compliance
- Finance: hiểu regulations, risk models
- Education: hiểu learning patterns, curriculum

## Data Flywheel

Điểm khác biệt lớn nhất: DSLMs cải thiện liên tục nhờ domain data:

1. Model phục vụ users
2. Interaction data được thu thập
3. Data feed back vào training/fine-tuning
4. Model tốt hơn → users hài lòng hơn → nhiều data hơn

Đây là compound advantage mà generic models không có.

## R.AI approach

Chúng tôi xây domain AI products cho 3 verticals:

- **Edtech**: Learning behavior data → Adaptive tutoring models
- **Travel**: Booking patterns → Trip planning & pricing models
- **Marketing**: Campaign data → Content & analytics models

Mỗi vertical có pipeline riêng, model riêng, data flywheel riêng.

## Takeaway

Giá trị của AI enterprise không nằm ở model access (ai cũng có). Giá trị nằm ở domain data + domain expertise + continuous improvement loop.
    `,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
