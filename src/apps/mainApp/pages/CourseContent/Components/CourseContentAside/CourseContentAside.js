import React from "react";
import "./CourseContentAside.css";
import LayoutMenuToggler from "../../../../layouts/MenuToggler/MenuToggler";
import LayoutCheckboxesCourseContent from "../../../../layouts/CheckboxesCourse/CheckboxesCourseContent";
import { useSelector } from "react-redux";
import { calcLessonsLong } from "../../../../../../utils/calcLong";

export default function CourseContentAside() {
  const {
    apiData: { result = {} },
    currentLesson: { url: lessonSrc, id: lessonId },
  } = useSelector((state) => state.student.currentStudyCourse);
  const {
    _id: { modules },
  } = result;

  return (
    <aside className="aside container p-0 m-0">
      <div className="aside-content p-0">
        <h2 className="m-3 mt-4">Course Content</h2>
        {modules.map(({ title, lessons, _id }, i) => (
          <LayoutMenuToggler
            isOpened={Boolean(lessons.find((l) => l._id === lessonId))}
            title={
              <>
                {`Chapter ${i + 1}: ${title}`}
                <span
                  className=" d-block small opacity-75"
                  style={{ wordSpacing: "-3px" }}
                >
                  {lessons.length} lessons | {calcLessonsLong(lessons)}
                </span>
              </>
            }
            key={i}
          >
            <LayoutCheckboxesCourseContent
              chapterId={_id}
              lessons={lessons}
              currentLessonSrc={lessonSrc}
              currentLessonId={lessonId}
            />
          </LayoutMenuToggler>
        ))}
      </div>
    </aside>
  );
}

<div className="coursecontent"></div>;
