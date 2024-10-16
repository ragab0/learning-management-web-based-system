import React from "react";
import { Link } from "react-router-dom";
import courseImg from "../../../../../../assets/course2.png";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import {
  addCartCourse,
  addWishlistCourse,
  fetchCartCourses,
  fetchWishlistCourses,
  removeCartCourse,
  removeWishlistCourse,
} from "../../../../../../store/slices/studentSlice";

export default function Card({ card, isWish, isSkill }) {
  const dispatch = useDispatch();
  if (isSkill) return <Skel />;

  const {
    _id,
    photo,
    title = "Untitled",
    titleHook = "Untitled",
    price = 0,
    author = "Anonymous",
    rating = 0,
    totalRatings = 0,
    details,
  } = card?._id || {};

  async function addCartHandler() {
    dispatch(addCartCourse({ id: _id })).then(() =>
      Promise.all([
        dispatch(fetchWishlistCourses()),
        dispatch(fetchCartCourses()),
      ])
    );
  }
  function addWishHandler() {
    dispatch(addWishlistCourse({ id: _id })).then(() =>
      Promise.all([
        dispatch(fetchCartCourses()),
        dispatch(fetchWishlistCourses()),
      ])
    );
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
          <Link
            to={"."}
            className="btn1 btn border-0 ps-0"
            onClick={isWish ? addCartHandler : addWishHandler}
          >
            {isWish ? "Add to cart" : "Save for later"}
          </Link>
          <Link
            to={"."}
            className="btn text-danger border-0"
            onClick={isWish ? removeWishHandler : removeCartHandler}
          >
            Remove
          </Link>
        </div>
      </div>
    </div>
  );
}

function Skel() {
  return (
    <div className="row">
      <div className="col-4">
        <Skeleton height={200} className="" />
      </div>
      <div className="col-8">
        <Skeleton height={30} />
        <Skeleton height={30} />
        <Skeleton height={30} />
        <Skeleton height={30} />
        <Skeleton height={30} />
        <Skeleton height={25} />
      </div>
    </div>
  );
}
