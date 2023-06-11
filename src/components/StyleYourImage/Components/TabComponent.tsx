import React, { useState } from "react";
interface TabComponentProps {
    currTabIndex: number;
    onTabChange: (currTabIndex: number) => void;
}
const TabComponent: React.FC<TabComponentProps> = ({
    currTabIndex,
    onTabChange
}) => {

  return (
    <ul className="nav nav-tabs tab-container">
      <li className="nav-item tab-item">
        <p
          className={`nav-link ${currTabIndex === 0 && "active"}`}
          aria-current="page"
          onClick={() => onTabChange(0)}
        >
          Filters
        </p>
      </li>
      <li className="nav-item">
        <p
          className={`nav-link ${currTabIndex === 1 && "active"}`}
          onClick={() => onTabChange(1)}
        >
          Frames
        </p>
      </li>
    </ul>
  );
};

export default TabComponent;
