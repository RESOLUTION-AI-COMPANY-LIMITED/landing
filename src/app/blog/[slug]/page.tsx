import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogDetail } from "@/components/BlogDetail";
import { BlogPostSchema } from "@/components/StructuredData";
import { posts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://resolutionai.vn/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <BlogPostSchema title={post.title} description={post.excerpt} date={post.date} slug={post.slug} />
      <Header />
      <main className="pt-14">
        <BlogDetail post={post} />
      </main>
      <Footer />
    </>
  );
}
