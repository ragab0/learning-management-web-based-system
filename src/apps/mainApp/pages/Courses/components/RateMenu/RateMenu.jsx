import React from "react";
import Rates from "../../../../components/Rates/Rates";
import LayoutMenuToggler from "../../../../layouts/MenuToggler/MenuToggler";

export default function RateMenu({ showCheckboxes = true }) {
  return (
    <LayoutMenuToggler title="rate">
      <Rates showCheckboxes={showCheckboxes} />
    </LayoutMenuToggler>
  );
}
