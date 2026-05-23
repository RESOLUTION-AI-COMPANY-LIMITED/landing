import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogList } from "@/components/BlogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights về Data, AI và Cloud từ team Resolution AI. Chiến lược, kỹ thuật và xu hướng.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — R.AI",
    description: "Insights về Data, AI và Cloud từ thực tế triển khai.",
    url: "https://resolutionai.vn/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
