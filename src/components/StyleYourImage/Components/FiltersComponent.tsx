import React from "react";
import { TFilter } from "../types";

interface FiltersComponentProps {
  filters: Array<TFilter>;
  onFilterValueChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}
const FiltersComponent: React.FC<FiltersComponentProps> = ({
  filters,
  onFilterValueChange,
}) => {
  return (
    <div className="filters">
      {filters.map((item, index) => (
        <div key={`${item.name}-${index}`} className="single-filter-container">
          <div className="filter-title">{item.name}</div>
          <input
            type="range"
            className="slider"
            min={item.range.min}
            max={item.range.max}
            value={item.value}
            onChange={(e) => onFilterValueChange(e, index)}
          />
        </div>
      ))}
    </div>
  );
};
export default FiltersComponent;
