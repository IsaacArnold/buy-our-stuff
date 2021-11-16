import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const ProductGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3rem;
  /* grid-auto-rows: auto auto 500px; */
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
  @media (min-width: 1170px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
`;

const IndividualProductStyles = styled.div`
  .title-price {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h2 {
      margin-bottom: 0;
    }
  }
  .product-grid-img {
    width: 80%;
  }
`;

const SingleProduct = ({ product }) => {
  const image = getImage(product.mainImage.asset.gatsbyImageData);
  return (
    <IndividualProductStyles>
      <div className="title-price">
        <h2>{product.name}</h2>
        <p>{`$${product.price} (ono)`}</p>
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
