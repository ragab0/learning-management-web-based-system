import React, { useEffect } from "react";
import "./CheckboxesCourseContent.css";
import { motion } from "framer-motion";
import { calcOneLessonLong } from "../../../../utils/calcLong";
import { useDispatch, useSelector } from "react-redux";
import {
  saveBaughtCourseProgress,
  setCurrentLesson,
  updateProgress,
} from "../../../../store/slices/studentSlice";
import { debounceSaveProgress } from "../../../../utils/debounceThunks";
import { useParams } from "react-router-dom";
import store from "../../../../store/store";

export default function LayoutCheckboxesCourseContent({
  chapterId,
  lessons,
  currentLessonSrc,
  currentLessonId,
}) {
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

  function videoSrcSetter(url, id) {
    dispatch(setCurrentLesson({ url, id }));
  }

  return (
    <div
      className={`layout-checkboxes d-flex flex-column align-items-start gap-2`}
    >
      {lessons.map(({ _id, srcVideo, title, duration: { lengthSec } }, i) => (
        <div
          key={i}
          className={"d-flex gap-2 w-100"}
          style={
            _id === currentLessonId
              ? {
                  textDecoration: "underline",
                }
              : {}
          }
        >
          <label>
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
          </label>
          <div className="w-100 d-grid align-items-start mb-1 small">
            <span
              className=" cursor-pointer"
              onClick={() => videoSrcSetter(srcVideo, _id)}
            >
              {i + 1}. {title}
            </span>
            <div className=" d-flex align-items-center gap-1">
              <i className="fa-solid fa-video" style={{ opacity: 0.3 }}></i>
              <span>{calcOneLessonLong(lengthSec)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
