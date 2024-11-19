import React, { useEffect, useState } from "react";
import "./CourseContentNav.css";
import Star from "../../../../../../assets/svgsComps/Star";
import ArrowIcon from "../../../../../../assets/svgsComps/ArrowIcon";
import CloseIcon from "../../../../../../assets/svgsComps/CloseIcon";
import StarLight from "../../../../../../assets/svgsComps/StarLight";
import StarDark from "../../../../../../assets/svgsComps/StarDark";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  saveReview,
  fetchCourseReviews,
  getReview,
  deleteReview,
} from "../../../../../../store/slices/reviewsSlice";

export default function CourseContentNav({ title }) {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const {
    apiData: { result = {} },
    loading,
    isInitialized,
  } = useSelector((state) => state.reviews.currentStudyCourseReview);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();

  useEffect(
    function () {
      dispatch(getReview({ id: courseId })).then(({ payload, error }) => {
        if (!error) {
          reset(payload.result);
        }
      });
    },
    [dispatch, courseId]
  );

  function provideOpenHandler() {
    setIsOpen(true);
  }

  function provideCloseHandler() {
    setIsOpen(false);
    reset();
  }

  function currentRatingHandler(count) {
    setValue("rating", count);
  }

  function submitHandler(data) {
    const myData = {
      course: courseId,
      rating: data.rating || 5,
      review: data.review,
    };

    dispatch(saveReview(myData))?.then(({ error }) => {
      if (!error) {
        dispatch(fetchCourseReviews({ id: courseId }));
      }
    });
  }

  function deleteHandler() {
    dispatch(deleteReview({ anotherDynamicPath: `/${courseId}` }))?.then(
      ({ error }) => {
        if (!error) {
          dispatch(fetchCourseReviews({ id: courseId }));
          reset();
        }
      }
    );
  }

  const currentRating = watch("rating", 5);

  return (
    <>
      <div className={`modal ${isOpen ? "d-flex" : "d-none"}`}>
        <form className="modal-box">
          <div className=" d-flex align-items-center justify-content-between mb-4">
            {loading && <i className="fa fa-refresh fa-spin"></i>}
            <i
              className="btn btn-light ms-auto d-block"
              style={{
                width: " fit-content",
                borderColor: "var(--grey-border)",
              }}
              onClick={provideCloseHandler}
            >
              <CloseIcon />
            </i>
          </div>

          <div className={`modal-box-content ${loading ? "COMING" : ""}`}>
            <div className="d-flex gap-1">
              {[...new Array(5)].map((_, i) => (
                <span
                  key={i}
                  className=" cursor-pointer d-block"
                  onMouseDown={() => currentRatingHandler(i + 1)}
                >
                  {i < currentRating ? (
                    <StarLight width={30} height={30} />
                  ) : (
                    <StarDark width={30} height={30} />
                  )}
                </span>
              ))}
            </div>
            <textarea
              className={`form-control ${
                errors?.review ? "is-invalid border-danger" : ""
              }`}
              placeholder="Tell us about your own personal experience taking this course. Was it a good match for you?"
              rows={5}
              {...register("review", {
                required: "review must not be empty!",
              })}
            ></textarea>
            <button
              type="submit"
              className="btn btn-dark py-3 rounded-0"
              onClick={handleSubmit(submitHandler)}
            >
              Save
            </button>
            <button
              className={`btn btn-outline-danger ${
                result.course ? "" : "COMING"
              }`}
              onClick={handleSubmit(deleteHandler)}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
      <nav className="course-content-nav d-flex flex-wrap align-items-center justify-content-between ps-4">
        <div className="d-flex align-items-center gap-4">
          <Link to="/profile/courses" className="btn">
            <ArrowIcon stroke="#fff" />
          </Link>
          <h1 className="text-white h5">{title}</h1>
        </div>
        <button
          className="btn text-white d-flex ms-auto align-items-center gap-2"
          onClick={provideOpenHandler}
        >
          {result.course ? (
            <>
              <StarLight /> Edit
            </>
          ) : (
            <>
              <Star /> Provide
            </>
          )}{" "}
          Rating
        </button>
      </nav>
    </>
  );
}
