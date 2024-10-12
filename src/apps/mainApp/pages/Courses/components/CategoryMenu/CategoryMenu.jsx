import React from "react";
import LayoutCheckboxes from "../../../../layouts/Checkboxes/Checkboxes";
import LayoutMenuToggler from "../../../../layouts/MenuToggler/MenuToggler";

export default function CategoryMenu() {
  return (
    <LayoutMenuToggler title="category">
      <LayoutCheckboxes staticName="category">
        {["Front-end", "Back-end", "UI-UX", "Flutter"]}
      </LayoutCheckboxes>
    </LayoutMenuToggler>
  );
}
