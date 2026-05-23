"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { posts } from "@/lib/posts";

export function BlogList() {
  return (
    <section className="py-32 lg:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs text-[#7c3aed] uppercase tracking-widest mb-4 font-medium">Blog</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em]">
            Insights
          </h1>
          <p className="text-zinc-500 mt-4">Về Data, AI và Cloud — từ thực tế triển khai.</p>
        </motion.div>

        <div className="space-y-2">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <article className="py-8 border-b border-white/[0.04] group-hover:border-white/[0.1] transition-colors">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs text-[#7c3aed] font-medium">{post.tag}</span>
                    <span className="text-xs text-zinc-600">{post.date}</span>
                    <span className="text-xs text-zinc-600">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold group-hover:text-[#a855f7] transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
