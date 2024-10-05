import React from "react";
import "./CoursesList.css";
import CourseOvervewCard from "../../../../components/CourseOvervewCard/CourseOvervewCard";
import { courses } from "../../../../../../data/dummyData";

export default function CoursesList() {
  return (
    <div className="row">
      {courses.map((course, i) => (
        <div className="col-lg-4 col-md-6 mb-4" key={i}>
          <CourseOvervewCard course={course} courseId={i} />
        </div>
      ))}
    </div>
  );
}
