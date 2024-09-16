import React from "react";
import "./OrderSummery.css";
import { Link } from "react-router-dom";

export default function Summery() {
  return (
    <div className="summery">
      Summery
      <Link to={"checkout"}>Proceed to checkout</Link>
    </div>
  );
}
