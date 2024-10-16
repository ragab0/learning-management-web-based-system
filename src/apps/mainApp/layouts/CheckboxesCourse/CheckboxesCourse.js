import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CheckboxesCourse.css";

export default function LayoutCheckboxesCourse({
  children,
  staticName,
  isSortable,
}) {
  const [checkInputs, setCheckInputs] = useState({});

  function checkHandler(e) {
    setCheckInputs((old) => ({ ...old, [e.target.name]: e.target.checked }));
  }

  return (
    <div
      className={`layout-checkboxes d-flex flex-column align-items-start gap-2`}
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
              checked={checkInputs[staticName + (i + 1)] || false}
              onChange={checkHandler}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              whileTap={{ scale: 1.2 }} // Scale up when clicked
              transition={{ type: "spring", stiffness: 300 }} // Spring animation for checkbox
            />
          </div>
          <div className="w-100">{child}</div>
        </label>
      ))}
    </div>
  );
}
