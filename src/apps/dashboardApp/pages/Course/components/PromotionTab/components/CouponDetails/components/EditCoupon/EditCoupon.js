import React from "react";
import CouponInfo from "./components/CouponInfo/CouponInfo";

export default function EditCoupon() {
  return (
    <div className="container-fluid m-3 ms-0">
      <div className="row">
        <div className="col-lg-8 col-md-6">
          <h3 className="text-capitalize">Coupons / Edit coupon</h3>
        </div>
        <div className="col-lg-4 col-md-6 text-center mt-3 mt-lg-0">
          <div className="btn-group" role="group">
            <button className="btn btn-outline-dark ps-3 pe-3" type="button">
              Draft
            </button>
            <button className="btn btn-success mx-2" type="button">
              Save
            </button>
            <button className="btn btn-primary" type="button">
              Publish
            </button>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 col-sm-9">
          <CouponInfo />
        </div>
      </div>
    </div>
  );
}
