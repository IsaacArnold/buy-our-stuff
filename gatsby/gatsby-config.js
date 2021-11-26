require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://goodgoods.digital/",
    title: "Good Goods",
    description:
      "Check out our awesome goods for sale. New, pre-loved - all in great condition!",
    image: "./src/assets/images/SEO-img-GG.png",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-scroll-reveal",
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 0%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
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
      },
    },
  ],
};
