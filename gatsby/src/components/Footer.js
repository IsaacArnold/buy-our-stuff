import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: auto;
  margin-bottom: 40px;
  background: #fff;
  color: var(--black);
  border-radius: 10px;
  max-width: 342px;
  p {
    font-size: 0.9rem;
    margin: 0;
    padding: 10px;
    a {
      text-decoration: none;
      color: var(--black);
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <p>
        Website built by{" "}
        <a href="https://isaacarnold.dev/" target="_blank" rel="noreferrer">
          Isaac Arnold
        </a>{" "}
        | 2021
      </p>
    </FooterStyles>
  );
};

export default Footer;
