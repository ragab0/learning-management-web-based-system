import React, { useState } from "react";
import "./Details.css";
import { Link, useNavigate } from "react-router-dom";

export default function Details({ isCheckoutPage = false }) {
  const navigate = useNavigate();
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  function completeHandler() {
    setIsPaymentCompleted(true);
    navigate("done");
  }

  return (
    <aside className="details-aside">
      <h3>Order Details</h3>
      <div className="orderDetails p-3 text-black mb-4">
        <div className="orderPrice d-flex justify-content-between my-2">
          <span>Price</span>
          <span className="num">$300.00</span>
        </div>
        <div className="orderPrice d-flex justify-content-between my-2">
          <span>Discount</span>
          <span className="num">-$10.00</span>
        </div>
        <div className="orderPrice d-flex justify-content-between my-2">
          <span>Tax</span>
          <span className="num">$20.00</span>
        </div>
        <div className="orderPrice d-flex justify-content-between my-3">
          <span className=" fw-bolder fs-5">Total</span>
          <span className="num fs-5">$00.00</span>
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
          className="text-center w-100 m-auto d-block btn px-5 rounded-3 btn-dark"
          to={"/payment/checkout"}
        >
          Proceed to Checkout
        </Link>
      )}
    </aside>
  );
}
