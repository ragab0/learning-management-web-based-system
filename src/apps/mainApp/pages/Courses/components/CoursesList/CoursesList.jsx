import React from "react";
import "./CoursesList.css";
import CourseOvervewCard from "../../../../components/CourseOvervewCard/CourseOvervewCard";

export default function CoursesList({ list }) {
  if (!list) {
    return <h1 className=" my-5 text-center">There is no courses to show!</h1>;
  }

  return (
    <div className="row">
      {list.map((course, i) => (
        <div className="col-lg-4 col-md-6 mb-4" key={i}>
          <CourseOvervewCard course={course} />
        </div>
      ))}
    </div>
  );
}
