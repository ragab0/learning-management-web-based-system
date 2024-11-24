import React, { useEffect, useRef } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { about } from "../../../../../../data/about";
import ScrollAnimations from "../../../../components/ScrollAnimations/ScrollAnimations";

export default function About() {
  const teamSvg = useRef(null);

  useEffect(function () {
    const Ragab = document.querySelector(
      `svg g[clip-path="url(#clip0_5752_4210)"] + g > g:nth-of-type(2)`
    );
    Ragab.innerHTML = `<a target="_blank" href="https://www.linkedin.com/in/ragab-eid">${Ragab.outerHTML}</a>`;
  }, []);

  return (
    <section className="instructors-overviews">
      <div className="container">
        {about.map(({ Svgg, title, desc, more }, i) => (
          <section key={i} className="mb-5">
            <div
              className={`container row align-items-center justify-content-between ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <ScrollAnimations
                className="col mb-4"
                animationName="scaleIn"
                delay={0.1}
              >
                <div ref={i === 1 ? teamSvg : null}>
                  <Svgg />
                </div>
              </ScrollAnimations>
              <div className="header-content">
                <ScrollAnimations
                  animationName={i % 2 === 0 ? "springToLeft" : "springToRight"}
                  delay={0.1}
                >
                  <h2>{title}</h2>
                </ScrollAnimations>
                <ScrollAnimations
                  animationName={i % 2 === 0 ? "springToLeft" : "springToRight"}
                  delay={0.2}
                >
                  <p>{desc}</p>
                </ScrollAnimations>
                <ScrollAnimations
                  animationName={i % 2 === 0 ? "springToLeft" : "springToRight"}
                  delay={0.3}
                >
                  <Link
                    to={i / 2 === 0 ? "/dashboard/signup" : "/courses"}
                    className="btn btn-dark p-3 ps-4 pe-4"
                  >
                    {more}
                    <i className="fa-solid fa-arrow-right ps-2"></i>
                  </Link>
                </ScrollAnimations>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
