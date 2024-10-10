import React, { useEffect } from "react";
import "./CoursesPage.css";
import RateMenu from "./components/RateMenu/RateMenu";
import ChaptersMenu from "./components/ChaptersMenu/ChaptersMenu";
import PriceMenu from "./components/PriceMenu/PriceMenu";
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
import LineOfInstructors from "../../components/LineOfInstructors/LineOfInstructors";
import LineOfCourses from "../../components/LineOfCourses/LineOfCourses";
import PaginationMain from "../../../../components/PaginationMain/PaginationMain";
import CoursesList from "./components/CoursesList/CoursesList";
import FilterHeader from "./components/FilterHeader/FilterHeader";
import { useSelector } from "react-redux";
import { getCourses } from "../../../../store/slices/coursesSlice";
import usePaginationDispatch from "../../../../hooks/usePaginationDispatch";

export default function CoursesPage() {
  const {
    apiData: { results, totalPages, page: activePage },
    initialState,
    isInitialized,
    loading,
  } = useSelector((state) => state.courses);

  const getCoursesPaginationDispatchor = usePaginationDispatch(getCourses);

  return (
    <div className="courses-page container">
      <h1>Design Courses</h1>
      <h3 className="mt-4">All Development Courses</h3>
      <FilterHeader />
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="filter-optoins d-flex flex-column flex-wrap">
            <RateMenu />
            <ChaptersMenu />
            <PriceMenu />
            <CategoryMenu />
          </div>
        </div>
        <div className="col-lg-9 col-md-9">
          <CoursesList list={results} />
          <PaginationMain
            totalPages={totalPages}
            page={activePage}
            paginationDispather={getCoursesPaginationDispatchor}
          />
        </div>
        <LineOfInstructors title="Popular Mentors" />
        <LineOfCourses title="Featured Courses" />
      </div>
    </div>
  );
}
