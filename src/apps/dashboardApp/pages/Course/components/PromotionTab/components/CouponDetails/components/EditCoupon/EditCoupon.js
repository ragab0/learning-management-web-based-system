import React from "react";
import CouponInfo from "./components/CouponInfo/CouponInfo";

export default function EditCoupon() {
  return (
    <div className=" container-fluid m-3 ms-0">
      <div className="row">
        <div className="col-9">
          <div>
            <h3 className="text-black">Coupons / Edit coupon</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="btns d-flex justify-content-around me-4">
            <div className="col-3">
              <button className="btn btn--dark-light btn-outline-dark ps-3 pe-3">
                Draft
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-success ps-3 pe-3"> Save</button>
            </div>
            <div className="col-3">
              <button className="btn btn-primary ps-3 pe-3"> Publish</button>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div>
            <CouponInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
