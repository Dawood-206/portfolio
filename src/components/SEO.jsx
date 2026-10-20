import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  image = "/og-image.png",
  path = "/",
}) {
  const siteName = "Muhammad Dawood";
  const fullTitle = title ? `${title} — ${siteName}` : siteName;
  const siteUrl = window.location.origin;
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}