"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    question: "R.AI khác gì so với thuê AI engineer in-house?",
    answer:
      "Thay vì tuyển dụng, đào tạo và duy trì đội ngũ AI engineer (chi phí trung bình 50-100 triệu/người/tháng), R.AI cung cấp đội ngũ chuyên gia đã có kinh nghiệm triển khai hàng chục dự án AI thực tế. Bạn tiếp cận ngay năng lực AI cấp enterprise — từ MLOps, LLM integration đến data pipeline — mà không cần lo về turnover, training hay giữ chân nhân sự. Chúng tôi hoạt động như AI team mở rộng của bạn, linh hoạt scale up/down theo nhu cầu dự án.",
  },
  {
    question: "Data & AI First cụ thể là gì?",
    answer:
      "Data & AI First là triết lý thiết kế sản phẩm mà R.AI theo đuổi: mọi giải pháp được xây dựng với dữ liệu và AI là nền tảng cốt lõi, không phải tính năng bổ sung. Điều này có nghĩa: kiến trúc hệ thống được thiết kế để thu thập, lưu trữ và xử lý dữ liệu hiệu quả ngay từ đầu; các quyết định sản phẩm dựa trên phân tích dữ liệu; và AI/ML được tích hợp tự nhiên vào workflow thay vì ghép nối sau.",
  },
  {
    question: "Chi phí dịch vụ R.AI như thế nào?",
    answer:
      "Chi phí tùy thuộc vào scope và mô hình hợp tác. Với dịch vụ nền tảng (AI Platform, LLM Gateway), chúng tôi áp dụng mô hình pay-as-you-go hoặc subscription theo tier sử dụng. Với dịch vụ tư vấn và triển khai dự án, chi phí được báo giá dựa trên yêu cầu cụ thể sau buổi discovery miễn phí. Nhìn chung, khách hàng tiết kiệm 40-60% so với tự xây dựng đội ngũ AI nội bộ khi tính tổng chi phí sở hữu (TCO).",
  },
  {
    question: "LLM Gateway tiết kiệm chi phí bằng cách nào?",
    answer:
      "LLM Gateway tối ưu chi phí thông qua nhiều cơ chế: intelligent routing tự động chọn model phù hợp nhất (không phải lúc nào cũng cần GPT-4 cho mọi task); semantic caching tránh gọi lại API cho các query tương tự; request batching gom nhiều request nhỏ; và prompt optimization giảm token usage. Trung bình, khách hàng giảm 30-50% chi phí LLM so với gọi trực tiếp API provider, đồng thời có thêm lợi ích về monitoring, fallback và compliance.",
  },
  {
    question: "Dự án thường mất bao lâu?",
    answer:
      "Tùy phạm vi và độ phức tạp: PoC/Prototype thường hoàn thành trong 2-4 tuần; MVP với tính năng AI cơ bản từ 6-10 tuần; dự án enterprise full-scale từ 3-6 tháng. Chúng tôi áp dụng agile delivery với sprint 2 tuần, demo liên tục để bạn thấy tiến độ thực. Đặc biệt, với các use case phổ biến (chatbot, document processing, recommendation), chúng tôi có accelerator templates giúp rút ngắn thời gian triển khai đáng kể.",
  },
  {
    question: "Data của tôi có an toàn không?",
    answer:
      "Bảo mật dữ liệu là ưu tiên hàng đầu. Chúng tôi áp dụng: mã hóa end-to-end (TLS 1.3 in transit, AES-256 at rest); triển khai trên hạ tầng đạt chứng nhận ISO 27001; kiểm soát truy cập theo nguyên tắc least privilege; không sử dụng dữ liệu khách hàng để train model chung; hỗ trợ triển khai on-premise hoặc private cloud nếu yêu cầu. Với LLM Gateway, dữ liệu đi qua hệ thống R.AI nhưng không được lưu trữ vĩnh viễn — bạn kiểm soát hoàn toàn data retention policy.",
  },
  {
    question: "R.AI có làm việc với doanh nghiệp nhỏ không?",
    answer:
      "Có. Chúng tôi phục vụ doanh nghiệp mọi quy mô. Với SME, chúng tôi cung cấp các gói dịch vụ tiết kiệm: sử dụng shared infrastructure qua AI Platform, LLM Gateway với tier phù hợp, và tư vấn theo giờ thay vì hợp đồng dài hạn. Nhiều startup và doanh nghiệp nhỏ bắt đầu với gói cơ bản, sau đó mở rộng khi nhu cầu AI tăng. Buổi tư vấn đầu tiên miễn phí — chúng tôi sẽ đánh giá xem AI có thể tạo giá trị ở đâu trong business của bạn.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="pt-14">
        <div className="max-w-3xl mx-auto py-32 px-6">
          <p className="text-sm font-medium text-[#7c3aed] mb-3">FAQs</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Câu hỏi thường gặp
          </h1>
          <p className="text-zinc-400 text-lg mb-12">
            Những thắc mắc phổ biến về dịch vụ, chi phí và cách làm việc với
            R.AI.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/[0.06] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-[15px] font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-zinc-500 text-xl flex-shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
