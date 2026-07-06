// Structured Data / Schema.org markup utilities

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Arun Vignesh",
  "url": "https://www.arunvignesh.my",
  "logo": "https://www.arunvignesh.my/favicon.png",
  "image": "https://www.arunvignesh.my/og-image.svg",
  "description": "Full-Stack Web Developer specializing in React, TypeScript, Node.js, and modern web technologies",
  "email": "shankar72ind@gmail.com",
  "jobTitle": "Full-Stack Web Developer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://github.com/Arun270647",
    "https://www.linkedin.com/in/arun-vignesh-v/",
    "https://www.instagram.com/_arun._.06/"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "BCA Student"
  },
  "knowsAbout": [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Full-Stack Development",
    "Web Development",
    "Firebase",
    "Tailwind CSS",
    "AI/ML",
    "TensorFlow.js"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Arun Vignesh Portfolio",
  "url": "https://www.arunvignesh.my",
  "description": "Portfolio website of Arun Vignesh - Full-Stack Web Developer",
  "publisher": {
    "@type": "Person",
    "name": "Arun Vignesh"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.arunvignesh.my/blog?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const webPageSchema = (props: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": props.name,
  "description": props.description,
  "url": props.url,
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://www.arunvignesh.my"
  },
  "author": {
    "@type": "Person",
    "name": "Arun Vignesh"
  },
  ...(props.datePublished && { "datePublished": props.datePublished }),
  ...(props.dateModified && { "dateModified": props.dateModified })
});

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Arun Vignesh",
    "alternateName": "Arun Vignesh V",
    "description": "Full-Stack Web Developer & BCA student passionate about building digital experiences",
    "image": "https://www.arunvignesh.my/og-image.svg",
    "url": "https://www.arunvignesh.my",
    "sameAs": [
      "https://github.com/Arun270647",
      "https://www.linkedin.com/in/arun-vignesh-v/"
    ]
  }
};

export const portfolioSchema = (projects: Array<{
  name: string;
  description: string;
  url: string;
  image?: string;
  technologies?: string[];
}>) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": projects.map((project, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "CreativeWork",
      "name": project.name,
      "description": project.description,
      "url": project.url,
      ...(project.image && { "image": project.image }),
      "author": {
        "@type": "Person",
        "name": "Arun Vignesh"
      },
      ...(project.technologies && {
        "keywords": project.technologies.join(", ")
      })
    }
  }))
});

export const blogPostSchema = (post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.description,
  "url": post.url,
  "datePublished": post.datePublished,
  "dateModified": post.dateModified || post.datePublished,
  ...(post.image && { "image": post.image }),
  "author": {
    "@type": "Person",
    "name": "Arun Vignesh",
    "url": "https://www.arunvignesh.my"
  },
  "publisher": {
    "@type": "Person",
    "name": "Arun Vignesh",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.arunvignesh.my/favicon.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": post.url
  },
  ...(post.keywords && { "keywords": post.keywords.join(", ") })
});

export const articleSchema = (article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "url": article.url,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  ...(article.image && { "image": article.image }),
  "author": {
    "@type": "Person",
    "name": "Arun Vignesh",
    "url": "https://www.arunvignesh.my"
  },
  "publisher": {
    "@type": "Person",
    "name": "Arun Vignesh"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  },
  ...(article.keywords && { "keywords": article.keywords.join(", ") })
});
