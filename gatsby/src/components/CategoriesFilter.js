import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const CategoryStyles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  .NEW {
    order: -1;
  }
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 0.5rem;
    align-items: center;
    padding: 10px;
    background: var(--red);
    border-radius: 10px;
    text-decoration: none;
    font-size: clamp(1.5rem, 1.4vw, 2.5rem);
    color: #fff;
    .count {
      background: white;
      padding: 2px 8px;
      border-radius: 10px;
      color: var(--black);
    }
    span {
      font-size: 1rem;
    }
    &[aria-current="page"] {
      background: var(--green);
      color: var(--black);
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
  const { products } = useStaticQuery(graphql`
    query {
      categories: allSanityCategory {
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
      <Link to="/stuff">
        <span>All</span>
        <span className="count">{products.nodes.length}</span>
      </Link>
      {categoriesWithCounts.map((category) => (
        <Link
          to={`/stuff/${category.name}`}
          key={category.id}
          className={category.name === "NEW" ? "NEW" : ""}
        >
          <span>{category.name}</span>
          <span className="count">{category.count}</span>
        </Link>
      ))}
    </CategoryStyles>
  );
};

export default CategoriesFilter;
