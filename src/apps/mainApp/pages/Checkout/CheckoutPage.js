import React from "react";
import "./CheckoutPage.css";
import Details from "../ShoppingCart/Components/Details/Details";

export default function CheckoutPage() {
  return (
    <div className="container">
      <div className="checkout-page mt-4">
        {/* 01 Header - create/import it from the global "src/components/CartPageHeader" */}
        <div className="checkout-body">
          {/* 02 paymentMethods section */}
          {/* 03 summery section */}
        </div>
        CheckoutPage
      </div>
      <aside className="mt-4">
        <Details />
      </aside>
    </div>
  );
}
