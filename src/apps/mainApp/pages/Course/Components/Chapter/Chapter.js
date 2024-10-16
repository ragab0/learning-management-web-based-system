import React, { useState } from "react";
import "./Chapter.css";
import DownArrow from "../../../../../../assets/svgsComps/DownArrow";

export default function Chapter({ name, lessonsCount, long }) {
  const [isChapterOpen, setIsChapterOpen] = useState(false);
  function handleIsChapterOpen() {
    setIsChapterOpen(!isChapterOpen);
  }

  return (
    <div className={`chapter ${isChapterOpen ? "opened" : ""}`}>
      <div className="chapter-name" onClick={handleIsChapterOpen}>
        <i>
          <DownArrow />
        </i>
        <h5 className="mb-0">{name}</h5>
      </div>
      <div className="chapter-info">
        <span>{lessonsCount} Lessons</span>
        <span>{long}</span>
      </div>
    </div>
  );
}
