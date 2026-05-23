import { Header } from "@/components/Header";
import { Verticals } from "@/components/Verticals";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giải pháp",
  description: "AI chuyên ngành cho Edtech, Travel, Marketing và Cloud & Data. Mỗi vertical có domain model và data flywheel riêng.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Giải pháp — R.AI",
    description: "AI chuyên ngành cho Edtech, Travel, Marketing và Cloud & Data infrastructure.",
    url: "https://resolutionai.vn/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <Verticals />
      </main>
      <Footer />
    </>
  );
}
