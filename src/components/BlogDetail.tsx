"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Post } from "@/lib/posts";

function renderMarkdown(content: string) {
  // Simple markdown-like renderer for headings, paragraphs, lists
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line === "") {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold mt-12 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="space-y-2 my-4 ml-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-zinc-300">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else {
      elements.push(
        <p key={i} className="text-zinc-400 leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      );
    }
    i++;
  }

  return elements;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

export function BlogDetail({ post }: { post: Post }) {
  return (
    <section className="py-32 lg:py-40 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <Link href="/blog" className="text-sm text-zinc-600 hover:text-white transition-colors">
            ← Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs text-[#7c3aed] font-medium">{post.tag}</span>
            <span className="text-xs text-zinc-600">{post.date}</span>
            <span className="text-xs text-zinc-600">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed border-b border-white/[0.06] pb-10">
            {post.excerpt}
          </p>
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-10 prose-custom"
        >
          {renderMarkdown(post.content)}
        </motion.article>

        {/* CTA */}
        <div className="mt-20 pt-10 border-t border-white/[0.06] text-center">
          <p className="text-zinc-500 mb-6">Muốn áp dụng cho doanh nghiệp?</p>
          <Link href="/contact" className="btn-primary inline-flex">
            Trao đổi với R.AI
          </Link>
        </div>
      </div>
    </section>
  );
}
