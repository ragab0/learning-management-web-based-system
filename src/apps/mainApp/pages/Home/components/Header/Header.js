import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ScrollAnimatedSection from "../../../../components/ScrollAnimatedFadeup/ScrollAnimatedFadeup";
import HomeImg from "../../../../../../assets/mentorsImgs/codezilla.jpg";

export default function Header() {
  return (
    <header className="home-header">
      <div className="container header-body d-flex justify-content-between align-items-center">
        <ScrollAnimatedSection>
          <div className="header-content">
            <h1>
              Unlock Your Potential with EDEPedia,{" "}
              <span style={{ fontSize: ".6em" }}>DEPI Academy.</span> 👋
            </h1>
            <p>
              Welcome to EDEPedia, where learning knows no bounds. We believe
              that education is the key to personal and professional growth, and
              we're here to guide you on your journey to success.
            </p>
            <Link
              to={"/dashboard/signup"}
              className="btn btn-primary"
              style={{ padding: ".75rem 1.5rem" }}
            >
              Start your instructor journey
            </Link>
          </div>
        </ScrollAnimatedSection>
        <ScrollAnimatedSection isFadeup={true}>
          <div className="header-img">
            <img src={HomeImg} alt="home-img" />
          </div>
        </ScrollAnimatedSection>
      </div>
    </header>
  );
}
