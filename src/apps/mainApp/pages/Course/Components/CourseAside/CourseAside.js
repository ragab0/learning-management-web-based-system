import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import asideImage from "../../../../../../assets/course2.png";
import "./CourseAside.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartCourse,
  addWishlistCourse,
} from "../../../../../../store/slices/studentSlice";
import Skeleton from "react-loading-skeleton";

export default function CourseAside() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cartCourses, wishlistCourses } = useSelector(
    (state) => state.student
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function addToCartHandler() {
    dispatch(addCartCourse({ id }));
  }

  function addToWishlistHandler() {
    dispatch(addWishlistCourse({ id }));
  }

  return (
    <aside className="aside">
      <div className="aside-content">
        <div className="course_image">
          {loading ? (
            <Skeleton height={200} width={300} />
          ) : (
            <img src={asideImage} alt="course2" />
          )}
        </div>

        <div className="course_info fs-5 fw-bold mt-4">
          {loading ? (
            <Skeleton height={25} width={200} />
          ) : (
            <>
              <span className="price">$49</span>
              <strike className="mx-3">$99.5</strike>
              <span className="discount">50% Off</span>
            </>
          )}
        </div>

        <button
          className="btn_add mt-4 form-control border-0"
          onClick={addToCartHandler}
          disabled={loading}
        >
          {loading ? <Skeleton height={40} /> : "Add to cart"}
        </button>

        <button
          className="btn_buy mt-4 form-control"
          onClick={addToWishlistHandler}
          disabled={loading}
        >
          {loading ? <Skeleton height={40} /> : "Add to wishlist"}
        </button>

        <div className="share mt-4 pt-4">
          <h5>Share</h5>
          <ul className="shareLinks mt-4">
            <li>
              <Link to={"#"}>
                <i className="text-primary fs-4 fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <i className="text-black fs-4 fa-brands fa-github"></i>
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <i className="text-danger fs-4 fa-brands fa-google"></i>
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <i className="text-black fs-4 fa-brands fa-x-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <i className="text-success fs-4 fa-brands fa-microsoft"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
