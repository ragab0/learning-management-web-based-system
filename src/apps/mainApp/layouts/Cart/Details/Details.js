import React, { useEffect, useState } from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  checkoutCartCourses,
  fetchCartCourses,
} from "../../../../../store/slices/studentSlice";
import Skeleton from "react-loading-skeleton";

export default function Details({ isCheckoutPage = false }) {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const { loading, isInitialized, apiData } = useSelector(
    (state) => state.student.cartCourses
  );

  useEffect(
    function () {
      setTotal(
        apiData.results?.reduce((prev, obj) => prev + obj._id?.price || 0, 0) ||
          0
      );
    },
    [apiData.results]
  );

  useEffect(
    function () {
      dispatch(fetchCartCourses());
    },
    [dispatch]
  );

  function completeHandler() {
    dispatch(checkoutCartCourses());
  }

  if (!isInitialized || loading) {
    return <Skel />;
  }

  return (
    <aside className="details-aside">
      <h3>Order Details</h3>
      <div className="orderDetails p-3 text-black mb-4">
        <div className="orderPrice d-flex justify-content-between my-2">
          <span>Price</span>
          <span className="num">${total.toFixed(2)}</span>
        </div>
        <div className="orderPrice d-flex justify-content-between my-2">
          <span>Discount</span>
          <span className="num">-${total.toFixed(2)}</span>
        </div>
        <div className="orderPrice d-flex justify-content-between my-3">
          <span className=" fw-bolder fs-5">Total</span>
          <span className="num fs-5">$0.00</span>
        </div>
      </div>

      {isCheckoutPage ? (
        <button
          onClick={completeHandler}
          className="text-center w-100 m-auto d-block btn px-5 rounded-3 btn-danger"
        >
          Complete Checkout
        </button>
      ) : (
        <Link
          className={`text-center w-100 m-auto d-block btn px-5 rounded-3 btn-dark ${
            apiData.results?.length > 0 ? "" : "disabled"
          }`}
          to={"/payment/checkout"}
        >
          Proceed to Checkout
        </Link>
      )}
    </aside>
  );
}

function Skel() {
  return (
    <div>
      <Skeleton height={30} />
      <Skeleton height={200} className="mt-2 mb-3" />
      <Skeleton height={50} />
    </div>
  );
}
