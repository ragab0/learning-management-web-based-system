import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SortBy({ sortByOptions = [] }) {
  const [currentSort, setCurrentSort] = useState(sortByOptions[0]);
  return (
    <div className="sort d-flex align-items-center">
      <label htmlFor="dropdownMenuButton" className="text-dark p-2 pe-4 mb-0">
        Sort By
      </label>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-light border-black p-2 ps-4 pe-4 text-capitalize"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          aria-label="Sort courses by relevance"
        >
          {currentSort}
          <i className="fa fa-angle-down ps-2"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {sortByOptions.map((s, i) => (
            <li key={i}>
              <Link
                className={`dropdown-item text-capitalize ${
                  currentSort === s ? "active" : ""
                }`}
                to="#"
                onClick={() => setCurrentSort(s)}
              >
                {s}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
