import React from "react";
import TabApp from "../../components/tab-app";
import { Router } from "@reach/router";

const App = () => (
  <Router>
    <TabApp path="/tabs" />
    <TabApp path="/tabs/:tabsId" />
  </Router>
)

export default App;
