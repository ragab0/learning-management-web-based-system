import React, { useEffect } from "react";
import "./OrderComplete.css";
import done from "../../../../assets/done.png";
import { useDispatch } from "react-redux";
import { unInitCheckout } from "../../../../store/slices/studentSlice";
import { useNavigate } from "react-router-dom";

export default function OrderComplete() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    function () {
      const timer = setTimeout(function () {
        dispatch(unInitCheckout());
        navigate("/profile/courses");
      }, 5000);
      return function () {
        clearTimeout(timer);
      };
    },
    [dispatch, navigate]
  );

  return (
    <div className="order-complete">
      <div className="container">
        <div className="order-complete-content">
          <img alt="order-complete" src={done} />
          <h1>Order Complete</h1>
          <h3>You Will Receive a confirmation email soon! </h3>
        </div>
      </div>
    </div>
  );
}
