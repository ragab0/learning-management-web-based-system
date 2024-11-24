import React from "react";
import "./Benefits.css";
import { BenefitsData } from "../../../../../../data/infoSectionData";
import ScrollAnimations from "../../../../components/ScrollAnimations/ScrollAnimations";

export default function Benefits() {
  return (
    <section className="benefits container d-flex">
      <div className="container">
        <header>
          <h2>Benefits of Joining EDEPedia, DEPI Academy</h2>
        </header>
        <div className="row d-flex justify-content-between">
          {BenefitsData.map((card, i) => (
            <ScrollAnimations
              animationName="cardSprintToDown"
              key={i}
              className="col-lg-4 col-md-6 col-sm-12 gy-4"
              delay={0.1 * i}
            >
              <Ben card={card} key={i} />
            </ScrollAnimations>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ben({ card = {} }) {
  const { Icon, title, description } = card;
  return (
    <article className="box h-100 mx-auto">
      <Icon />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
