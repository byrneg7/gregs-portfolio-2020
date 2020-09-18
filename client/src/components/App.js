import React from "react";

import { testGET, testPOST } from "../utils/api/testRoutes";
import Router from "./Router";

class App extends React.Component {
  componentDidMount() {
    testGET();
    testPOST();
  }
  render() {
    return <Router />;
  }
}

export default App;
