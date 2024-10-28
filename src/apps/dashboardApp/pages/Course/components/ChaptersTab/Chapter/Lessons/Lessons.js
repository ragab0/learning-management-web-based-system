import React, { useState } from "react";
import "./Lessons.css";
import { useFormContext } from "react-hook-form";
import FieldsetLayout from "../../../../../../layouts/Fieldset/FieldsetLayout";

export default function Lessons() {
  const methods = useFormContext();
  function deleteLessonHandler(index) {
    const currentLessons = methods.getValues().lessons || [];
    const updatedLessons = currentLessons.filter((_, i) => i !== index);
    methods.setValue("lessons", updatedLessons);
  }

  function addLessonHandler() {
    const currentLessons = methods.getValues().lessons || [];
    const newLesson = { title: "", srcVideo: "" };
    methods.setValue("lessons", [...currentLessons, newLesson]);
  }

  return (
    <div className="chapter-lessons">
      <h3 className="fs-5 fw-bold mt-3">
        Lessons ({methods.getValues().lessons?.length || 0})
      </h3>
      {methods.watch("lessons")?.map((_, index) => (
        <FieldsetLayout
          key={index}
          title={`Lesson ${index + 1}`}
          sides={3}
          mandatory={true}
        >
          <input
            className="form-control"
            {...methods.register(`lessons.${index}.title`)}
            placeholder={`Lesson ${index + 1} Name`}
          />
          <input
            className="form-control"
            {...methods.register(`lessons.${index}.srcVideo`)}
            placeholder="lesson video source"
          />
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteLessonHandler(index)}
          >
            Delete
          </button>
        </FieldsetLayout>
      ))}
      <button
        type="button"
        className="btn btn-primary px-4"
        onClick={addLessonHandler}
      >
        Add new lesson
      </button>
    </div>
  );
}
