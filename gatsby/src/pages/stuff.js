import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import CategoriesFilter from "../components/CategoriesFilter";

const StuffPage = ({ data, pageContext }) => {
  const products = data.products.nodes;
  return (
    <Layout>
      <h2>This is our stuff!</h2>
      <p>To view more details about an item, simply click the image.</p>
      <CategoriesFilter activeCategory={pageContext.topping} />
      <ProductList products={products} />
    </Layout>
  );
};

export default StuffPage;

export const query = graphql`
  query ProductQuery($categoryRegex: String) {
    products: allSanityProduct(
      filter: { categories: { elemMatch: { name: { regex: $categoryRegex } } } }
    ) {
      nodes {
        name
        id
        price
        product_description
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        categories {
          name
          id
        }
      }
    }
  }
`;
