import React, { useEffect } from "react";
import "./ShoppingCartPage.css";
import Cards from "./Components/Cards/Cards";
import LayoutCart from "../../layouts/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartCourses,
  fetchWishlistCourses,
} from "../../../../store/slices/studentSlice";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const { cartCourses, wishlistCourses } = useSelector(
    (state) => state.student
  );

  useEffect(
    function () {
      dispatch(fetchCartCourses());
      dispatch(fetchWishlistCourses());
    },
    [dispatch]
  );

  return (
    <div className="shopping-cart-page">
      <LayoutCart>
        <section>
          <h3>1 Course in Cart</h3>
          <Cards apiData={cartCourses.apiData} loading={cartCourses.loading} />
        </section>
        <section>
          <h3 id="wishlist">Wishlisted Courses</h3>
          <Cards
            apiData={wishlistCourses.apiData}
            loading={wishlistCourses.loading}
            isWish={true}
          />
        </section>
      </LayoutCart>
    </div>
  );
}
