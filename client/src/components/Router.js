import React from "react";
import { Route } from "react-router-dom";

import Example from "./Example";
import LandingPage from "./landing-page/LandingPage";
import RouteWithLayout from "./hocs/RouteWithLayout";
import LandingPageLayout from "./layouts/LandingPageLayout";

const Router = () => {
  return (
    <>
      <RouteWithLayout
        path="/"
        exact
        component={LandingPage}
        layout={LandingPageLayout}
      />
      <Route path="/Example" exact component={Example} />
    </>
  );
};

export default Router;
