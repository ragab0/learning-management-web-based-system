import React from "react";
import "./FilterOptions.css";
import Select from "../../../../components/Select/Select";

const sortByOptions = ["Relevance", "Popularity", "Rating"];

export default function FilterOptions() {
  return (
    <div>
      <div className="d-flex justify-content-between my-4">
        <div className="search position-relative">
          <input
            className="search-input form-control border-opacity-50 p-2 ps-5 pe-4"
            placeholder="Search"
          />
          <i className="fa fa-search search-icon"></i>
        </div>
        <Select label="sort by" options={sortByOptions} />
      </div>
    </div>
  );
}
