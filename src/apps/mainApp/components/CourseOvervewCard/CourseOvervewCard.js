import React from "react";
import "./CourseOvervewCard.css";
import courseImage from "../../../../assets/course1.png";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import StarLight from "../../../../assets/svgsComps/StarLight";
import StarDark from "../../../../assets/svgsComps/StarDark";

export default function CourseOvervewCard({ course, skeleton }) {
  if (skeleton) return <Skel />;
  const {
    _id,
    photo,
    title,
    modules = [],
    mentor = {},
    rating,
    price,
  } = course;
  const { fname, lname } = mentor;
  const coursePhoto = photo || modules[0]?.thumbnail || courseImage;
  const chaptersCount = modules.length;
  const lessonsCount = modules.reduce(
    (sum, curr) => sum + curr.lessons.length,
    0
  );
  const long = modules
    .map(({ lessons }, i) =>
      lessons.reduce(
        (prev, curr) => prev + curr.duration.lengthSec / (60 * 60),
        0
      )
    )
    .reduce((prev, curr) => prev + curr, 0)
    .toFixed(2);

  return (
    <Link
      to={`/${"courses"}/${_id}`}
      className="course-overvew-card d-block h-100"
    >
      <figure className="box d-flex flex-column align-items-start p-3 mb-0 d-block h-100">
        <div className="text-start w-100">
          <img src={coursePhoto} alt={title} className=" rounded-2" />
        </div>
        <fieldset className="pt-3">
          <div className=" text-capitalize">
            <h5 className="text-dark">{course.title}</h5>
            <h6>
              by {fname} {lname}
            </h6>
          </div>
          {rating && (
            <div className="rate d-flex flex-wrap align-items-center">
              {[...Array(Math.round(rating))].map((_, i) => (
                <i className="fa-solid fa-star" key={i}></i>
              ))}
              <h6 className="mb-0">({course.ratingCount} Ratings)</h6>
            </div>
          )}
          <div className="desc">
            <h6>
              {chaptersCount} Total Chapters - {lessonsCount} Lectures - {long}{" "}
              Hrs
              {course.level}
            </h6>
          </div>
          <div className="price">
            {price ? (
              <p className="mb-0">${price}</p>
            ) : (
              <button className="btn btn-primary py-0">free</button>
            )}
          </div>
        </fieldset>
      </figure>
    </Link>
  );
}

function Skel() {
  return (
    <div>
      <Skeleton height={250} />
      <div>
        <Skeleton height={20} className=" mt-3" />
        <Skeleton height={20} />
      </div>
    </div>
  );
}
