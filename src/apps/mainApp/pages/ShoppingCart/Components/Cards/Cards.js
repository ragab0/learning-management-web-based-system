import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

export default function Cards({ apiData, loading, isWish }) {
  const { results: cards } = apiData;

  if (!cards) {
    return <div className="no-content"></div>;
  }

  return (
    <div className="cards">
      {cards.map((card, index) => (
        <Card card={card} key={index} isWish={isWish} loading={loading} />
      ))}
    </div>
  );
}
