export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Resolution AI",
    alternateName: "R.AI",
    url: "https://resolutionai.vn",
    email: "contact@resolutionai.vn",
    telephone: "+84822470465",
    foundingDate: "2019-01-05",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hà Nội",
      addressCountry: "VN",
    },
    sameAs: [],
    description:
      "Resolution AI thiết kế và phát triển nền tảng AI chuyên ngành cho doanh nghiệp Việt Nam.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Resolution AI",
    url: "https://resolutionai.vn",
    description: "Nền tảng AI chuyên ngành cho doanh nghiệp Việt Nam.",
    publisher: {
      "@type": "Organization",
      name: "Resolution AI",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostSchema({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    url: `https://resolutionai.vn/blog/${slug}`,
    author: {
      "@type": "Organization",
      name: "Resolution AI",
    },
    publisher: {
      "@type": "Organization",
      name: "Resolution AI",
      url: "https://resolutionai.vn",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
