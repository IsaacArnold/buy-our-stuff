import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/Layout";

const ProductGrid = styled.div``;

const Product = ({ data: { product } }) => {
  //   console.log(product);
  const image = getImage(product.image.asset.gatsbyImageData);
  return (
    <Layout>
      {/* SEO component */}
      <ProductGrid>
        <div>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.product_description}</p>
        </div>
        <GatsbyImage image={image} alt={product.name} />
      </ProductGrid>
    </Layout>
  );
};

export default Product;

export const query = graphql`
  query ($slug: String!) {
    product: sanityProduct(slug: { current: { eq: $slug } }) {
      name
      id
      price
      product_description
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
`;
