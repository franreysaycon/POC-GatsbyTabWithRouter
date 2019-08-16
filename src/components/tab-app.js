import React from "react";
import Layout from "./layout";
import TabContainer from "./tab-container";
import Tab from "./tab";


const TabApp = ({ navigate, tabsId }) => {

  const TAB_DATA = [
    {
      id: 1,
      name: 'Tab 1',
    },
    {
      id: 2,
      name: 'Tab 2',
    },
    {
      id: 3,
      name: 'Tab 3',
    },
    {
      id: 4,
      name: 'Tab 4',
    },
  ];

  const handleClick = e => {
    e.preventDefault();
    navigate(`/tabs/${e.target.id}`);
  };

  const currentTabId = parseInt(tabsId) || 1;

  return (
    <Layout>
      <TabContainer>
        {
          TAB_DATA.map( ({id, name}) => 
            <Tab
              id={id}
              active={id === currentTabId}
              onClick={e => handleClick(e)}
            >
              {name}
            </Tab>
          )
        }
      </TabContainer>
    </Layout>
  );
};

export default TabApp;
