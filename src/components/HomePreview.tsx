"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

/* --- Animated counter --- */
function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [num, setNum] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    const dec = value % 1 !== 0;
    function tick(now: number) {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 4);
      setNum(dec ? (value * e).toFixed(2) : Math.round(value * e).toString());
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{prefix}{num}{suffix}</span>;
}

/* --- Stats bar --- */
const stats = [
  { value: 6, prefix: "", suffix: "+", label: "Năm hoạt động" },
  { value: 4, prefix: "", suffix: "", label: "Lĩnh vực chuyên sâu" },
  { value: 3, prefix: "", suffix: "", label: "Nền tảng sản phẩm" },
  { value: 2, prefix: "", suffix: "", label: "Ứng dụng trên Store" },
];

/* --- Platform cards --- */
const platforms = [
  {
    title: "AI Platform",
    description: "Nền tảng AI đa mô hình cho doanh nghiệp. Tích hợp agents, RAG và workflow automation trong một hệ thống duy nhất.",
    href: "/technology",
    color: "#7c3aed",
    large: true,
  },
  {
    title: "LLM Gateway",
    description: "Quản lý 100+ AI models qua một API. Tự động chọn model tối ưu theo chi phí và chất lượng.",
    href: "/technology",
    color: "#6366f1",
    large: false,
  },
  {
    title: "Domain AI Products",
    description: "Sản phẩm AI chuyên ngành: Edtech, Travel, Marketing. Mobile apps trên Google Play & App Store.",
    href: "/solutions",
    color: "#06b6d4",
    large: false,
  },
];

/* --- Social proof --- */
const proofPoints = [
  "6 năm phát triển, production-ready",
  "Kiến trúc domain-specific theo chuẩn Gartner 2026",
  "Mô hình Product + Service kết hợp",
];

export function HomePreview() {
  return (
    <>
      {/* Stats bar */}
      <section className="py-20 px-6 border-t border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="text-xs text-zinc-500 mt-2 uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platforms showcase */}
      <section className="py-32 lg:py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs text-[#7c3aed] uppercase tracking-widest mb-4 font-medium">Nền tảng</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] max-w-lg">
              Tiếp cận từ nền tảng
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {platforms.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={p.large ? "md:col-span-2" : ""}
              >
                <Link href={p.href} className="block group">
                  <div
                    className="card-glass rounded-2xl p-8 sm:p-10 relative overflow-hidden transition-all duration-400"
                    style={{ "--hover-c": `${p.color}30` } as React.CSSProperties}
                  >
                    {/* Subtle top-left glow */}
                    <div
                      className="absolute -top-12 -left-12 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ backgroundColor: p.color }}
                    />

                    <div className="relative">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                        <h3 className="text-lg sm:text-xl font-bold">{p.title}</h3>
                      </div>
                      <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
                        {p.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 mt-6 text-sm text-zinc-600 group-hover:text-zinc-300 transition-colors">
                        Tìm hiểu
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-16 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            {proofPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-3"
              >
                <svg className="w-4 h-4 text-[#7c3aed] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-zinc-400">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/[0.04] blur-[100px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Bước tiếp theo
            </h2>
            <p className="text-zinc-500 mb-10">
              Discovery call 30 phút · Đánh giá hiện trạng · Đề xuất roadmap
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Trao đổi với chúng tôi
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
