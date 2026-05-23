"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="hero-bg" />
      <div className="dot-grid" />
      <div className="noise" />

      <div className="relative text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
          <span className="text-xs text-zinc-400 tracking-wide">Data & AI First · Since 2019</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[0.9] mb-8"
        >
          Nền tảng AI
          <br />
          <span className="gradient-text">chuyên ngành</span>
          <br />
          cho doanh nghiệp
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg text-zinc-500 max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Từ data infrastructure đến production AI —
          chúng tôi thiết kế, triển khai và vận hành.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-primary">
            Trao đổi với chúng tôi
          </Link>
          <Link
            href="/technology"
            className="px-8 py-3 text-sm text-zinc-400 hover:text-white border border-white/[0.08] hover:border-white/[0.15] rounded-lg transition-all"
          >
            Tìm hiểu công nghệ →
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/[0.1] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
