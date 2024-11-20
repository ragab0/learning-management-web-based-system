import React from "react";
import "./TabMyReviews.css";
import NoContent from "../../../../../../components/NoContent/NoContent";
import Reviews from "../../../../../../components/Reviews/Reviews";
import MyHeader from "../MyHeader/MyHeader";
import PaginationMain from "../../../../../../components/PaginationMain/PaginationMain";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { fetchStudentReviews } from "../../../../../../store/slices/reviewsSlice";

const sortOptions = [
  { name: "new", value: "date" },
  { name: "old", value: "-date" },
];

export default function TabMyReviews() {
  const {
    apiData: { results = [], totalPages, page: activePage },
    loading,
    isInitialized,
  } = useSelector((state) => state.reviews.studentReviews);

  return (
    <div className="tab-reviews">
      <MyHeader
        title="reviews"
        sortOptions={sortOptions}
        thinkAction={fetchStudentReviews}
      />
      {isInitialized && !results.length ? (
        <NoContent />
      ) : isInitialized && !loading ? (
        <Reviews list={results} />
      ) : (
        <Skel />
      )}
      <PaginationMain
        totalPages={totalPages}
        activePage={activePage}
        pageSize={3}
        thunkAction={fetchStudentReviews}
      />
    </div>
  );
}

function Skel() {
  return <Skeleton count={5} height={100} className=" mb-3" />;
}
