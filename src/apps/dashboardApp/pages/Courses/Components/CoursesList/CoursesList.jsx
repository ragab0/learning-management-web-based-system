import React from "react";
import "./CoursesList.css";
import { dummyCourses } from "../../../../../../data/dummyData";
import { Link } from "react-router-dom";

export default function CoursesList() {
  return (
    <div className="courses-list ">
      {dummyCourses.map((course) => (
        <Link to={"" + course.id} key={course.id}>
          {course.name} : {course.id}
        </Link>
      ))}
    </div>
  );
}

