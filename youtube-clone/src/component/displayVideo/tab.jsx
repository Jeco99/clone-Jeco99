//TODO: make it scrollable tabs


import React from "react";

import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
export default function App() {
  const [activeTab, setActiveTab] = React.useState(10);

  // define an onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  return (
    <div className="App">
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        hideNavBtnsOnMobile={false}
      >
        {/* generating an array to loop through it  */}
        {[...Array(10).keys()].map((item) => (
          <Tab key={item}>Tab {item}</Tab>
        ))}
      </Tabs>
    </div>
  );
}
