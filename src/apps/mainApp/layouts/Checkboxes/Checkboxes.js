import React, { useEffect, useState } from "react";
import "./Checkboxes.css";

export default function LayoutCheckboxes({
  children,
  showCheckboxes = true,
  staticName = "name",
  reverseCols = false,
}) {
  const [checkInputs, setCheckInputs] = useState({});

  function checkHandler(e) {
    setCheckInputs((old) => ({ ...old, [e.target.name]: e.target.checked }));
  }

  useEffect(
    function () {
      console.log(checkInputs);
    },
    [checkInputs]
  );

  return (
    <div
      className={`layout-checkboxes d-flex ${
        reverseCols ? "flex-column-reverse" : "flex-column"
      } align-items-start gap-2`}
    >
      {children.map((child, i) => (
        <label
          className={`${staticName}${i + 1} d-flex align-items-center gap-2`}
        >
          {showCheckboxes && (
            <input
              type="checkbox"
              className=" form-check-input m-0"
              name={staticName + (i + 1)}
              checked={checkInputs[staticName + (i + 1)]}
              onChange={checkHandler}
            />
          )}
          <div>{child} </div>
        </label>
      ))}
    </div>
  );
}
