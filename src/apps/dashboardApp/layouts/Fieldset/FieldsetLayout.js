import React from "react";
import "./FieldsetLayout.css";

export default function FieldsetLayout({ title, children, sides = false }) {
  return (
    <fieldset
      className={`main-fieldset p-2 pb-3 mb-2 d-flex gap-2 dashboard-box ${
        sides ? "sides" : ""
      }`}
    >
      <legend className="px-1">{title}</legend>
      {children}
    </fieldset>
  );
}
