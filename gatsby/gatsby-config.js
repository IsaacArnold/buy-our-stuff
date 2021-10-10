require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Buy Our Stuff",
    description:
      "Browse through the items we have for sale and contact us if anything interests you!",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
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
