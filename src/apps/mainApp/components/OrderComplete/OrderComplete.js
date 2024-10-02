import React from "react";
import "./OrderComplete.css";
import done from "../../../../assets/done.png";

export default function OrderComplete() {
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
