import React from "react";
import "./HomePage.css";
import ReviewsStats from "../../components/ReviewsStats/ReviewsStatas";
import CourseCard from "../../components/CourseCard/CourseCard";
import Banners from "./components/Banners/Banners";
import HomeChart from "./components/HomeChart/HomeChart";
import { lastCoursesData } from "../../../../data/dashStats";
import AddCourse from "../../components/AddCourse/AddCourse";

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
      <section>
        <h2>last courses</h2>
        <div className="last-courses-cards row">
          {[...lastCoursesData].map((course, i) => (
            <div className="col-4 mb-4" key={i}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
