import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "R.AI — Nền tảng AI chuyên ngành cho doanh nghiệp",
    template: "%s | R.AI",
  },
  description:
    "Resolution AI thiết kế và phát triển nền tảng AI chuyên ngành cho doanh nghiệp Việt Nam. AI Platform, LLM Gateway, Domain AI Products, Cloud & Data Infrastructure.",
  keywords: [
    "AI platform Việt Nam",
    "LLM Gateway",
    "AI consulting",
    "Data AI First",
    "AI Platform",
    "Resolution AI",
    "AI Edtech",
    "AI Marketing",
    "AI Travel",
    "AWS AI Data",
    "AI agents",
    "domain AI",
    "nền tảng AI doanh nghiệp",
  ],
  authors: [{ name: "Resolution AI", url: "https://resolutionai.vn" }],
  creator: "Resolution AI",
  metadataBase: new URL("https://resolutionai.vn"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "R.AI — Nền tảng AI chuyên ngành cho doanh nghiệp",
    description:
      "Thiết kế từ data, triển khai đến production. AI Platform, LLM Gateway, Domain AI.",
    url: "https://resolutionai.vn",
    siteName: "Resolution AI",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R.AI — Data & AI First",
    description: "Nền tảng AI chuyên ngành cho doanh nghiệp Việt Nam.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${GeistSans.className} scroll-smooth`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
