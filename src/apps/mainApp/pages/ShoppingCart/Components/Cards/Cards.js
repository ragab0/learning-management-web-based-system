import React, { useEffect } from "react";
import "./Cards.css";
import Card from "../Card/Card";
import NoContent from "../../../../../../components/NoContent/NoContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartCourses } from "../../../../../../store/slices/studentSlice";

export default function Cards() {
  const dispatch = useDispatch();
  const { apiData, loading, isInitialized } = useSelector(
    (state) => state.student.cartCourses
  );
  const results = apiData.results;

  useEffect(
    function () {
      dispatch(fetchCartCourses());
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
        <Card card={card} key={index} />
      ))}
    </div>
  );
}
