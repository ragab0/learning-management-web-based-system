import React from "react";
import "./CourseAside.css";
import Skeleton from "react-loading-skeleton";
import EmptyFolder from "../../../../../../assets/svgsComps/EmptyFolder";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartCourse,
  addWishlistCourse,
} from "../../../../../../store/slices/studentSlice";

export default function CourseAside() {
  const dispatch = useDispatch();
  const {
    loading,
    apiData: { result = {} },
  } = useSelector((state) => state.courses.currentCourse);

  function addToCartHandler() {
    dispatch(addCartCourse({ id: _id }));
  }

  function addToWishlistHandler() {
    dispatch(addWishlistCourse({ id: _id }));
  }

  const { _id, price = 0, photo } = result;
  const courseImage = photo || result.modules?.at(0)?.thumbnail;

  return (
    <aside className="aside">
      <div className="aside-content">
        <div className="image-wrapper">
          {loading ? (
            <Skeleton className="h-100" />
          ) : (
            <img src={courseImage} alt="course-thumbnail" />
          )}
        </div>

        <div className="course_info fs-5 fw-bold mt-4">
          {loading ? (
            <Skeleton height={30} />
          ) : (
            <>
              <span className="price">${price}</span>
              <strike className="mx-3">${price}</strike>
              <span className="discount">100% Off</span>
            </>
          )}
        </div>

        {loading ? (
          <>
            <Skeleton height={40} />
            <Skeleton height={40} />
          </>
        ) : (
          <>
            <button
              className="btn_add mt-4 mb-2 form-control border-0"
              onClick={addToCartHandler}
              disabled={loading}
            >
              Add to cart
            </button>
            <button
              className="btn_buy form-control"
              onClick={addToWishlistHandler}
              disabled={loading}
            >
              Add to wishlist
            </button>
          </>
        )}

        <div className="share mt-4 pt-4">
          {loading ? (
            <>
              <Skeleton height={30} className=" w-50" />
              <Skeleton height={40} />
            </>
          ) : (
            <>
              <h5>Share</h5>
              <ul className="shareLinks mt-4">
                {links.map((icon, i) => (
                  <li>
                    <Link to={"#"}>{icon}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}

const links = [
  <i className="text-primary fs-4 fa-brands fa-facebook"></i>,
  <i className="text-black fs-4 fa-brands fa-github"></i>,
  <i className="text-danger fs-4 fa-brands fa-google"></i>,
  <i className="text-black fs-4 fa-brands fa-x-twitter"></i>,
  <i className="text-success fs-4 fa-brands fa-microsoft"></i>,
];
