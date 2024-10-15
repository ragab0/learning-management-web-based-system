import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  const {
    isFree,
    title,
    price,
    certificates,
    chapters,
    reviews,
    orders,
    addedToWishlist,
  } = course;

  return (
    <Link
      to={`/dashboard/courses/${0}`}
      className="course-card d-block dashboard-box"
    >
      <div className="chip">{isFree ? "Free" : "Paid"}</div>
      <h2 className="course-title">{title}</h2>
      <hr className="divider" />
      <div className="course-details row gy-2">
        <CourseDetail value={`${price}`} label="Price" />
        <CourseDetail value={certificates} label="Certificates" />
        <CourseDetail value={chapters} label="Chapters" />
        <CourseDetail value={reviews} label="Reviews" />
        <CourseDetail value={orders} label="Orders" />
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
