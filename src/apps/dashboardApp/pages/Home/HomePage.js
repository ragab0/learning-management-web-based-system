import React from "react";
import "./HomePage.css";
import ReviewsStats from "../../components/ReviewsStats/ReviewsStatas";
import Banners from "./components/Banners/Banners";
import HomeChart from "./components/HomeChart/HomeChart";
import AddCourse from "../../components/AddCourse/AddCourse";
import LineOfCourses from "./components/LineOfCourses/LineOfCourses";

export default function HomePage() {
  return (
    <div className="home-dash-page">
      <header className="d-flex justify-content-between align-items-center">
        <h1>Dashboard</h1>
        <AddCourse />
      </header>
      <section className=" d-flex gap-4">
        <Banners />
        <HomeChart />
      </section>
      <div>
        <h2>reviews</h2>
        <ReviewsStats />
      </div>
      <LineOfCourses />
    </div>
  );
}
