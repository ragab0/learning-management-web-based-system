import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function CourseCard({ course, isSkel }) {
  if (isSkel) return <Skel />;
  const {
    id,
    isFree = true,
    isActive = false,
    title = "untitled!",
    price = 0,
    certificates = 0,
    chapters = [],
    reviews = [],
    orders = [],
    addedToWishlist = 0,
  } = course;

  return (
    <Link
      to={`/dashboard/courses/${id}`}
      className="course-card d-block dashboard-box"
    >
      <div className="chips d-flex gap-2">
        <div className="chip">{isFree ? "Free" : "Paid"}</div>
        <div className={`chip ${isActive ? "" : " bg-danger text-white"}`}>
          {isActive ? "Active" : "UnActive"}
        </div>
      </div>
      <h2 className="course-title">{title}</h2>
      <hr className="divider" />
      <div className="course-details row gy-2">
        <CourseDetail value={`${price}`} label="Price" />
        <CourseDetail value={certificates} label="Certificates" />
        <CourseDetail value={chapters.length} label="Chapters" />
        <CourseDetail value={reviews.length} label="Reviews" />
        <CourseDetail value={orders.length} label="Orders" />
        <CourseDetail value={addedToWishlist} label="Added to Shelf" />
      </div>
    </Link>
  );
}

function CourseDetail({ value, label }) {
  return (
    <div className="detail-column col-4">
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
