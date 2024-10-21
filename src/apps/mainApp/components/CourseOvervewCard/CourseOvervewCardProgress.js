import React from "react";
import "./CourseOvervewCard.css";
import courseImage from "../../../../assets/course1.png";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import StarLight from "../../../../assets/svgsComps/StarLight";
import StarDark from "../../../../assets/svgsComps/StarDark";

export default function CourseOvervewCard({
  course,
  isEnrolledObj = {},
  skeleton,
}) {
  if (skeleton) return <Skel />;
  const { _id, photo, title } = course;

  function x() {
    console.log(course);
    console.log(course.id);
  }

  return (
    <Link
      onClick={x}
      to={`/${isEnrolledObj.length > 0 ? "study" : "courses"}/${course.id}`}
      className="course-overvew-card d-block h-100"
    >
      <figure className="box d-flex flex-column align-items-start p-3 mb-0 d-block h-100">
        <div className="text-start w-100" style={{ height: "150px" }}>
          <img src={photo || courseImage} alt={title} />
        </div>
        {isEnrolledObj.length > 0 ? (
          <WithProgress progress={{}} />
        ) : (
          <NotEnrolled course={course} />
        )}
      </figure>
    </Link>
  );
}

function Skel() {
  return (
    <div>
      <Skeleton height={150} />
      <div>
        <Skeleton height={20} className=" mt-3" />
        <Skeleton height={20} />
      </div>
    </div>
  );
}

function NotEnrolled({ course = {} }) {
  const {} = course;
  return (
    <fieldset className="pt-3">
      <div className=" text-capitalize">
        <h5 className="text-dark">{course.title}</h5>
        <h6>by {course.instructorName}</h6>
      </div>
      <div className="rate d-flex flex-wrap align-items-center">
        {[...Array(Math.round(course.rating || 0))].map((_, i) => (
          <i className="fa-solid fa-star" key={i}></i>
        ))}
        <h6 className="mb-0">({course.ratingCount} Ratings)</h6>
      </div>
      <div className="desc">
        <h6>
          {course.totalHours} Total Hours. {course.lecturesCount} Lectures.
          {course.level}
        </h6>
      </div>
      <div className="price">
        <p className="mb-0">
          {course.priceCurrency}
          {course.price}
        </p>
      </div>
    </fieldset>
  );
}

function WithProgress({ progress = {}, totalRate }) {
  return (
    <fieldset>
      <div className="progress w-100 my-3" style={{ height: "10px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress.total || 50}%` }}
          aria-valuenow={progress.total || 50}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="rate d-flex align-items-center flex-wrap mt-2">
        {[...Array(5)].map((_, i) =>
          totalRate >= Math.ceil(i + 1) ? (
            <StarLight key={i} />
          ) : (
            <StarDark key={i} />
          )
        )}
        <h6 className="mb-0 ms-2">({totalRate || 0} Ratings)</h6>
      </div>
    </fieldset>
  );
}
