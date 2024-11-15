import React, { useEffect } from "react";
import "./TabMyReviews.css";
import NoContent from "../../../../../../components/NoContent/NoContent";
import Reviews from "../../../../../../components/Reviews/Reviews";
import MyHeader from "../MyHeader/MyHeader";
import PaginationMain from "../../../../../../components/PaginationMain/PaginationMain";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../../../../store/slices/studentSlice";
import { reviewsData } from "../../../../../../data/reviewsData";

const sortOptions = [
  { name: "new", value: "date" },
  { name: "old", value: "-date" },
];

export default function TabMyReviews() {
  const dispatch = useDispatch();
  const {
    apiData: { results = [], totalPages, page: activePage },
    loading,
    isInitialized,
  } = useSelector((state) => state.student.reviews);

  useEffect(
    function () {
      dispatch(fetchReviews());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="tab-reviews">
      <MyHeader
        title="reviews"
        sortOptions={sortOptions}
        thinkAction={fetchReviews}
      />
      {isInitialized && !results.length ? (
        <NoContent />
      ) : isInitialized && !loading ? (
        <Reviews list={reviewsData} />
      ) : (
        <Skel />
      )}
      <PaginationMain
        totalPages={totalPages}
        activePage={activePage}
        pageSize={3}
        thunkAction={fetchReviews}
      />
    </div>
  );
}

function Skel() {
  return <Skeleton count={5} height={100} className=" mb-3" />;
}
