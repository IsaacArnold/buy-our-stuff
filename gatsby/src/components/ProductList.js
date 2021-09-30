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
  .product-grid-img {
    height: 200px;
  }
`;

const SingleProduct = ({ product }) => {
  const image = getImage(product.image.asset.gatsbyImageData);
  return (
    <IndividualProductStyles>
      <div className="title-price">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
      <Link to={`/product/${product.slug.current}`}>
        <GatsbyImage
          image={image}
          alt={product.name}
          className="product-grid-img"
        />
      </Link>
    </IndividualProductStyles>
  );
};

const ProductList = ({ products }) => {
  return (
    <ProductGridStyles>
      {products.map((product) => (
        <SingleProduct product={product} key={product.id} />
      ))}
    </ProductGridStyles>
  );
};

export default ProductList;
