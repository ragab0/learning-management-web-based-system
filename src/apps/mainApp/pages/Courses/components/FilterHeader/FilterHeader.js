import React from "react";
import "./FilterHeader.css";
import SortBy from "../../../../components/SortBy/SortBy";

export default function FilterHeader() {
  return (
    <div className="filter-header d-flex justify-content-between my-4">
      <button className="btn btn-light border-black p-2 ps-4 pe-4">
        <i className="fa-solid fa-filter"></i> Filter
      </button>
      <SortBy
        sortByOptions={["name (a-z)", "name (z-a)", "top rate", "low price"]}
      />
    </div>
  );
}
