import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button } from "react-bootstrap";
import "./style.scss";
import { DEFAULT_OPTIONS, KODAK_INITIAL } from "./constants";
import KodakFilter from "./Components/KodakFilter";
import TabComponent from "./Components/TabComponent";
import FiltersComponent from "./Components/FiltersComponent";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const StyleYourImageApp: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const filteredImageRef = useRef<HTMLImageElement>(null);
  const framedImageRef = useRef<HTMLDivElement>(null);

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
  const handleTabChange = (tabIndex: number) => setTabIndex(tabIndex);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  const [frame, setFrame] = useState(0);

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

  const addedFilters = useMemo(() => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  }, [options]);

  const downloadFramedImage = useCallback(() => {
    domtoimage.toBlob(framedImageRef.current).then((blob: any) => {
      saveAs(blob, "image.png");
    });
  }, [framedImageRef, addedFilters]);

  const downloadFilteredImage = useCallback(() => {
    domtoimage.toBlob(filteredImageRef.current).then((blob: any) => {
      saveAs(blob, "image.png");
    });
  }, [filteredImageRef, addedFilters]);

  const handleChangeFilterValues = (value: number, name: number) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== name) return option;
        return { ...option, value: value };
      });
    });
  };

  const handleKodakFilter = () => {
    KODAK_INITIAL.forEach((item) =>
      handleChangeFilterValues(item.value, item.name)
    );
    setFrame(1);
  };
  return (
    <>
      {imageFile ? (
        <div className="style-image-container">
          <div className="image-output-container">
            {tabIndex === 0 && (
              <>
                <img
                  ref={filteredImageRef}
                  src={`data:image/png;base64,${imageFile}`}
                  style={{
                    maxHeight: "60vh",
                    objectFit: "cover",
                    width: "100%",
                    ...addedFilters,
                  }}
                />
                <Button
                  variant="success"
                  className="btn-download"
                  onClick={() => downloadFilteredImage()}
                >
                  Download
                </Button>
              </>
            )}
            {tabIndex === 1 && (
              <>
                {frame === 1 ? (
                  <>
                    <div className="frame-image-container">
                    <KodakFilter
                      framedRef={framedImageRef}
                      img={imageFile}
                      filters={addedFilters}
                    />
                    </div>
                    
                    <Button
                      variant="success"
                      className="btn-download"
                      onClick={downloadFramedImage}
                    >
                      Download
                    </Button>
                  </>
                ) : (
                  <img
                    ref={filteredImageRef}
                    src={`data:image/png;base64,${imageFile}`}
                    style={{
                      maxHeight: "60vh",
                      objectFit: "cover",
                      width: "100%",
                      ...addedFilters,
                    }}
                  />
                )}
              </>
            )}
          </div>
          <div className="image-filter">
            <div className="input-image-container">
              <img
                src={`data:image/png;base64,${imageFile}`}
                style={{ maxHeight: "30vh", objectFit: "cover" }}
              />
            </div>
            <TabComponent
              currTabIndex={tabIndex}
              onTabChange={handleTabChange}
            />
            {tabIndex === 0 && (
              <FiltersComponent
                filters={options}
                onFilterValueChange={handleSliderChange}
              />
            )}
            {tabIndex === 1 && (
              <div className="frames">
                <Button
                  variant="outline-info"
                  className="frame-card"
                  onClick={handleKodakFilter}
                >
                  Kodak
                </Button>
              </div>
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
