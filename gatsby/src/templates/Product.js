import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { navigate } from "@reach/router";

const ProductGrid = styled.div`
  .individual-product-information {
    width: 85%;
    margin: auto;
    max-width: 615px;
    .button {
      display: flex;
      width: 55%;
      max-width: 167px;
      margin: 20px auto;
      align-items: center;
      justify-content: center;
      padding: 10px;
      background: var(--red);
      border-radius: 10px;
      text-decoration: none;
      color: #fff;
      font-size: 0.9rem;
      cursor: pointer;
      border: none;
    }
  }
  /* .gatsby-image-wrapper {
    max-width: 750px;
    max-height: 500px;
  } */
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
  .image-wrapper {
    @media (min-width: 768px) {
      width: 40%;
      margin: 0 auto;
    }

    /* @media (min-width: 768px) {
      max-height: 50%;
      max-width: 50%;
      margin: 0 auto;
    } */
    .gatsby-image-wrapper {
      margin-bottom: 20px;
    }
  }
`;

const Product = ({ data: { product } }) => {
  // const image = getImage(product.image.asset.gatsbyImageData);
  const images = product.imageGallery;
  return (
    <Layout>
      <SEO title={product.name} image={images[0].asset?.gatsbyImageData} />
      <ProductGrid>
        <div className="individual-product-information">
          <button className="button" onClick={() => navigate(-1)}>
            Back to products
          </button>
          <div className="individual-product-heading">
            <h2>{product.name}</h2>
            <p>{`$${product.price} (ono)`}</p>
          </div>
          <p>{product.product_description}</p>
        </div>
        {/* <GatsbyImage image={image} alt={product.name} /> */}
        <div className="image-wrapper">
          {images.map((image) => (
            <GatsbyImage
              image={image.asset.gatsbyImageData}
              alt={product.name}
              key={image.asset.id}
            />
          ))}
        </div>
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
          gatsbyImageData(placeholder: BLURRED)
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

// layout: CONSTRAINED; aspectRatio: 1
