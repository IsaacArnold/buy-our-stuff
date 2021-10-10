require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Buy Our Stuff",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: true,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "bk6rpdoy",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
  ],
};
