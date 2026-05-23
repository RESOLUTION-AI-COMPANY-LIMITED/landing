"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* --- Counter --- */
function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [num, setNum] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
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

/* --- Data --- */
const stats = [
  { value: 2.59, prefix: "$", suffix: "T", label: "AI spending 2026", sub: "Gartner" },
  { value: 2, prefix: "", suffix: "%", label: "Tạo giá trị thực", sub: "Chỉ 2% dự án AI thành công" },
  { value: 6, prefix: "", suffix: " năm", label: "R&D tích lũy", sub: "Platform & Domain" },
];

const milestones = [
  { year: "2019", label: "Thành lập", active: false },
  { year: "2022", label: "AI Platform", active: false },
  { year: "2026", label: "Data & AI First", active: true },
];

const team = [
  { name: "Nguyễn Minh Đức", role: "CEO & Co-founder", focus: "AI Strategy, AWS Architecture, Product" },
];

export function WhyRAI() {
  return (
    <section id="why" className="relative py-32 lg:py-40 px-6">
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-500/[0.03] -bottom-40 -left-40" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-xs text-[#7c3aed] uppercase tracking-widest mb-4 font-medium">Về R.AI</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-6">
            Resolution AI
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            R.AI được thành lập năm 2019 với sứ mệnh xây dựng các nền tảng Data & AI chuyên ngành
            cho doanh nghiệp Việt Nam. Sau 6 năm R&D và tích lũy domain expertise, năm 2026
            chúng tôi chuyển đổi chiến lược thành Data & AI First Company — mô hình kết hợp
            sản phẩm platform với dịch vụ tư vấn triển khai.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-5 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass rounded-2xl p-8"
          >
            <p className="text-xs text-[#7c3aed] uppercase tracking-widest mb-3 font-medium">Tầm nhìn</p>
            <p className="text-zinc-300 leading-relaxed">
              Trở thành công ty thiết kế và phát triển nền tảng AI chuyên ngành hàng đầu Việt Nam —
              nơi mọi sản phẩm được thiết kế với dữ liệu làm nền, AI làm lõi,
              và giá trị kinh doanh đo được làm đích đến.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-glass rounded-2xl p-8"
          >
            <p className="text-xs text-[#7c3aed] uppercase tracking-widest mb-3 font-medium">Sứ mệnh</p>
            <p className="text-zinc-300 leading-relaxed">
              Giúp doanh nghiệp Việt Nam đi đúng thứ tự: Data → AI → Business Value.
              Từ data infrastructure đến production AI — chúng tôi thiết kế, triển khai và vận hành.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-8 mb-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <p className="text-5xl sm:text-6xl font-bold tracking-tight gradient-text">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="text-base text-zinc-300 mt-4">{s.label}</p>
              <p className="text-sm text-zinc-600 mt-1">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative pt-8 mb-24"
        >
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
          <div className="flex justify-between max-w-lg mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="text-center"
              >
                <div className={`w-3 h-3 rounded-full mx-auto mb-5 relative z-10 ${
                  m.active ? "bg-[#7c3aed] shadow-[0_0_12px_rgba(124,58,237,0.5)]" : "bg-zinc-700"
                }`} />
                <p className={`text-xl font-bold ${m.active ? "text-white" : "text-zinc-400"}`}>{m.year}</p>
                <p className="text-sm text-zinc-600 mt-1">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-[#7c3aed] uppercase tracking-widest mb-6 font-medium">Đội ngũ</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member) => (
              <div key={member.name} className="card-glass rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center text-sm font-bold text-[#7c3aed] mb-4">
                  {member.name.split(" ").map(w => w[0]).join("").slice(-2)}
                </div>
                <p className="font-bold text-white">{member.name}</p>
                <p className="text-sm text-zinc-500 mt-1">{member.role}</p>
                <p className="text-xs text-zinc-600 mt-2">{member.focus}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
