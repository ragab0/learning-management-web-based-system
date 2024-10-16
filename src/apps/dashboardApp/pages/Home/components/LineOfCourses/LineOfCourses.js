import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../../../components/CourseCard/CourseCard";
import NoContent from "../../../../../../components/NoContent/NoContent";
import { fetchMentorAllCourses } from "../../../../../../store/slices/mentorSlice";
import Skeleton from "react-loading-skeleton";

export default function LineOfCourses() {
  const dispatch = useDispatch();
  const {
    apiData: { results },
    isInitialized,
    loading,
    error,
  } = useSelector((state) => state.mentor.taughtCourses);

  useEffect(
    function () {
      dispatch(fetchMentorAllCourses());
    },
    [dispatch]
  );

  if (isInitialized && error) {
    return <NoContent />;
  }

  if (!isInitialized || loading) {
    return (
      <section>
        {/* <Skeleton width={200} height={30} className="mb-2" /> */}
        <h2>last courses</h2>
        <div className="last-courses-cards row">
          {[...Array(3)].map((course, i) => (
            <div className="col-4 mb-4" key={i}>
              <CourseCard isSkel={true} course={course} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2>last courses</h2>
      <div className="last-courses-cards row">
        {results?.slice(0, 3).map((course, i) => (
          <div className="col-4 mb-4" key={i}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </section>
  );
}
