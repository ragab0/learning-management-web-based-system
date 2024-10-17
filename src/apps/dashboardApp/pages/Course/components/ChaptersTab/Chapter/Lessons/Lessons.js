import React, { useState } from "react";
import "./Lessons.css";
import { useParams } from "react-router-dom";
import { lessonsData } from "../../../../../../../../data/dummyData";
import { useFieldArray, useForm } from "react-hook-form";
import FieldsetLayout from "../../../../../../layouts/Fieldset/FieldsetLayout";

export default function Lessons() {
  const { chapterId } = useParams();
  const [state, setState] = useState(lessonsData || []);
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormProvider)
      name: "test", // unique name for your Field Array
    }
  );

  function delHandler(l) {
    setState((o) => o.filter((_, i) => i !== l));
  }

  function addHandler() {
    setState((o) => [...o, {}]);
  }

  return (
    <div className="chapter-lessons">
      {state.map(({ title, srcVideo }, i) => (
        <FieldsetLayout title={`Lesson ${i + 1}`}>
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="title"
            value={title}
          />
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="video source"
            value={srcVideo}
          />
          <button className="btn btn-danger" onClick={() => delHandler(i)}>
            Delete
          </button>
        </FieldsetLayout>
      ))}
      <button className="btn btn-primary px-4" onClick={addHandler}>
        Add new one
      </button>
    </div>
  );
}
