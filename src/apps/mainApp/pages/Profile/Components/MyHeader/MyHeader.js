import { useState } from "react";
import "./MyHeader.css";
import Select from "../../../../../../components/SelectForm/SelectForm";

export default function MyHeader({
  title,
  sortOptions,
  thinkAction,
  isLoading = true,
  children,
}) {
  const [currentOptionObj, setCurrentOptionObj] = useState({});
  return (
    <header className="header col-12">
      <h2>my {title}</h2>
      {children}
      <div
        className="d-flex justify-content-between align-items-center"
        style={
          isLoading
            ? {
                opacity: 0.6,
                pointerEvents: "none",
              }
            : {}
        }
      >
        <div className="search-form position-relative d-flex align-items-center">
          <input
            className="search-input form-control border-opacity-50 opacity-75"
            placeholder="Search"
            disabled
          />
          <i className="fa fa-search search-icon"></i>
        </div>
        <div className="d-flex justify-content-between  my-3">
          <Select
            label="sort by"
            options={sortOptions}
            name="sortBy"
            setter={setCurrentOptionObj}
            currentOptionObj={currentOptionObj}
            thinkAction={thinkAction}
            fetchInitialState={false}
          />
        </div>
      </div>
    </header>
  );
}
