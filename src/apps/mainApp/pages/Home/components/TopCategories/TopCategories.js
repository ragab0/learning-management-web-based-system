import React from "react";
import "./TopCategories.css";
import { Link } from "react-router-dom";
import { topCatgs } from "../../../../../../data/topCatgs";

export default function TopCategories() {
  return (
    <div className="top-catgs">
      <div className="container">
        <header className="d-flex justify-content-between">
          <h2>Top Categories</h2>
          <Link to="#" className="btn btn-link text-decoration-none">
            See All
          </Link>
        </header>
        <div className="row d-flex justify-content-between">
          {topCatgs.map(({ brandClass, title, coursesCount }, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-sm-12 gy-4">
              <div className="box d-flex justify-content-center align-content-center flex-wrap">
                <div className="brand-img col-12 text-center">
                  <i className={brandClass}></i>
                </div>
                <div className="col-12 text-center">
                  <h4 className="text-dark pt-2">{title}</h4>
                  <h6>{coursesCount} courses</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
