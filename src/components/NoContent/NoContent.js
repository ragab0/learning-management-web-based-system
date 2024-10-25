import React from "react";
import "./NoContent.css";
import EmptyFolder from "../../assets/svgsComps/EmptyFolder";

export default function NoContent({ children }) {
  return (
    <div className="main-no-content h-100 d-flex align-items-center justify-content-center flex-column gap-2">
      <div className="img-wrapper">
        <EmptyFolder />
      </div>
      {children}
    </div>
  );
}
