module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["external-content.duckduckgo.com", "cdn.shopify.com"],
  },
  env: {
    FOOTER_DISCOVER_MENU: "footer-discover-menu",
    FOOTER_SHOP_MENU: "footer-shop-menu",
    FOOTER_CONNECT_MENU: "footer-connect-menu",
    HEADER_MENU: "header-menu",
  },
  async headers() {
    const headers = [];
    if (process.env.NO_INDEX) {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
        source: '/:path*',
      });
    }
    return headers;
  },
  async redirects() {
    return [
      {
        source: '/editorial/:articleHandle*',
        destination: '/blog/news/articles/:articleHandle*',
        permanent: true,
      },
      {
        source: '/product/:productHandle*',
        destination: '/products/:productHandle*',
        permanent: true,
      },
      {
        source: '/our-story',
        destination: '/pages/our-story',
        permanent: true,
      }
    ]
  },
};
