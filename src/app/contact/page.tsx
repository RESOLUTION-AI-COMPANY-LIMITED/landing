import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ Resolution AI để trao đổi về Data & AI cho doanh nghiệp. Discovery call 30 phút.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Liên hệ — R.AI",
    description: "Trao đổi với Resolution AI về Data & AI transformation.",
    url: "https://resolutionai.vn/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
