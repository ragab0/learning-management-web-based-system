import React from "react";
import { Link } from "react-router-dom";
import courseImg from "../../../../../../assets/course2.png";
import { useDispatch } from "react-redux";
import {
  addCartCourse,
  addWishlistCourse,
  moveCartCourseToWishlist,
  removeCartCourse,
  removeWishlistCourse,
} from "../../../../../../store/slices/studentSlice";

export default function Card({ card, isWish, loading }) {
  const dispatch = useDispatch();
  if (!card) return;

  const {
    _id,
    photo,
    title,
    titleHook,
    price,
    author,
    rating,
    totalRatings,
    details,
  } = card._id;

  function addCartHandler() {
    dispatch(addCartCourse({ id: _id }));
  }
  function addWishHandler() {
    dispatch(addWishlistCourse({ id: _id }));
  }
  function removeCartHandler() {
    dispatch(removeCartCourse({ id: _id }));
  }
  function removeWishHandler() {
    dispatch(removeWishlistCourse({ id: _id }));
  }

  return (
    <div to="#" className="theCourse">
      <Link to="#" className="theCourseImg">
        <img src={courseImg} alt={`${title} course`} />
      </Link>
      <div className="theCourseContent ms-2">
        <div className="course-price d-flex justify-content-between">
          <Link to="#">
            <h5 className="d-block text-black">{title}</h5>
          </Link>
          <h5 className="text-black fw-bolder fs-4">${price}</h5>
        </div>
        <h6>By {author}</h6>
        <div className="details mb-2">
          <span className="rate me-2">{rating}</span>
          {[...Array(5)].map((_, i) => (
            <i key={i} className="me-1 fa-solid fa-star"></i>
          ))}
          <span className="rateDetails me-2">({totalRatings} ratings)</span>
          <span className="courseDetails">{details}</span>
        </div>
        <div className="courseBtn">
          <button
            className="btn1 btn border-0 ps-0"
            type="button"
            onClick={isWish ? addCartHandler : addWishHandler}
          >
            {isWish ? "Add to cart" : "Save for later"}
          </button>
          <button
            className="btn text-danger border-0"
            type="button"
            onClick={isWish ? removeWishHandler : removeCartHandler}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
