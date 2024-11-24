import React from "react";
import "./NoContent.css";
import EmptyFolder from "../../assets/svgsComps/EmptyFolder";
import ScrollAnimations from "../../apps/mainApp/components/ScrollAnimations/ScrollAnimations";

export default function NoContent({ children, className = "", style = {} }) {
  return (
    <ScrollAnimations
      animationName="scaleInSlow"
      className={
        "main-no-content d-flex align-items-center justify-content-center flex-column gap-2 " +
        className
      }
      style={style}
    >
      <div className="img-wrapper">
        <EmptyFolder />
      </div>
      {children}
    </ScrollAnimations>
  );
}
