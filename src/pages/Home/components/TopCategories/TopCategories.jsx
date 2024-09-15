import React from "react";
import all from "./TopCategories.css";

export default function TopCategories() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex flex-wrap g-3">
          <div className="col-6 mb-3">
            <h2>Top Categories</h2>
          </div>
          <div className="col-6 d-flex justify-content-end seeAll">
            <a href="">See All</a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className=" d-flex justify-content-center align-content-center flex-wrap box">
              <div className="col-12 text-center">
                <i class="fa-brands fa-telegram categ"></i>
              </div>
              <div className="col-12  text-center">
                <h4 className="text-dark pt-2">Astrology</h4>
                <h6>11 courses</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className=" d-flex justify-content-center align-content-center flex-wrap box">
              <div className="col-12 text-center">
                <i class="fa-solid fa-code categ"></i>
              </div>
              <div className="col-12  text-center">
                <h4 className="text-dark pt-2">Development</h4>
                <h6>12 courses</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className=" d-flex justify-content-center align-content-center flex-wrap box">
              <div className="col-12 text-center">
                <i class="fa-solid fa-suitcase categ"></i>
              </div>
              <div className="col-12  text-center">
                <h4 className="text-dark pt-2">Marketing</h4>
                <h6>12 courses</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className=" d-flex justify-content-center align-content-center flex-wrap box">
              <div className="col-12 text-center">
                <i class="fa-solid fa-atom categ"></i>
              </div>
              <div className="col-12  text-center">
                <h4 className="text-dark pt-2">Physics</h4>
                <h6>14 courses</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
