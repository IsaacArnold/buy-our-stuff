module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Buy Our Stuff",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        // ssr: false
        displayName: true,
        // minify: false
      },
    },
  ],
};
