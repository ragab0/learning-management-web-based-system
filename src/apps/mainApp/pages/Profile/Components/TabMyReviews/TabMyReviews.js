import React from "react";
// import React, { useEffect } from "react";
import "./TabMyReviews.css";
// import NoContent from "../../../../../../components/NoContent/NoContent";
// import Loader from "../../../../../../components/Loader/Loader";
import FilterOptions from "../FilterOptions/FilterOptions";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchReviews } from "../../../../../../store/slices/studentSlice";
import Reviews from "../../../../../../components/Reviews/Reviews";
import { reviewsData } from "../../../../../../data/reviewsData";

export default function TabReviews() {
  // const dispatch = useDispatch();
  // const {
  //   apiData: { results = [] },
  //   loading,
  //   isInitialized,
  // } = useSelector((state) => state.student.reviews);

  // useEffect(
  //   function () {
  //     dispatch(fetchReviews());
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   []
  // );

  // if (loading) return <Loader />;

  // if (isInitialized && !results.length) {
  //   return <NoContent />;
  // }

  return (
    <div className="tab-reviews">
      <header className="header col-12">
        <h2>my messages</h2>
        <FilterOptions />
      </header>
      <Reviews list={reviewsData} />
    </div>
  );
}
