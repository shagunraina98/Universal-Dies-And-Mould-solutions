export default function Head() {
  const title = 'Universal Dies & Mould Solutions — Precision Dies & Moulds';
  const description = 'Universal Dies & Mould Solutions provides high‑precision dies, moulds, and custom tooling for manufacturing efficiency, reliability, and repeatability.';
  const siteUrl = 'https://www.universaldies.example'; // Placeholder; replace with real domain
  const themeColorLight = '#1e3a8a';
  const themeColorDark = '#0f172a';

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5" />
      <meta name="theme-color" content={themeColorLight} media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content={themeColorDark} media="(prefers-color-scheme: dark)" />

      {/* Favicon / App Icons */}
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Universal Dies & Mould Solutions" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}/logo.svg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/logo.svg`} />

      {/* SEO Basics */}
      <meta name="robots" content="index,follow" />
      <meta name="author" content="Universal Dies & Mould Solutions" />
    </>
  );
}
