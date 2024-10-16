import React from "react";
import "./CheckboxesFilter.css";
import { motion } from "framer-motion";

export default function LayoutCheckboxesFilter({
  children,
  staticName,
  state,
  setter,
  isColReverse = false,
  isValueIndexable = false,
}) {
  function checkHandler(e) {
    const { name, checked, value } = e.target;
    setter((old) => ({ ...old, [name]: checked && value }));
  }

  return (
    <div
      className={`layout-checkboxes d-flex ${
        isColReverse ? "flex-column-reverse" : "flex-column"
      } align-items-start gap-2`}
    >
      {children.map((child, i) => (
        <label
          key={staticName + (i + 1)}
          className={`${staticName}${
            i + 1
          } d-flex align-items-center gap-2 w-100`}
        >
          <div className="d-flex align-items-center gap-2">
            <motion.input
              type="checkbox"
              className="form-check-input m-0"
              name={staticName + (i + 1)}
              value={`${isValueIndexable ? i + 1 : child.toLocaleLowerCase()}`}
              checked={state[staticName + (i + 1)] || false}
              onChange={checkHandler}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              whileTap={{ scale: 1.2 }} // Scale up when clicked
              transition={{ type: "spring", stiffness: 300 }} // Spring animation for checkbox
            />
          </div>
          <div className="w-100">{child?.content || child}</div>
        </label>
      ))}
    </div>
  );
}
