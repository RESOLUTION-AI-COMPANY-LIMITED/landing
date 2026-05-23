import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomePreview } from "@/components/HomePreview";
import { Footer } from "@/components/Footer";
import { OrganizationSchema, WebsiteSchema } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <Header />
      <main>
        <Hero />
        <HomePreview />
      </main>
      <Footer />
    </>
  );
}
