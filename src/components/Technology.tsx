"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "AI Platform",
    description: "Nền tảng AI đa mô hình cho doanh nghiệp. Tích hợp agents, RAG và workflow automation trong một hệ thống duy nhất.",
    tags: ["Multi-Agent", "RAG", "Workflows", "Knowledge Base"],
    links: [{ label: "oneair.vn", href: "https://oneair.vn" }, { label: "oneair.asia", href: "https://oneair.asia" }],
    size: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    title: "LLM Gateway",
    description: "100+ models. Smart routing. -60% cost.",
    tags: ["Routing", "Cost Control", "Observability"],
    size: "sm:col-span-1 lg:col-span-1",
    featured: false,
  },
  {
    title: "Domain AI",
    description: "Edtech · Travel · Marketing · Mobile",
    tags: ["Fine-tuned", "Data Flywheel"],
    size: "sm:col-span-1 lg:col-span-1",
    featured: false,
  },
  {
    title: "Cloud & Data",
    description: "AWS data platform. AI infra. Migration. FinOps.",
    tags: ["Bedrock", "SageMaker", "Lake", "Terraform"],
    size: "sm:col-span-2 lg:col-span-2",
    featured: false,
  },
];

export function Technology() {
  return (
    <section id="technology" className="relative py-32 lg:py-40 px-6">
      {/* Section glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-purple-500/[0.04] top-0 -right-40" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs text-[#7c3aed] uppercase tracking-widest mb-4 font-medium">Công nghệ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Những gì chúng tôi
            <br />
            xây dựng
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`${card.featured ? "card-feature" : "card-glass"} rounded-2xl p-8 flex flex-col justify-between min-h-[200px] ${card.size}`}
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{card.description}</p>
                {"links" in card && card.links && (
                  <div className="flex gap-3 mt-4">
                    {(card.links as { label: string; href: string }[]).map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#7c3aed] hover:text-white border border-[#7c3aed]/20 hover:border-[#7c3aed]/40 px-3 py-1 rounded-full transition-colors"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs text-zinc-500 rounded-full bg-white/[0.03] border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-32" />
    </section>
  );
}
