import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface LegalPageProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function LegalPage({ title, subtitle, children }: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="pt-14">
        <div className="max-w-3xl mx-auto py-32 px-6">
          <p className="text-xs text-zinc-500 mb-4">
            Cập nhật lần cuối: 23/05/2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {title}
          </h1>
          <p className="text-zinc-400 text-lg mb-12">{subtitle}</p>
          <div className="space-y-8 text-zinc-400 text-[15px] leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h4 className="text-white font-semibold text-base mb-3">{title}</h4>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
