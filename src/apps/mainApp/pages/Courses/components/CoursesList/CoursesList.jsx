import React from "react";
import "./CoursesList.css";
import CourseOvervewCard from "../../../../components/CourseOvervewCard/CourseOvervewCard";
import { useSelector } from "react-redux";

export default function CoursesList({ list, isLoading }) {
  const {
    apiData: { results },
    isInitialized,
    loading,
  } = useSelector((state) => state.courses);

  if (!results?.length && isInitialized) {
    return <h1 className=" my-5 text-center">There is no courses to show!</h1>;
  }

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="row">
      {isInitialized && !loading
        ? results?.map((course, i) => (
            <div className="col-lg-4 col-md-6 mb-4" key={i}>
              <CourseOvervewCard course={course} isLoading={isLoading} />
            </div>
          ))
        : [...Array(10)].map((course, i) => (
            <div className="col-lg-4 col-md-6 mb-4" key={i}>
              <CourseOvervewCard skeleton={true} />
            </div>
          ))}
    </div>
  );
}
