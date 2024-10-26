import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/svgsComps/LogoIcon";
import "./Logo.css";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <LogoIcon />
      <span>EDEPedia</span>
    </Link>
  );
}
