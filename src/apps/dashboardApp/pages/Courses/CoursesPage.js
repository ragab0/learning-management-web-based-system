import React, { useEffect } from "react";
import "./CoursesPage.css";
import CourseCard from "../../components/CourseCard/CourseCard";
import NoContent from "../../../../components/NoContent/NoContent";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  createMentorCourseIsSeen,
  fetchMentorAllCourses,
} from "../../../../store/slices/mentorSlice";

export default function CoursesPage() {
  const dispatch = useDispatch();
  const {
    apiData: { results },
    isInitialized,
    loading,
    error,
  } = useSelector((state) => state.mentor.taughtCourses);
  const { isNew } = useSelector((state) => state.mentor.createMentorCourse);

  useEffect(
    function () {
      dispatch(fetchMentorAllCourses());
    },
    [dispatch]
  );

  useEffect(
    function () {
      const timer = setTimeout(function () {
        dispatch(createMentorCourseIsSeen());
      }, 5000);
      return function () {
        clearTimeout(timer);
      };
    },
    [dispatch]
  );

  if (isInitialized && !results?.length) {
    return (
      <div style={{ marginBlock: "100px 200px" }}>
        <NoContent />
      </div>
    );
  }

  if (isInitialized && error) {
    return <NoContent />;
  }

  if (!isInitialized || loading) {
    return (
      <section className=" container-fluid">
        <Skeleton height={40} width={300} />
        <div className="courses-cards row mt-2">
          {[...Array(9)].map((course, i) => (
            <div className="col-lg-4 col-md-6 mb-4" key={i}>
              <CourseCard isSkel={true} course={course} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className="courses-dash-page">
      <h2>courses</h2>
      <section className="courses-cards row">
        {results?.map((course, i) =>
          isNew && i === 0 ? (
            <motion.div
              className="col-4 mb-4"
              key={i}
              initial={{ scale: 0.9 }}
              animate={{
                scale: [0.9, 1.1, 1],
                backgroundColor: "#BAFFC9",
                borderColor: "#BAFFC9",
              }}
              transition={{
                duration: 0.5,
                scale: {
                  times: [0, 0.5, 1],
                  type: "spring",
                  stiffness: 1000,
                  damping: 20,
                },
              }}
            >
              <CourseCard course={course} />
            </motion.div>
          ) : (
            <div className="col-lg-4 col-md-6 mb-4" key={i}>
              <CourseCard course={course} />
            </div>
          )
        )}
      </section>
    </div>
  );
}
