import React from "react";
import "./ShoppingCartPage.css";
import Cards from "./Components/Cards/Cards";
import LayoutCart from "../../layouts/Cart/Cart";
import { useSelector } from "react-redux";
import Loader from "../../../../components/Loader/Loader";
import WishCards from "./Components/WishCards/WishCards";

export default function ShoppingCartPage() {
  const { cartCourses, wishlistCourses } = useSelector(
    (state) => state.student
  );
  const { isInitialized, loading } = useSelector((state) => state.auth.login);

  if (!isInitialized || loading) {
    return <Loader />;
  }

  return (
    <div className="shopping-cart-page">
      <LayoutCart>
        <section>
          <h3>{cartCourses.apiData.results?.length || 0} in Cart!</h3>
          <Cards />
        </section>
        <section id="wishlist">
          <h3>{wishlistCourses.apiData.results?.length || 0} in Wishlist!</h3>
          <WishCards />
        </section>
      </LayoutCart>
    </div>
  );
}
