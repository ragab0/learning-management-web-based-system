import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-dash-page">
      <header className="d-flex justify-content-between align-items-center">
        <h1>Dashboard</h1>
        <Link to={"#"} className="btn btn-primary">
          Add Course
        </Link>
      </header>
      <section></section>
      {/* line of reviews */}
      <section></section>
      {/* line of couress */}
      <section></section>
    </div>
  );
}
