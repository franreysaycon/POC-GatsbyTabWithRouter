import React from "react";
import { Layout, TabContainer, Tab } from "../../components";

const HomeTemplate = () => (
  <Layout>
    <TabContainer>
      <Tab active={true}>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
      <Tab>Tab 4</Tab>
    </TabContainer>
  </Layout>
);

export default HomeTemplate;
