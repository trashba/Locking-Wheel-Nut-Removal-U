import type { NextPage } from "next";
import Head from "next/head";

import seoData from "@data/seo";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  type?: "article" | "website";
  createdAt?: string;
  updatedAt?: string;
};

const Seo: NextPage<Props> = ({
  title,
  description = seoData.description,
  image = seoData.image,
  type = "website",
  createdAt = new Date().toISOString(),
  updatedAt = new Date().toISOString(),
}) => {
  const seoTitle = `${title ? `${title} - ` : ""}${seoData.title}`;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{seoTitle}</title>
      <meta property="name" content={seoTitle} />
      <meta name="description" content={description} />
      <meta property="image" content={image} />

      <meta name="application-name" content={seoData.title} />
      <meta name="apple-mobile-web-app-title" content={seoData.title} />

      <meta property="og:title" content={seoTitle} />
      <meta property="og:name" content={seoTitle} />
      <meta property="og:site_name" content={seoTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:published_time" content={createdAt} />
      <meta property="og:modified_time" content={updatedAt} />

      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:site" content={description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image:src" content={image} />
    </Head>
  );
};

export default Seo;
