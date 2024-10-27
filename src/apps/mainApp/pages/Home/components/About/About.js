import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { about } from "../../../../../../data/about";
import ScrollAnimatedSection from "../../../../components/ScrollAnimatedFadeup/ScrollAnimatedFadeup";

export default function About() {
  return (
    <div className="instructors-overviews">
      <div className="container">
        {about.map(({ img, Svgg, title, desc, more }, i) => (
          <section key={i} className="mb-5">
            <ScrollAnimatedSection isFadeup={true}>
              <div
                className={`container row align-items-center justify-content-between ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="col mb-4">{Svgg && <Svgg />}</div>
                <div className="header-content">
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <Link
                    to={i / 2 === 0 ? "/dashboard/signup" : "/courses"}
                    className="btn btn-dark p-3 ps-4 pe-4"
                  >
                    {more}
                    <i className="fa-solid fa-arrow-right ps-2"></i>
                  </Link>
                </div>
              </div>
            </ScrollAnimatedSection>
          </section>
        ))}
      </div>
    </div>
  );
}
