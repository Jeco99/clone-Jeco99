import { useState } from "react";
import "./style.css";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

import tabsData from "./tabsData";

export default function App() {
  const [activeTab, setActiveTab] = useState(tabsData.length);

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
        {tabsData.map((item) => (
          <Tab key={item}>{item.title}</Tab>
        ))}
      </Tabs>
    </div>
  );
}
