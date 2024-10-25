import React, { useEffect } from "react";
import "./CheckboxesCourseContent.css";
import { motion } from "framer-motion";
import { calcOneLessonLong } from "../../../../utils/calcLong";
import { useDispatch, useSelector } from "react-redux";
import {
  saveBaughtCourseProgress,
  updateProgress,
} from "../../../../store/slices/studentSlice";
import { debounceSaveProgress } from "../../../../utils/debounceThunks";
import { useParams } from "react-router-dom";
import store from "../../../../store/store";

export default function LayoutCheckboxesCourseContent({ chapterId, lessons }) {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const { progress = {} } = useSelector(
    (state) => state.student.currentStudyCourse
  );

  function checkHandler(e) {
    const { name: lessonId, checked } = e.target;

    dispatch(updateProgress({ chapterId, lessonId, checked }));
    debounceSaveProgress(function () {
      dispatch(
        saveBaughtCourseProgress({
          id: courseId,
          id2: "progress",
          progress: store.getState().student.currentStudyCourse.progress,
        })
      );
      console.log(
        "debounded save course.",
        store.getState().student.currentStudyCourse.progress
      );
    });
  }

  return (
    <div
      className={`layout-checkboxes d-flex flex-column align-items-start gap-2`}
    >
      {lessons.map(({ _id, title, duration: { lengthSec } }, i) => (
        <label key={i} className={"d-flex align-items-center gap-2 w-100"}>
          <div className="d-flex align-items-center gap-2">
            <motion.input
              type="checkbox"
              name={_id}
              onChange={checkHandler}
              checked={
                (progress[chapterId] && progress[chapterId][_id]) || false
              }
              className="form-check-input m-0"
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              whileTap={{ scale: 1.2 }} // Scale up when clicked
              transition={{ type: "spring", stiffness: 300 }} // Spring animation for checkbox
            />
          </div>
          <div className="w-100 d-grid align-items-start mb-1 small">
            {i + 1}. {title}
            <div className=" d-flex align-items-center gap-1">
              <i
                className="fa-solid fa-video course-icon"
                style={{ opacity: 0.3 }}
              ></i>
              <span>{calcOneLessonLong(lengthSec)}</span>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}
