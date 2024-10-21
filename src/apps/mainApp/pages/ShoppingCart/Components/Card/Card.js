/* eslint-disable no-unreachable */
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
import CourseOvervewCard from "../../../../components/CourseOvervewCard/CourseOvervewCard";

export default function Card({ course = {}, isWish, isSkill }) {
  const dispatch = useDispatch();
  if (isSkill) return <Skel />;

  const { _id } = course._id;

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
    <CourseOvervewCard course={course._id} isTwoSides={true}>
      <hr />
      <div className="courseBtn">
        <Link
          to={"."}
          className="btn1 btn border-0 ps-0"
          style={{ textDecoration: "underline" }}
          onClick={isWish ? addCartHandler : addWishHandler}
        >
          {isWish ? "Add to cart" : "Save for later"}
        </Link>
        <Link
          to={"."}
          className="btn text-danger border-0"
          style={{ textDecoration: "underline" }}
          onClick={isWish ? removeWishHandler : removeCartHandler}
        >
          Remove
        </Link>
      </div>
    </CourseOvervewCard>
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
