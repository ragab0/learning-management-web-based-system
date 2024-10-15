import React from "react";
import "./CoursesPage.css";
import { lastCoursesData } from "../../../../data/dashStats";
import CourseCard from "../../components/CourseCard/CourseCard";

export default function CoursesPage() {
  return (
    <div className="courses-dash-page">
      <h2>courses</h2>
      <section className="courses-cards row">
        {[...lastCoursesData, ...lastCoursesData, ...lastCoursesData].map(
          (course, i) => (
            <div className="col-4 mb-4" key={i}>
              <CourseCard course={course} />
            </div>
          )
        )}
      </section>
    </div>
  );
}
