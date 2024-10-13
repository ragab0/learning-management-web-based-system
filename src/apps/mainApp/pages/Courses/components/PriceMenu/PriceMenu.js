import React, { useState } from "react";
import LayoutMenuToggler from "../../../../layouts/MenuToggler/MenuToggler";
import LayoutCheckboxes from "../../../../layouts/Checkboxes/Checkboxes";

export default function PriceMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleChaptersMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <LayoutMenuToggler title="price">
      <LayoutCheckboxes>
        {["0-150$", "150-200$", "200-250$", ">250-400$", ">400$"]}
      </LayoutCheckboxes>
    </LayoutMenuToggler>
  );
}
