import React from "react";
import "./ShoppingCartPage.css";
import Details from "./Components/Details/Details";
import { Link } from "react-router-dom";
import courseImg from "../../../../assets/course2.png";

const CourseCard = ({
  title,
  price,
  author,
  rating,
  totalRatings,
  details,
}) => (
  <div className="theCourse">
    <div className="theCourseImg">
      <img src={courseImg} alt={`${title} course`} />
    </div>
    <div className="theCourseContent ms-2">
      <div className="course-price d-flex ms-1">
        <h5 className="d-block text-black w-75">{title}</h5>
        <h5 className="text-black w-25 fw-bolder fs-4">${price}</h5>
      </div>
      <h6 className="ms-1">By {author}</h6>
      <div className="details ms-1">
        <span className="rate me-2">{rating}</span>
        {[...Array(5)].map((_, i) => (
          <i key={i} className="me-1 fa-solid fa-star"></i>
        ))}
        <span className="ms-1 rateDetails">({totalRatings} ratings)</span>
        <span className="ms-1 courseDetails">{details}</span>
      </div>
      <div className="courseBtn">
        <button className="btn1 border-0" type="button">
          Save for later
        </button>
        <button className="text-danger border-0" type="button">
          Remove
        </button>
      </div>
    </div>
  </div>
);

export default function ShoppingCartPage() {
  const courseDetails = [
    {
      title: "Introduction to User Experience Design",
      price: "45.00",
      author: "John Doe",
      rating: "4.6",
      totalRatings: 250,
      details: "22 Total Hours. 155 Lectures. All levels",
    },
    {
      title: "Introduction to User Experience Design",
      price: "45.00",
      author: "John Doe",
      rating: "4.6",
      totalRatings: 250,
      details: "22 Total Hours. 155 Lectures. All levels",
    },
    {
      title: "Introduction to User Experience Design",
      price: "45.00",
      author: "John Doe",
      rating: "4.6",
      totalRatings: 250,
      details: "22 Total Hours. 155 Lectures. All levels",
    },
  ];

  return (
    <div className="container shopping-cart-wrapper">
      <div className="content">
        <div className="shopping-cart-page">
          {/* Header section */}
          <div className="links">
            <Link className="fs-2 fw-medium text-black me-4" to="">
              Shopping Cart
            </Link>
            <Link className="text-black me-4" to="">
              Categories
            </Link>
            <Link className="text-black me-4" to="">
              Details
            </Link>
            <Link className="shopping me-4" to="">
              Shopping Cart
            </Link>
          </div>
          <p className="my-4">1 Course in cart</p>

          {/* Course cards */}
          {courseDetails.map((course, index) => (
            <div key={index} className="shopping-cart-body mt-5">
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
      <div className="aside mt-5">
        <Details />
      </div>
    </div>
  );
}
