import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    console.log(checkInputs);
  }, [checkInputs]);

  return (
    <div
      className={`layout-checkboxes d-flex ${
        reverseCols ? "flex-column-reverse" : "flex-column"
      } align-items-start gap-2`}
    >
      {children.map((child, i) => (
        <motion.label
          key={staticName + (i + 1)}
          className={`${staticName}${
            i + 1
          } d-flex align-items-center gap-2 w-100`}
          whileHover={{ scale: 1.03, backgroundColor: "#f0f0f0" }} // Scale up and change background on hover
          transition={{ duration: 0.2 }}
        >
          {showCheckboxes && (
            <div className="d-flex align-items-center gap-2">
              <motion.input
                type="checkbox"
                className="form-check-input m-0"
                name={staticName + (i + 1)}
                checked={checkInputs[staticName + (i + 1)] || false}
                onChange={checkHandler}
                style={{ width: "20px", height: "20px" }}
                whileTap={{ scale: 1.2 }} // Scale up when clicked
                transition={{ type: "spring", stiffness: 300 }} // Spring animation for checkbox
              />
            </div>
          )}
          <div className="w-100">{child}</div>
        </motion.label>
      ))}
    </div>
  );
}
