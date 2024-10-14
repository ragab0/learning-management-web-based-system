import React from "react";
import "./CheckoutPage.css";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";
import LayoutCart from "../../layouts/Cart/Cart";
import { useSelector } from "react-redux";
import OrderComplete from "../../components/OrderComplete/OrderComplete";

export default function CheckoutPage() {
  const { isInitialized, error } = useSelector(
    (state) => state.student.checkout
  );

  if (isInitialized && !error) {
    return <OrderComplete />;
  }

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
