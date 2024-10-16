import React, { useEffect, useState } from "react";
import "./CoursesPage.css";
import { lastCoursesData } from "../../../../data/dashStats";
import CourseCard from "../../components/CourseCard/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import NoContent from "../../../../components/NoContent/NoContent";
import { fetchMentorAllCourses } from "../../../../store/slices/mentorSlice";
import Loader from "../../../../components/Loader/Loader";
import { motion } from "framer-motion";

export default function CoursesPage() {
  const dispatch = useDispatch();
  const {
    apiData: { results },
    isInitialized,
    loading,
  } = useSelector((state) => state.mentor.taughtCourses);
  const [isNew, setIsNew] = useState(
    useSelector((state) => state.mentor.createMentorCourse.isInitialized)
  );

  useEffect(
    function () {
      dispatch(fetchMentorAllCourses());
    },
    [dispatch]
  );

  useEffect(function () {
    const timer = setTimeout(function () {
      setIsNew(false);
    }, 5000);
    return function () {
      clearTimeout(timer);
    };
  }, []);

  if (isInitialized && !results?.length) {
    return (
      <div style={{ marginBlock: "100px 200px" }}>
        <NoContent />
      </div>
    );
  }

  if (!isInitialized || loading) {
    return <Loader />;
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
            <div className="col-4 mb-4" key={i}>
              <CourseCard course={course} />
            </div>
          )
        )}
      </section>
    </div>
  );
}
