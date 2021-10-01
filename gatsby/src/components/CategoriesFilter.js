import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const CategoryStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    text-decoration: none;
    font-size: clamp(1.5rem, 1.4vw, 2.5rem);
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current="page"] {
      background: var(--red);
    }
  }
`;

function countProductsInCategories(products) {
  const counts = products
    .map((product) => product.categories)
    .flat()
    .reduce((acc, category) => {
      const existingCategory = acc[category.id];
      if (existingCategory) {
        existingCategory.count += 1;
      } else {
        acc[category.id] = {
          id: category.id,
          name: category.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  const sortedCategories = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedCategories;
}

const CategoriesFilter = ({ activeCategory }) => {
  const { categories, products } = useStaticQuery(graphql`
    query {
      toppings: allSanityCategory {
        nodes {
          name
          id
        }
      }
      products: allSanityProduct {
        nodes {
          categories {
            name
            id
          }
        }
      }
    }
  `);

  const categoriesWithCounts = countProductsInCategories(products.nodes);

  return (
    <CategoryStyles>
      <Link to="/stuff">All</Link>
      {categoriesWithCounts.map((category) => (
        <Link to={`/category/${category.name}`} key={category.id}>
          <span>{category.name}</span>
          <span>{category.count}</span>
        </Link>
      ))}
    </CategoryStyles>
  );
};

export default CategoriesFilter;
