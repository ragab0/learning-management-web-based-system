import React from "react";
import "./ShoppingCartPage.css";
import Details from "./Components/Details/Details";

export default function ShoppingCartPage() {
  return (
    <div className="shopping-cart-page">
      {/* 01 Header - create/import it from the global "src/components/CartPageHeader" */}
      ShoppingCartPage
      <div className="shopping-cart-body">
        {/* 02 cards section */}
        {/* 03 details section */}
        <Details />
      </div>
    </div>
  );
}
