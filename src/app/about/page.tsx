import { Header } from "@/components/Header";
import { WhyRAI } from "@/components/WhyRAI";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về R.AI",
  description: "Resolution AI — Data & AI First Company từ 2019. 6 năm R&D xây dựng nền tảng AI chuyên ngành cho doanh nghiệp Việt Nam.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Về R.AI — Resolution AI",
    description: "Data & AI First Company. 6 năm phát triển platform và domain expertise.",
    url: "https://resolutionai.vn/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <WhyRAI />
      </main>
      <Footer />
    </>
  );
}
