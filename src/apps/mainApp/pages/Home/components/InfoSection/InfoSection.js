import React from "react";
import "./InfoSection.css";
import { infoSectionData } from "../../../../../../data/infoSectionData";
import ScrollAnimatedSection from "../../../../components/ScrollAnimatedFadeup/ScrollAnimatedFadeup";

export default function InfoSection() {
  return (
    <section className="info-section container d-flex">
      <div className="container">
        <header>
          <ScrollAnimatedSection>
            <h2>Benefits of Joining EDEPedia, DEPI Academy</h2>
          </ScrollAnimatedSection>
        </header>
        <div className="row d-flex justify-content-between">
          {infoSectionData.map((card, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12 gy-4">
              <InfoCard card={card} key={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoCard({ card = {} }) {
  const { Icon, title, description } = card;
  return (
    <ScrollAnimatedSection isFadeup={true} className="h-100">
      <article className="box h-100 mx-auto">
        <Icon />
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </ScrollAnimatedSection>
  );
}
