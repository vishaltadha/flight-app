import { useState } from "react";

import "./App.scss";
import FlightSearch from "./components/FlightSearch/FlightSearch";
import Tabs from "./components/Tabs/Tabs";
import { TABS_DATA } from "./utilities/app.constants";

function App() {
  const [selectedTab, setSelectedTab] = useState(1);

  const onTabSelect = (idx: number) => {
    setSelectedTab(idx);
  };

  const renderTabs = () => {
    switch (selectedTab) {
      case 1:
        return <FlightSearch />;
      default:
        return <div className="m-3">Coming soon...</div>;
    }
  };

  return (
    <header className="App-header">
      <Tabs tabs={TABS_DATA} onTabSelect={onTabSelect}></Tabs>
      {renderTabs()}
    </header>
  );
}

export default App;
