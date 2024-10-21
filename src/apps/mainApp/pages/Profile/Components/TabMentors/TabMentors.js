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
import MentorOverviewCard from "../../../../components/MentorOverviewCard/MentorOverviewCard";

export default function TabMentors() {
  const dispatch = useDispatch();
  const {
    apiData: { results = [] },
    loading,
    isInitialized,
  } = useSelector((state) => state.student.mentors);

  useEffect(
    function () {
      dispatch(fetchMentors());
    },
    [dispatch]
  );

  if (loading) return <Loader />;

  if (isInitialized && !results.length) {
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
        {results.map((mentor, i) => (
          <div className="col-md-4">
            <MentorOverviewCard mentor={mentor} key={i} />
          </div>
        ))}
        {/* <PaginationMain /> */}
      </div>
    </div>
  );
}
