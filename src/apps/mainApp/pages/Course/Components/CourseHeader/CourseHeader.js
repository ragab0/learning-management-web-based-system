import React from "react";
import "./CourseHeader.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import myImage from "../../../../../../assets/customersImgs/cust5Heigh.png";
import ArrowChevron from "../../../../../../assets/svgsComps/ChevronRightSmall";

export default function CourseHeader({ course }) {
  const {
    loading,
    apiData: { result = {} },
  } = useSelector((state) => state.courses.currentCourse);

  if (loading) {
    return <Skel />;
  }

  const { title, titleHook, mentor = {}, modules = [], languages } = result;
  const { fname, lname, headline, photo, _id: mentorId } = mentor;
  const chaptersCount = modules.length;
  const lessonsCount = modules.reduce(
    (sum, curr) => sum + curr.lessons.length,
    0
  );

  return (
    <div className="course-header content">
      <div className="links">
        <Link
          className="btn btn-link text-decoration-none ms-0 ps-0 text-black"
          to="/"
        >
          Home
        </Link>
        <ArrowChevron />
        <Link
          className="btn btn-link text-decoration-none ms-0 text-black"
          to="/courses"
        >
          Categories
        </Link>
        <ArrowChevron />
        <Link className="btn btn-link text-decoration-none ms-0 user" to={"#"}>
          {title}
        </Link>
      </div>
      <div className="section1">
        <h1>{title}</h1>
        <p className="my-3">
          {title} |{" "}
          <span className="desc">
            {chaptersCount} Chapters - {lessonsCount} Lectures
          </span>
        </p>
        <div className="my-3 user_details">
          <Link to={`/mentors/${mentorId}`}>
            <img src={photo} alt="user" />
          </Link>
          <span className="userName">
            <span>Created by </span>
            <Link
              to={`/mentors/${mentorId}`}
              className="user_name text-capitalize d-inline-block"
            >
              {fname + " " + lname}
            </Link>
          </span>
        </div>
        <div className="lang mt-3 text-capitalize">
          <i className="globe fa-solid fa-globe fs-5"></i>
          <span className="language ms-2">{languages}</span>
        </div>
      </div>
    </div>
  );
}

function Skel() {
  return (
    <div>
      <Skeleton height={30} className=" w-50" />
      <Skeleton height={30} className=" w-75" />
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} height={40} />
      ))}
    </div>
  );
}
