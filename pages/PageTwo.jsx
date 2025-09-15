import React from "react";
import IPOCard42 from "../components/IPOCard42";
import { Page42 } from "../components/Page42";

function PageTwo() {
  return (
    <div className="app-container1">
      <div className="left-section1">
        {Page42.slice(4, 6).map((card, index) => (
          <IPOCard42 key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default PageTwo;
