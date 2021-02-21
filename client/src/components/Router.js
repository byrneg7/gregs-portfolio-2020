import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Demos from "./demos/Demos";
import LandingPage from "./landing-page/LandingPage";
import RouteWithLayout from "./hocs/RouteWithLayout";
import LandingPageLayout from "./layouts/landing-page-layout/LandingPageLayout";
import Navbar from "./navbar/Navbar";

const Router = () => {
  return (
    <>
      <Navbar />
      <Container>
        <InnerContainer>
          <RouteWithLayout
            path="/"
            exact
            component={LandingPage}
            layout={LandingPageLayout}
          />
          <Route path="/Demos" exact component={Demos} />
        </InnerContainer>
      </Container>
    </>
  );
};

export default Router;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  max-width: 1300px;
`;
