import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
// Typography import

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
