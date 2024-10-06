import React from "react";
import "./Rates.css";
import StarLight from "../../../../assets/svgsComps/StarLight";
import StarDark from "../../../../assets/svgsComps/StarDark";
import LayoutCheckboxes from "../../layouts/Checkboxes/Checkboxes";

export default function Rates({ showCheckboxes = true, hasRatsioArray = [] }) {
  return (
    <LayoutCheckboxes
      staticName="rate"
      reverseCols={true}
      showCheckboxes={showCheckboxes}
    >
      {[...new Array(5)].map((_, i) => (
        <div key={i} className="rate-wrapper d-flex align-items-center gap-2">
          <span className="rate d-flex gap-1 align-items-center">
            {[...new Array(5)].map((_, j) =>
              j <= i ? <StarLight key={j} /> : <StarDark key={j} />
            )}
          </span>
          {hasRatsioArray.length > 0 && (
            <span className=" textdark h6 mb-0">{hasRatsioArray[i]}</span>
          )}
        </div>
      ))}
    </LayoutCheckboxes>
  );
}
