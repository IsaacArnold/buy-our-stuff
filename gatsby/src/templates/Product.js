import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/Layout";

const ProductGrid = styled.div`
  .individual-product-information {
    width: 85%;
    margin: auto;
    max-width: 615px;
  }
  .gatsby-image-wrapper {
    max-width: 750px;
  }
  .contact-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    max-width: 370px;
    margin: 30px auto;
    text-decoration: none;
    background-color: var(--red);
    color: #fff;
    padding: 20px;
    border-radius: 10px;
  }
`;

const Product = ({ data: { product } }) => {
  // const image = getImage(product.image.asset.gatsbyImageData);
  const images = product.imageGallery;
  return (
    <Layout>
      {/* SEO component */}
      <ProductGrid>
        <div className="individual-product-information">
          <div className="individual-product-heading">
            <h2>{product.name}</h2>
            <p>{`$${product.price}`}</p>
          </div>
          <p>{product.product_description}</p>
        </div>
        {/* <GatsbyImage image={image} alt={product.name} /> */}
        {images.map((image) => (
          <GatsbyImage
            image={image.asset.gatsbyImageData}
            alt={product.name}
            key={image.asset.id}
          />
        ))}
        <a
          href={`mailto:${product.contact_person[0].contact_link}?subject=I'm interested in your ${product.name}`}
          className="contact-btn"
        >
          Contact us
        </a>
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
      imageGallery {
        asset {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          id
        }
      }
      categories {
        name
        id
      }
      contact_person {
        contact_link
      }
    }
  }
`;
