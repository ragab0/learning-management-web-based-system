import React from "react";
import "./Cart.css";
import Details from "./Details/Details";

export default function LayoutCart({
  children,
  title = "Shopping Cart",
  isCheckoutPage = false,
}) {
  return (
    <div className="layout-cart">
      <div className="container">
        <h1>{title}</h1>
        <div className="layout-cart-body">
          <div className="layout-cart-content">{children}</div>
          <aside className="aside">
            <Details isCheckoutPage={isCheckoutPage} />
          </aside>
        </div>
      </div>
    </div>
  );
}
