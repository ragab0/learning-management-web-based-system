import React from "react";
import "./CheckoutPage.css";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";
import LayoutCart from "../../layouts/Cart/Cart";

export default function CheckoutPage() {
  return (
    <div className="checkout-page">
      <LayoutCart title="Checkout Page" isCheckoutPage={true}>
        <div className="checkout-page-content">
          <PaymentMethods />
        </div>
      </LayoutCart>
    </div>
  );
}
