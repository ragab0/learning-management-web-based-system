import React, { useEffect } from "react";
import NoContent from "../../../../../../components/NoContent/NoContent";
import { fetchWishlistCourses } from "../../../../../../store/slices/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";

export default function WishCards() {
  const dispatch = useDispatch();
  const { apiData, loading, isInitialized } = useSelector(
    (state) => state.student.wishlistCourses
  );
  const results = apiData.results;

  useEffect(
    function () {
      dispatch(fetchWishlistCourses());
    },
    [dispatch]
  );

  if (!isInitialized || loading)
    return (
      <div className="results">
        {[...Array(1)].map((e, i) => (
          <Card isSkill={true} />
        ))}
      </div>
    );

  if (isInitialized && !results?.length) {
    return <NoContent />;
  }

  return (
    <div className="results">
      {results.map((card, index) => (
        <Card card={card} key={index} isWish={true} />
      ))}
    </div>
  );
}
