import React from "react";
import "./KodakFilter.Scss";

interface KodakFilterProps {
  img: string;
  filters: object;
}
const KodakFilter: React.FC<KodakFilterProps> = ({ img, filters }) => {
  return (
    <div className="kodak-filter-container">
      <div className="left-bar">
        <div>KODAK PORTRA 400</div>
        <div>43</div>
        <div>KODAK PORTRA 400</div>
      </div>
      <div className="middle-bar">
        <img
          src={`data:image/png;base64,${img}`}
          style={{
            objectFit: "cover",
            height:'400px',
            width: "200px",
            ...filters,
          }}
        />
      </div>
      <div className="right-bar">
        <div>KODAK PORTRA 400</div>
        <div>43</div>
        <div>KODAK PORTRA 400</div>
      </div>
    </div>
  );
};

export default KodakFilter;
