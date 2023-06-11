import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./style.scss";
import { DEFAULT_OPTIONS } from "./constants";
import KodakFilter from "./KodakFilter";

const StyleYourImageApp: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<string>();
  const handleButtonClick = () => {
    fileInputRef && fileInputRef.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event?.target?.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsBinaryString(selectedFile);
      reader.onload = function () {
        setImageFile(btoa(reader.result as string));
      };
    }
  };

  const [tabIndex, setTabIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: number
  ) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== name) return option;
        return { ...option, value: e.target.value };
      });
    });
  };

  const getImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  };
  return (
    <>
      {imageFile ? (
        <div className="style-image-container">
          <div className="image-filter">
            <div className="input-image-container">
              <img
                src={`data:image/png;base64,${imageFile}`}
                style={{ maxHeight: "30vh", objectFit: "cover" }}
              />
            </div>
            <ul className="nav nav-tabs tab-container">
              <li className="nav-item tab-item">
                <p
                  className={`nav-link ${tabIndex === 0 && "active"}`}
                  aria-current="page"
                  onClick={() => setTabIndex(0)}
                >
                  Filters
                </p>
              </li>
              <li className="nav-item">
                <p
                  className={`nav-link ${tabIndex === 1 && "active"}`}
                  onClick={() => setTabIndex(1)}
                >
                  Frames
                </p>
              </li>
            </ul>
            {tabIndex === 0 && (
              <div className="filters">
                {options.map((item, index) => (
                  <div className="single-filter-container">
                    <div className="filter-title">{item.name}</div>
                    <input
                      type="range"
                      className="slider"
                      min={item.range.min}
                      max={item.range.max}
                      value={item.value}
                      onChange={(e) => handleSliderChange(e, index)}
                    />
                  </div>
                ))}
              </div>
            )}
            {tabIndex === 1 && (
              <div className="frames">
                <div>Kodak</div>
              </div>
            )}
          </div>
          <div className="image-output-container">
            {tabIndex === 0 && (
              <img
                src={`data:image/png;base64,${imageFile}`}
                style={{
                  maxHeight: "60vh",
                  objectFit: "cover",
                  width: "100%",
                  ...getImageStyle(),
                }}
              />
            )}
            {tabIndex === 1 && (
              <KodakFilter img={imageFile} filters={getImageStyle()} />
            )}
          </div>
        </div>
      ) : (
        <div className="button-container">
          <Button
            variant="primary"
            className="start-button"
            onClick={handleButtonClick}
          >
            <div className="btn-text">Add Image</div>
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      )}
    </>
  );
};

export default StyleYourImageApp;
