import React, { useEffect } from "react";
import "./TabMentors.css";
import { Link } from "react-router-dom";
import PaginationMain from "../../../../../../components/PaginationMain/PaginationMain";
import FilterOptions from "../FilterOptions/FilterOptions";
import { useDispatch, useSelector } from "react-redux";
import NoContent from "../../../../../../components/NoContent/NoContent";
import { fetchMentors } from "../../../../../../store/slices/studentSlice";
import Loader from "../../../../../../components/Loader/Loader";
import { mentorsData } from "../../../../../../data/mentorsData";

export default function TabMentors() {
  const dispatch = useDispatch();
  const {
    apiData: { results, totalPages, page: activePage },
    loading,
    isInitialized,
  } = useSelector((state) => state.student.mentors);

  useEffect(
    function () {
      dispatch(fetchMentors());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (loading) return <Loader />;

  if (isInitialized && !(results?.length > 0)) {
    return <NoContent />;
  }

  return (
    <div className="tab-my-teachers">
      <header className="header col-12">
        <h2>
          Teachers<span className="ms-2 fs-5">({mentorsData.length})</span>
        </h2>
        <FilterOptions />
      </header>
      <div className="row">
        {mentorsData.map((teacher, index) => (
          <Link
            to={`/mentors/${index}`}
            key={index}
            className="teacher-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
          >
            <figure className="teacher box h-100  p-3 mb-0 text-start">
              <div>
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="img-fluid mb-3"
                />

                <h5 className="fw-bold">{teacher.name}</h5>
                <h6 className=" fs-6">{teacher.role}</h6>
              </div>
              <Link to={`chat/${index}`} className="btn btn-primary mt-4">
                Send Message
                <i className="fa-regular fa-envelope"></i>
              </Link>
            </figure>
          </Link>
        ))}
        {/* <PaginationMain /> */}
      </div>
    </div>
  );
}
