import React from "react";
import all from "./Statistics.css";

export default function Statistics() {
  return (
    <div>
      <div className="container mb-5">
        <div className="row statistics p-4">
          <div className="col-3">
            <div className="stat text-center">
              <h2>250+</h2>
              <p className="disc">Courses by our best mentors</p>
            </div>
          </div>
          <div className="col-3">
            <div className="stat text-center">
              <h2>1000+</h2>
              <p className="disc">Courses by our best mentors</p>
            </div>
          </div>
          <div className="col-3">
            <div className="stat text-center">
              <h2>15+</h2>
              <p className="disc">Courses by our best mentors</p>
            </div>
          </div>
          <div className="col-3">
            <div className="text-center">
              <h2>2400+</h2>
              <p className="disc">Courses by our best mentors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
