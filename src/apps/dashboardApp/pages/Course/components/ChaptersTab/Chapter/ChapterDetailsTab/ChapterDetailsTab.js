import React from "react";
import "./ChapterDetailsTab.css";
import FieldsetLayout from "../../../../../../layouts/Fieldset/FieldsetLayout";
import { useFormContext } from "react-hook-form";

export default function ChapterDetailsTab() {
  const { register } = useFormContext();

  return (
    <div className="chapters-tab-details-tab">
      <h3 className="fs-5 fw-bold mt-3">Chapter Details</h3>
      <div className="chapters-tab-body-content">
        <FieldsetLayout title="title" mandatory={true}>
          <input
            {...register("title")}
            type="text"
            className="form-control"
            placeholder="Chapter title"
          />
        </FieldsetLayout>
        <FieldsetLayout title="thumbnail">
          <input
            {...register("thumbnail")}
            type="text"
            className="form-control"
            placeholder="Chapter thumbnail"
          />
        </FieldsetLayout>

        <FieldsetLayout title="description" mandatory={true}>
          <textarea
            {...register("description")}
            type="text"
            className=" form-control"
            rows={10}
            placeholder="Chapter description"
          ></textarea>
        </FieldsetLayout>
      </div>
    </div>
  );
}
