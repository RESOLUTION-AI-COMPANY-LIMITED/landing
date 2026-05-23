"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const verticals = [
  {
    id: "edtech",
    label: "Edtech",
    headline: "AI Adaptive Learning",
    bullets: ["Cá nhân hóa lộ trình theo level", "Tạo content 15 phút thay vì 4 giờ", "Đánh giá năng lực real-time"],
    stat: "-94%",
    statLabel: "thời gian tạo content",
    color: "#a855f7",
  },
  {
    id: "travel",
    label: "Travel",
    headline: "AI Trip Planning",
    bullets: ["Lập kế hoạch trip theo sở thích", "Dynamic pricing real-time", "Booking 24/7 đa ngôn ngữ"],
    stat: "24/7",
    statLabel: "hỗ trợ đặt chỗ tự động",
    color: "#6366f1",
  },
  {
    id: "marketing",
    label: "Marketing",
    headline: "AI Content & Campaign",
    bullets: ["Tăng output gấp 3 lần", "Tự động hóa từ brief đến delivery", "Predictive analytics"],
    stat: "3x",
    statLabel: "năng suất trên mỗi người",
    color: "#06b6d4",
  },
  {
    id: "cloud",
    label: "Cloud & Data",
    headline: "AWS Data Platform",
    bullets: ["Data lake / lakehouse architecture", "Bedrock + SageMaker infrastructure", "Tối ưu chi phí cloud -38%"],
    stat: "-38%",
    statLabel: "chi phí cloud",
    color: "#10b981",
  },
  {
    id: "mobile",
    label: "Mobile App",
    headline: "AI-Powered Mobile Apps",
    bullets: ["iOS (App Store) & Android (Google Play)", "On-device AI & personalization", "Cross-platform React Native"],
    stat: "2",
    statLabel: "nền tảng (iOS + Android)",
    color: "#f59e0b",
  },
];

export function Verticals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to horizontal translate (0% → -80% for 5 cards)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section className="relative">
      {/* Page header */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-[#7c3aed] uppercase tracking-widest mb-4 font-medium">Giải pháp</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-4">
              Lĩnh vực ứng dụng
            </h1>
            <p className="text-lg text-zinc-500 max-w-xl">
              AI chuyên ngành với data flywheel riêng cho từng vertical.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div ref={containerRef} className="h-[280vh] relative">
        <div className="sticky top-14 h-[calc(100vh-3.5rem)] flex items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-5 pl-6 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
          >
            {verticals.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="w-[80vw] sm:w-[60vw] lg:w-[36vw] shrink-0 rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[55vh] relative overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, ${item.color}0c 0%, #09090b 50%)`,
                  border: `1px solid ${item.color}15`,
                }}
              >
                {/* Glow */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] opacity-25"
                  style={{ backgroundColor: item.color }}
                />

                {/* Top content */}
                <div className="relative">
                  <div className="flex items-center gap-2.5 mb-6">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}60` }}
                    />
                    <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
                    {item.headline}
                  </h3>
                  <ul className="space-y-2.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-zinc-400">
                        <span className="w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stat */}
                <div className="relative mt-10">
                  <p
                    className="text-5xl sm:text-6xl font-bold tracking-tight"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, #ffffff)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.stat}
                  </p>
                  <p className="text-xs text-zinc-600 mt-2">{item.statLabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
