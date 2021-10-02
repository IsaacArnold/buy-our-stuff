const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve("src/templates/Product.js");
  const categoryTemplate = path.resolve("src/pages/stuff.js");

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
      categories: allSanityCategory {
        nodes {
          name
          id
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

  data.categories.nodes.forEach((category) => {
    createPage({
      path: `category/${category.name}`,
      component: categoryTemplate,
      context: {
        category: category.name,
        categoryRegex: `/${category.name}/i`,
      },
    });
  });
};
