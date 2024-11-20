import React from "react";
import "./TabMyTeachers.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMentors } from "../../../../../../store/slices/studentSlice";
import NoContent from "../../../../../../components/NoContent/NoContent";
import MentorOverviewCard from "../../../../components/MentorOverviewCard/MentorOverviewCard";
import Skeleton from "react-loading-skeleton";
import MyHeader from "../MyHeader/MyHeader";
import PaginationMain from "../../../../../../components/PaginationMain/PaginationMain";

const sortOptions = [
  { name: "name (a-z)", value: "name" },
  { name: "name (z-a)", value: "-name" },
];

export default function TabMyTeachers() {
  const dispatch = useDispatch();
  const {
    apiData: { results = [], totalPages, page: activePage },
    isInitialized,
    loading,
  } = useSelector((state) => state.student.mentors);

  return (
    <div className="tab-my-teachers">
      {/* Teachers<span className="ms-2 fs-5">({mentorsData.length})</span> */}
      <MyHeader
        title="teachers"
        sortOptions={sortOptions}
        thinkAction={fetchMentors}
      />
      <div className="row">
        {isInitialized && !results.length ? (
          <NoContent />
        ) : isInitialized && !loading ? (
          results.map((mentor, i) => (
            <div key={i} className="col-md-4">
              <MentorOverviewCard mentor={mentor} key={i} />
            </div>
          ))
        ) : (
          <Skel />
        )}
      </div>
      <PaginationMain
        totalPages={totalPages}
        activePage={activePage}
        pageSize={3}
        thunkAction={fetchMentors}
      />
    </div>
  );
}

function Skel() {
  return <Skeleton count={5} height={100} className=" mb-3" />;
}
