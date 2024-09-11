import React from "react";
import { Link } from "react-router-dom";
import { imgsComps } from "../../assets";
import "./Logo.css";

const { LogoIcon } = imgsComps;

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <LogoIcon />
      <span>LMS-Depi</span>
    </Link>
  );
}
