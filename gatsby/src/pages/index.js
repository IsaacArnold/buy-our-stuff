import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const HomePageContent = styled.section`
  margin: 30px 0;
  .content {
    width: 85%;
    max-width: 640px;
    margin: auto;
  }
`;

const HomePageCTA = styled(Link)`
  display: flex;
  justify-content: center;
  width: 75%;
  max-width: 300px;
  background-color: var(--red);
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  margin: 50px auto;
  text-decoration: none;
`;

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomePageContent>
        <div
          className="content"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="250"
          data-sal-easing="ease"
        >
          <p>Hey 👋 we are Isaac & Vanessa</p>
          <p>
            We are moving back to Brisbane after a few years of living in
            Tauranga. To prepare for the move, we are wanting to sell some of
            our goods. Some of it is new, some of it pre-loved...all of it in
            good condition!
          </p>
          <p>
            Check out what we are selling and let us know if anything interests
            you!
          </p>
        </div>
        <HomePageCTA
          to="/stuff"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="1000"
          data-sal-easing="ease"
        >
          Browse our goods
        </HomePageCTA>
      </HomePageContent>
    </Layout>
  );
};

export default HomePage;
