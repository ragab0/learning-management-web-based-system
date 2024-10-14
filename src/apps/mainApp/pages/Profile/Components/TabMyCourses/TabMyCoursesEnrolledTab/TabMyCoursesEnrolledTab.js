import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnrolledCourses } from "../../../../../../../store/slices/studentSlice";
import CourseOvervewCard from "../../../../../components/CourseOvervewCard/CourseOvervewCard";
import FilterOptions from "../../FilterOptions/FilterOptions";
import PaginationMain from "../../../../../../../components/PaginationMain/PaginationMain";
import NoContent from "../../../../../../../components/NoContent/NoContent";

export default function TabMyCoursesEnrolledTab() {
  const dispatch = useDispatch();
  const {
    apiData: { results, totalPages, page: activePage },
    loading,
    isInitialized,
  } = useSelector((state) => state.student.enrolledCourses);

  useEffect(
    function () {
      dispatch(fetchEnrolledCourses());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (isInitialized && !(results?.length > 0)) {
    return <NoContent />;
  }

  return (
    <div>
      <FilterOptions />
      <div className="row">
        {isInitialized && !loading
          ? results?.map((course, i) => (
              <div className="col-lg-4 col-md-6 mb-4" key={i}>
                <CourseOvervewCard course={course} isEnrolledObj={{}} />
              </div>
            ))
          : [...Array(6)].map((course, i) => (
              <div className="col-lg-4 col-md-6 mb-4" key={i}>
                <CourseOvervewCard skeleton={true} />
              </div>
            ))}
        <PaginationMain
          totalPages={totalPages}
          activePage={activePage}
          pageSize={3}
          thunkAction={fetchEnrolledCourses}
        />
      </div>
    </div>
  );
}
