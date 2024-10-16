import React from "react";
import "./TopCategories.css";
import { Link } from "react-router-dom";
import Telescope from "../../../../../../assets/svgsComps/Telescope";

const catgs = [
  {
    brandClass: <Telescope style={{ margin: "10px" }} />,
    title: "Astrology",
    coursesCount: 11,
  },
  {
    brandClass: "fa-solid fa-code",
    title: "Development",
    coursesCount: 12,
  },
  {
    brandClass: "fa-solid fa-suitcase",
    title: "Marketing",
    coursesCount: 12,
  },
  {
    brandClass: "fa-solid fa-atom",
    title: "Physics",
    coursesCount: 14,
  },
];

export default function TopCategories() {
  return (
    <section className="top-catgs">
      <div className="container">
        <header className="d-flex justify-content-between mb-3">
          <h2>Top Categories</h2>
          <Link to="#" className="btn btn-link text-decoration-none">
            See All
          </Link>
        </header>
        <div className="row d-flex justify-content-between">
          {catgs.map(({ brandClass, title, coursesCount }, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
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
    </section>
  );
}
