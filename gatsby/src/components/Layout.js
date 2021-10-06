import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Nav from "./Nav";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 95%;
  max-width: 1300px;
  background-color: #fff;
  margin: 40px auto;
  padding: 0px 15px;
  border-radius: 10px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <PageContainer>
        <Nav />
        {children}
      </PageContainer>
    </>
  );
};

export default Layout;
