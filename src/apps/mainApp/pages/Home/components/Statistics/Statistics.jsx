import React from "react";
import "./Statistics.css";

const statistics = [
  {
    title: "250+",
  },
  {
    title: "1000+",
  },
  {
    title: "15+",
  },
  {
    title: "2400+",
  },
];

export default function Statistics() {
  return (
    <section className="statistics-section">
      <div className="container">
        <div className="row stats">
          {statistics.map(({ title }, i) => (
            <div
              key={i}
              className="stat-card col d-flex justify-content-center text-center position-relative"
            >
              <div className="stat-card-content">
                <h2>{title}</h2>
                <p>Courses by our best mentors</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
