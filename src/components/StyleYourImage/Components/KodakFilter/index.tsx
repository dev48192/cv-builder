import React from "react";
import "./KodakFilter.Scss";

interface KodakFilterProps {
  framedRef: React.RefObject<HTMLDivElement>;
  img: string;
  filters: object;
}
const KodakFilter: React.FC<KodakFilterProps> = ({ framedRef, img, filters }) => {
  return (
    <div ref={framedRef} className="kodak-filter-container">
      {[...Array(2)].map((_item, index) => (
        <div className="combine-two-frame" key={`frame-${index}`}>
          <div className="one-frame">
            <div className="left-bar">
              <p className="upper-text">KODAK PORTRA 400</p>
              <p className="upper-text">43</p>
              <p className="upper-text">KODAK PORTRA 400</p>
            </div>
            <div className="middle-bar">
              <img
                src={`data:image/png;base64,${img}`}
                style={{
                  objectFit: "cover",
                  height: "400px",
                  width: "200px",
                  ...filters,
                }}
              />
            </div>
            <div className="right-bar">
              <p className="lower-text">&#8883;2</p>
              <p className="lower-text">&#8883;</p>
              <p className="lower-text">&#8883;</p>
            </div>
          </div>
          <div className="one-frame">
            <div className="left-bar">
              <p className="upper-text">KODAK PORTRA 400</p>
              <p className="upper-text">43</p>
              <p className="upper-text">KODAK PORTRA 400</p>
            </div>
            <div className="middle-bar">
              <img
                src={`data:image/png;base64,${img}`}
                style={{
                  objectFit: "cover",
                  height: "400px",
                  width: "200px",
                  ...filters,
                }}
              />
            </div>
            <div className="right-bar">
              <p className="lower-text">&#8883;2</p>
              <p className="lower-text">&#8883;</p>
              <p className="lower-text">&#8883;</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KodakFilter;
