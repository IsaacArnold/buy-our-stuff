import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const ProductGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const IndividualProductStyles = styled.div`
  .title-price {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const SingleProduct = ({ product }) => {
  const image = getImage(product[0].image.asset.gatsbyImageData);
  return (
    <IndividualProductStyles>
      <div className="title-price">
        <h2>Test product</h2>
        <p>$50</p>
      </div>
      <GatsbyImage image={image} />
    </IndividualProductStyles>
  );
};

const ProductList = ({ products }) => {
  return (
    <ProductGridStyles>
      {products.map((product) => {
        <SingleProduct product={product} />;
      })}
    </ProductGridStyles>
  );
};

export default ProductList;
