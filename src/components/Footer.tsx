import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              R<span className="text-[#7c3aed]">.</span>AI
            </Link>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-zinc-500">
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1">Khám phá</p>
            <Link href="/technology" className="hover:text-white transition-colors">Công nghệ</Link>
            <Link href="/solutions" className="hover:text-white transition-colors">Giải pháp</Link>
            <Link href="/about" className="hover:text-white transition-colors">Về R.AI</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Liên hệ</Link>
          </nav>
          <nav className="flex flex-col gap-2 text-sm text-zinc-500">
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1">Pháp lý</p>
            <Link href="/terms" className="hover:text-white transition-colors">Điều khoản</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Bảo mật</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="/license" className="hover:text-white transition-colors">Giấy phép</Link>
            <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.04]">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Resolution AI Company Limited · MST 0108572098
          </p>
          <p className="text-xs text-zinc-700">
            contact@resolutionai.vn · 082 2470465
          </p>
        </div>
      </div>
    </footer>
  );
}
