require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Buy Our Stuff",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: true,
      },
    },
  ],
};
