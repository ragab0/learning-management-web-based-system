import React from "react";
import LayoutMenuToggler from "../../../../layouts/MenuToggler/MenuToggler";
import LayoutCheckboxes from "../../../../layouts/Checkboxes/Checkboxes";

export default function ChaptersMenu() {
  return (
    <LayoutMenuToggler title="number of chapters">
      <LayoutCheckboxes staticName="chapter">
        {["1-10", "10-15", "15-20", ">20"]}
      </LayoutCheckboxes>
    </LayoutMenuToggler>
  );
}
