const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve("src/templates/Product.js");

  const { data } = await graphql(`
    query {
      products: allSanityProduct {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.products.nodes.forEach((product) => {
    createPage({
      path: `product/${product.slug.current}`,
      component: productTemplate,
      context: {
        slug: product.slug.current,
      },
    });
  });
};
