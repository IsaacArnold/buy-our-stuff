import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Nav from "./Nav";
// Typography import

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  margin: 30px 15px;
  padding: 0px 15px;
  border-radius: 10px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <Nav />
        {children}
      </PageContainer>
    </>
  );
};

export default Layout;
