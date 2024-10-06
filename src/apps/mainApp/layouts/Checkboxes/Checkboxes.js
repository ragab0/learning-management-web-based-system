import React, { useEffect, useState } from "react";
import "./Checkboxes.css";

export default function LayoutCheckboxes({
  children,
  showCheckboxes = true,
  staticName = "name",
  reverseCols = false,
  isLinkable = false,
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
          key={i}
          className={`${staticName}${
            i + 1
          } d-flex align-items-center gap-2 w-100`}
        >
          {showCheckboxes && (
            <div className="d-flex align-items-center gap-2">
              <input
                type="checkbox"
                className=" form-check-input m-0"
                name={staticName + (i + 1)}
                checked={checkInputs[staticName + (i + 1)]}
                onChange={checkHandler}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          )}
          <div className="w-100">{child} </div>
        </label>
      ))}
    </div>
  );
}
