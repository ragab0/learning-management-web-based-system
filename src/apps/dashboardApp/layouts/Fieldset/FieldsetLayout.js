import React from "react";
import "./FieldsetLayout.css";

export default function FieldsetLayout({
  title,
  children,
  sides = false,
  mandatory = false,
}) {
  return (
    <fieldset
      className={`main-fieldset p-2 pb-3 mb-2 d-flex gap-2 dashboard-box ${
        sides ? "sides" : ""
      }`}
    >
      <legend className="px-1">
        {mandatory && <span className=" text-danger opacity-75">*</span>}
        {title}
      </legend>
      {children}
    </fieldset>
  );
}
