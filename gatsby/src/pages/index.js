import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
`;

const HomePage = () => {
  return (
    <Layout>
      <HomePageContainer>
        <h1>Buy Our Stuff</h1>
        <p>Hey 👋 we are Isaac & Vanessa</p>
        <p>
          We are moving back to Brisbane after a few years living in Tauranga.
          To prepare for the move, we are wanting to sell some of our stuff.
          Some of it is new, some of it pre-loved...all of it in good condition!
        </p>
        <p>
          Check out what we are selling and let us know if anything interests
          you!
        </p>
        <Link>Browse our stuff</Link>
      </HomePageContainer>
    </Layout>
  );
};

export default HomePage;
