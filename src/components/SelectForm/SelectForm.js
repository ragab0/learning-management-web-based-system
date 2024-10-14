import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function SelectForm({ name, label, options = [], thinkAction }) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentOptionObj, setter] = useState({});

  function setCurrentOptionHandler(optionObj) {
    setter(optionObj);
    searchParams.set(name, optionObj.value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  useEffect(
    function () {
      dispatch(thinkAction(searchParams.toString()));
    },
    [searchParams, dispatch, thinkAction]
  );

  useEffect(
    function () {
      const o = options.find((o) => o.value === searchParams.get(name));
      if (o) setter(o);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="select d-flex align-items-center">
      <label
        htmlFor="dropdownMenuButton"
        className="text-dark p-2 ps-0 pe-2 mb-0 text-capitalize"
        style={{ cursor: "pointer" }}
      >
        {label || "Choose"}
      </label>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-light border-black p-2 ps-4 pe-4 text-capitalize"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
        >
          {currentOptionObj.name || "select"}
          <i className="fa fa-angle-down ps-2"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {options.map(({ name, value }, i) => (
            <li
              key={i}
              value={value}
              style={{ cursor: "pointer" }}
              className={`dropdown-item text-capitalize ${
                currentOptionObj.value === value ? "active" : ""
              }`}
              onClick={() => setCurrentOptionHandler({ name, value })}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
