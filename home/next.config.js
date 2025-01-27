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
        source: "/aboot",
        destination: "https://planetscale-com.vercel.app/about",
      },
    ];
  },
};
