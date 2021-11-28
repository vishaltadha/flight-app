import { useState } from "react";
import { TabInfo } from "../../utilities/app.model";
import "./Tabs.scss";

export type TabsProps = {
  tabs: TabInfo[];
  onTabSelect: (idx: number) => void;
};

const Tabs: React.FC<TabsProps> = ({ tabs, onTabSelect }) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (idx: number) => {
    setSelectedTab(idx + 1);
    onTabSelect(idx + 1);
  };

  return (
    <nav>
      <ul className="m-0 p-0">
        {tabs.map((tabInfo, index) => {
          return (
            <li
              className={
                "hover-pointer " + (selectedTab === index + 1 ? "active" : "")
              }
              onClick={() => handleTabChange(index)}
              key={index}
            >
              <i className={"fas mr-2 " + tabInfo.icon}></i>
              {tabInfo.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Tabs;
