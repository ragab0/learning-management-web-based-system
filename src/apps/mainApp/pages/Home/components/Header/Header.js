import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import HomeImg from "../../../../../../assets/mentorsImgs/codezilla.jpg";
import ScrollAnimations from "../../../../components/ScrollAnimations/ScrollAnimations";

export default function Header() {
  return (
    <header className="home-header">
      <div className="container header-body d-flex justify-content-between align-items-center">
        <div className="header-content">
          <ScrollAnimations animationName="springToRight" delay={0.1}>
            <h1>
              Unlock Your Potential with EDEPedia,{" "}
              <span style={{ fontSize: ".6em" }}>DEPI Academy.</span> 👋
            </h1>
          </ScrollAnimations>
          <ScrollAnimations animationName="springToRight" delay={0.2}>
            <p>
              Welcome to EDEPedia, where learning knows no bounds. We believe
              that education is the key to personal and professional growth, and
              we're here to guide you on your journey to success.
            </p>
          </ScrollAnimations>
          <ScrollAnimations animationName="springToRight" delay={0.3}>
            <Link
              to={"/dashboard/signup"}
              className="btn btn-primary"
              style={{ padding: ".75rem 1.5rem" }}
            >
              Start your instructor journey
            </Link>
          </ScrollAnimations>
        </div>
        <ScrollAnimations
          animationName="scaleIn"
          className="header-img"
          delay={0.5}
        >
          <img src={HomeImg} alt="home-img" />
        </ScrollAnimations>
      </div>
    </header>
  );
}
