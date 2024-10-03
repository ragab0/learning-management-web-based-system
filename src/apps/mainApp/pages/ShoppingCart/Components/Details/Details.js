import React from "react";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div className="details">
      Details section
      <Link to={"checkout"} style={{ fontSize: "25px", color: "blue" }}>
        Proceed to checkout
      </Link>
    </div>
  );
}
