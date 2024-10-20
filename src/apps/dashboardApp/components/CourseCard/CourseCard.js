import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function CourseCard({ course, isSkel }) {
  console.log(course, "###");

  if (isSkel) return <Skel />;
  const {
    id,
    status = false,
    title = "untitled!",
    price = 0,
    certificates = 0,
    modules: chapters = [],
    reviews = [],
    orders = [],
    addedToWishlist = 0,
    studentCount = 0,
  } = course;

  return (
    <Link
      to={`/dashboard/courses/${id}`}
      className="course-card d-block dashboard-box h-100"
    >
      <div className="chips d-flex gap-2">
        <div className="chip">{!price ? "Free" : "Paid"}</div>
        <div
          className={`chip ${
            status ? " bg-primary px-5" : " bg-danger"
          } text-white`}
        >
          {status ? "Active" : "UnActive"}
        </div>
      </div>
      <h2 className="course-title">{title}</h2>
      <hr className="divider" />
      <div className="course-details row gy-2">
        <CourseDetail value={`${price}`} label="Price" />
        <CourseDetail value={chapters.length} label="Chapters" />
        <CourseDetail value={reviews.length} label="Reviews" />
        <CourseDetail value={studentCount} label="Orders" />
      </div>
    </Link>
  );
}

function CourseDetail({ value, label }) {
  return (
    <div className="detail-column col-6">
      <div className="detail-value">{value}</div>
      <div className="detail-label">{label}</div>
    </div>
  );
}

function Skel() {
  return (
    <div>
      <div>
        <Skeleton height={40}></Skeleton>
        <Skeleton height={40}></Skeleton>
      </div>
      <Skeleton height={100}></Skeleton>
    </div>
  );
}
