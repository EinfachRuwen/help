export default {
  github: 'https://github.com/byZeroOfficial/help',
  docsRepositoryBase: 'hhttps://github.com/byZeroOfficial/help/blob/master',
  titleSuffix: ' – help.byzero.dev',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">help.byzero.dev</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Get help
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Tips and more" />
      <meta name="og:description" content="Tips and more" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://byzero.dev/image/me.gif" />
      <meta name="twitter:site:domain" content="help.byzero.dev" />
      <meta name="twitter:url" content="https://help.byzero.dev" />
      <meta name="og:title" content="help.byzero.dev - Created by byZero" />
      <meta name="og:image" content="https://byzero.dev/image/me.gif" />
      <meta name="apple-mobile-web-app-title" content="help.byzero.dev" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: false,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © byZero.</>,
  unstable_faviconGlyph: '👋',
}
