import React from "react";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div className="details">
      Details section
      <Link to={"checkout"} style={{ fontSize: "25px", color: "blue" }}>
        Proceed to checkout
      </Link>
      <h4 className=" text-dark">Order Details</h4>
      <div className="orderDetails p-3 text-black mt-4 mb-4">
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
          <span className="num fs-5">$290.00</span>
        </div>
      </div>
      <Link
        className=" text-center"
        to={"checkout"}
        style={{ fontSize: "25px", color: "blue" }}
      >
        <button className=" w-100 m-auto d-block btn px-5 rounded-3">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}
