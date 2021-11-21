const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve("src/templates/Product.js");
  const categoryTemplate = path.resolve("src/pages/stuff.js");

  const { data } = await graphql(`
    query {
      products: allSanityProduct {
        totalCount
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

  // CREATE A PAGE FOR EACH PRODUCT
  data.products.nodes.forEach((product) => {
    createPage({
      path: `product/${product.slug.current}`,
      component: productTemplate,
      context: {
        slug: product.slug.current,
      },
    });
  });

  // PAGINATION
  const pageSize = 9;
  const pageCount = Math.ceil(data.products.totalCount / pageSize);
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/stuff/${i + 1}`,
      component: path.resolve("./src/pages/stuff.js"),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });

  // CREATE A PAGE FOR EACH CATEGORY
  data.categories.nodes.forEach((category) => {
    createPage({
      path: `stuff/${category.name}`,
      component: categoryTemplate,
      context: {
        category: category.name,
        categoryRegex: `/${category.name}/i`,
      },
    });
  });
};
