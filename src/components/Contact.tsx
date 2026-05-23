"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`[R.AI] Liên hệ từ ${name}`);
    const body = encodeURIComponent(`Họ tên: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:contact@resolutionai.vn?subject=${subject}&body=${body}`, "_self");
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact" className="relative py-32 lg:py-40 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs text-[#7c3aed] uppercase tracking-widest mb-4 font-medium">Liên hệ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4">
            Bắt đầu với Data & AI
          </h2>
          <p className="text-lg text-zinc-500">
            Discovery call 30 phút — trao đổi thẳng với team kỹ thuật.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-zinc-400 mb-1.5">Họ tên</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#7c3aed]/50 transition-colors"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-zinc-400 mb-1.5">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#7c3aed]/50 transition-colors"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-zinc-400 mb-1.5">Bạn cần hỗ trợ gì?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#7c3aed]/50 transition-colors resize-none"
                placeholder="VD: Chúng tôi muốn triển khai AI cho customer support..."
              />
            </div>
            <button type="submit" className="btn-primary w-full text-center">
              Gửi yêu cầu
            </button>
            {sent && (
              <p className="text-sm text-green-400 text-center">Đã mở email client. Gửi để hoàn tất!</p>
            )}
          </motion.form>

          {/* Right: contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm text-zinc-500 mb-2">Email</p>
              <a href="mailto:contact@resolutionai.vn" className="text-lg text-white hover:text-[#7c3aed] transition-colors">
                contact@resolutionai.vn
              </a>
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-2">Điện thoại</p>
              <a href="tel:+84822470465" className="text-lg text-white hover:text-[#7c3aed] transition-colors">
                082 2470465
              </a>
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-2">Địa chỉ</p>
              <p className="text-zinc-300">Hà Nội, Việt Nam</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500 mb-2">Công ty</p>
              <p className="text-zinc-300">CÔNG TY TNHH RESOLUTION AI</p>
              <p className="text-sm text-zinc-600 mt-1">MST: 0108572098</p>
            </div>
            <div className="pt-6 border-t border-white/[0.06]">
              <p className="text-sm text-zinc-500 mb-3">Quy trình</p>
              <ol className="space-y-2 text-sm text-zinc-400">
                <li className="flex gap-3">
                  <span className="text-[#7c3aed] font-bold">1.</span>
                  Discovery call 30 phút
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7c3aed] font-bold">2.</span>
                  Đánh giá hiện trạng Data & AI
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7c3aed] font-bold">3.</span>
                  Đề xuất roadmap cụ thể
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
