import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import CategoriesFilter from "../components/CategoriesFilter";
import styled from "styled-components";
import SEO from "../components/SEO";
import seoImage from "../assets/images/SEO-img-GG.png";
import Pagination from "../components/Pagination";

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
      <SEO
        title={
          pageContext.category
            ? `Goods for your ${pageContext.category}`
            : "All Goods"
        }
        image={seoImage}
      />
      <StuffHeading>
        These are our good goods <span>🛍️</span>
      </StuffHeading>
      <StuffParagraph>
        To view more details about an item, simply click the image.
      </StuffParagraph>
      <CategoriesFilter activeCategory={pageContext.category} />
      <Pagination
        pageSize={9}
        totalCount={data.products.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/stuff"
      />
      <ProductList products={products} />
    </Layout>
  );
};

export default StuffPage;

export const query = graphql`
  query ProductQuery(
    $skip: Int = 0
    $pageSize: Int = 9
    $categoryRegex: String
  ) {
    products: allSanityProduct(
      limit: $pageSize
      skip: $skip
      filter: { categories: { elemMatch: { name: { regex: $categoryRegex } } } }
    ) {
      totalCount
      nodes {
        name
        id
        price
        product_description
        slug {
          current
        }
        mainImage {
          asset {
            gatsbyImageData(placeholder: BLURRED, fit: SCALE)
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

// layout: CONSTRAINED;
