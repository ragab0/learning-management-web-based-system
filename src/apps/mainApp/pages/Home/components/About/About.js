import React, { useEffect, useRef } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { about } from "../../../../../../data/about";
import ScrollAnimatedSection from "../../../../components/ScrollAnimatedFadeup/ScrollAnimatedFadeup";

export default function About() {
  const teamSvg = useRef(null);

  useEffect(function () {
    const Ragab = document.querySelector(
      `svg g[clip-path="url(#clip0_5752_4210)"] + g > g:nth-of-type(2)`
    );

    Ragab.innerHTML = `<a target="_blank" href="https://www.linkedin.com/in/ragab-eid">${Ragab.outerHTML}</a>`;
  }, []);

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
                <div className="col mb-4">
                  {Svgg && (
                    <div ref={i === 1 ? teamSvg : null}>
                      <Svgg />
                    </div>
                  )}
                </div>
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
