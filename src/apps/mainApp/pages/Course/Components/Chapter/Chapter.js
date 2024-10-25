import React, { useState } from "react";
import "./Chapter.css";
import DownArrow from "../../../../../../assets/svgsComps/DownArrow";
import { calcLessonsLong } from "../../../../../../utils/calcLong";

export default function Chapter({ chapter = {} }) {
  const [isChapterOpen, setIsChapterOpen] = useState(false);
  function handleIsChapterOpen() {
    setIsChapterOpen(!isChapterOpen);
  }

  const { title, lessons = [] } = chapter;
  const long = calcLessonsLong(lessons);

  return (
    <div className="chapter-wrapper">
      <div className={`chapter border-bottom ${isChapterOpen ? "opened" : ""}`}>
        <div className="chapter-name" onClick={handleIsChapterOpen}>
          <i>
            <DownArrow />
          </i>
          <h5 className="mb-0">{title}</h5>
        </div>
        <div className="chapter-info">
          <span>
            {lessons.length} Lessons | {long}
          </span>
        </div>
      </div>
      {isChapterOpen && (
        <div className="chapter-body">
          {lessons.map(({ title, duration: { pretty } }, i) => (
            <div
              key={i}
              className="p-1 d-flex align-items-center justify-content-between"
            >
              <span>
                {i + 1}. {title}
              </span>
              <span>
                {} {pretty}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
