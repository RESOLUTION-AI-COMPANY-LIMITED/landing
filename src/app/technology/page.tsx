import { Header } from "@/components/Header";
import { Technology } from "@/components/Technology";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Công nghệ",
  description: "AI Platform, LLM Gateway, Domain AI Products — nền tảng AI chuyên ngành do R.AI phát triển.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Công nghệ — R.AI",
    description: "AI Platform, LLM Gateway, Domain AI Products và Cloud & Data Infrastructure.",
    url: "https://resolutionai.vn/technology",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <Technology />
      </main>
      <Footer />
    </>
  );
}
