"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "Về R.AI" },
  { href: "/solutions", label: "Giải pháp" },
  { href: "/technology", label: "Công nghệ" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          R<span className="text-[#7c3aed]">.</span>AI
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname === l.href ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex px-4 py-1.5 bg-white text-black text-sm font-medium rounded-md hover:bg-zinc-200 transition-colors"
        >
          Liên hệ
        </Link>

        <button className="md:hidden text-zinc-400" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden px-6 pb-4 space-y-3 border-t border-white/[0.06] pt-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block text-sm text-zinc-400 hover:text-white" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
