import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";

const HomePageContent = styled.section`
  margin: 30px 0;
`;

const HomePageCTA = styled(Link)`
  display: flex;
  justify-content: center;
  width: 75%;
  background-color: var(--red);
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  margin: 50px auto;
`;

const HomePage = () => {
  return (
    <Layout>
      <HomePageContent>
        <p>Hey 👋 we are Isaac & Vanessa</p>
        <p>
          We are moving back to Brisbane after a few years of living in
          Tauranga. To prepare for the move, we are wanting to sell some of our
          stuff. Some of it is new, some of it pre-loved...all of it in good
          condition!
        </p>
        <p>
          Check out what we are selling and let us know if anything interests
          you!
        </p>
        <HomePageCTA>Browse our stuff</HomePageCTA>
      </HomePageContent>
    </Layout>
  );
};

export default HomePage;
