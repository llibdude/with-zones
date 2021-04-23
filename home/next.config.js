const { BLOG_URL } = process.env;

module.exports = {
  rewrites() {
    return [
      {
        source: "/blog",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_URL}/blog/:path*`,
      },
      {
        source: "/about",
        destination: "https://planetscale.com/about",
      },
    ];
  },
};
