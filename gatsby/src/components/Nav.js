import React from "react";
import styled from "styled-components";

const NavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2rem;
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <h1>Buy Our Stuff</h1>
      <ul>
        <li>Home</li>
        <li>Stuff</li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
