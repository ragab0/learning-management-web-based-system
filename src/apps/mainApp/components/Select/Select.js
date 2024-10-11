import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Select({
  options = [],
  label = "Sort By",
  setValue,
  value,
}) {
  function setCurrentSortHandler(option) {
    setValue(option);
  }

  return (
    <div className="select d-flex align-items-center">
      <label
        htmlFor="dropdownMenuButton"
        className="text-dark p-2 ps-0 pe-4 mb-0"
        style={{ cursor: "pointer" }}
      >
        {label}
      </label>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-light border-black p-2 ps-4 pe-4 text-capitalize"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {value || "select"}
          <i className="fa fa-angle-down ps-2"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {options.map((s, i) => (
            <li key={i}>
              <Link
                className={`dropdown-item text-capitalize ${
                  value === s ? "active" : ""
                }`}
                to="#"
                onClick={() => setCurrentSortHandler(s)}
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
