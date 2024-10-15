import React from "react";
import "./Banners.css";
import Banner from "../../../../../../assets/svgsComps/dashboard/Banner";
import { bannersData } from "../../../../../../data/dashStats";

export default function Banners() {
  return (
    <section className="banners">
      {bannersData.map(({ count, title }, i) => (
        <article className="banner dashboard-box" key={i}>
          <Banner />
          <div className={"banner-content"}>
            <div className={"commission-value"}>{count}</div>
            <div className={"commission-label"}>{title}</div>
          </div>
        </article>
      ))}
    </section>
  );
}
