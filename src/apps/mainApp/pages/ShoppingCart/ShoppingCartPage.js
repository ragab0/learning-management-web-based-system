import React from "react";
import "./ShoppingCartPage.css";
import Cards from "./Components/Cards/Cards";
import LayoutCart from "../../layouts/Cart/Cart";
import { coursesDetails } from "../../../../data/coursesDetails";

export default function ShoppingCartPage() {
  return (
    <div className="shopping-cart-page">
      <LayoutCart>
        <section>
          <h3>1 Course in Cart</h3>
          {coursesDetails.length ? (
            <Cards cards={coursesDetails} />
          ) : (
            "The cart is empty!"
          )}
        </section>
        <section>
          <h3 id="wishlist">Wishlisted Courses</h3>
          <Cards cards={[]} />
        </section>
      </LayoutCart>
    </div>
  );
}
