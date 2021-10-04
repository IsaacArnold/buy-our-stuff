import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import CategoriesFilter from "../components/CategoriesFilter";
import styled from "styled-components";

const StuffHeading = styled.h2`
  margin-bottom: 0;
`;

const StuffParagraph = styled.p`
  margin-bottom: 2rem;
`;

const StuffPage = ({ data, pageContext }) => {
  const products = data.products.nodes;
  return (
    <Layout>
      <StuffHeading>This is our stuff!</StuffHeading>
      <StuffParagraph>
        To view more details about an item, simply click the image.
      </StuffParagraph>
      <CategoriesFilter activeCategory={pageContext.category} />
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
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              width: 300
              height: 200
            )
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
