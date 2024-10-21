import React, { useState } from "react";
import "./FilterOptions.css";
import Select from "../../../../../../components/SelectForm/SelectForm";
import { fetchEnrolledCourses } from "../../../../../../store/slices/studentSlice";

const sortByOptions = [
  // { name: "progress", value: "progress" },
  { name: "rating", value: "rate" },
  { name: "category", value: "catg" },
];

export default function FilterOptions() {
  const [currentOptionObj, setCurrentOptionObj] = useState({});

  return (
    <div className="d-flex justify-content-between align-items-center ">
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
          options={sortByOptions}
          name="sortBy"
          setter={setCurrentOptionObj}
          currentOptionObj={currentOptionObj}
          thinkAction={fetchEnrolledCourses}
          fetchInitialState={false}
        />
      </div>
    </div>
  );
}
