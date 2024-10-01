import React from "react";
import "./FilterHeader.css";

export default function FilterHeader() {
  return (
    <div className="filter-header d-flex justify-content-between my-4">
      <button className="btn btn-light border-black p-2 ps-4 pe-4">
        <i className="fa-solid fa-filter"></i> Filter
      </button>
      <div className="sort d-flex align-items-center">
        <label
          htmlFor="sortSelect"
          className="text-dark d-flex align-items-center p-2 px-3"
          style={{ textWrap: "nowrap" }}
        >
          Sort By
        </label>

        <select
          id="sortSelect"
          className="form-select p-2 px-4 border-black"
          ariaLabel="Sort courses by relevance"
        >
          <option selected value="default">
            relevance
          </option>
          <option value="name">name</option>
          <option value="rate">rate</option>
          <option value="price">price</option>
        </select>
      </div>
    </div>
  );
}
