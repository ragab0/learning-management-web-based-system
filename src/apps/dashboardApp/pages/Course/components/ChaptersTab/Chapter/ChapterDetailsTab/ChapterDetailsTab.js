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
        <FieldsetLayout title="title">
          <input {...register("title")} type="text" className="form-control" />
        </FieldsetLayout>
        <FieldsetLayout title="subtitle">
          <input
            {...register("titleHook")}
            type="text"
            className="form-control"
          />
        </FieldsetLayout>
        <FieldsetLayout title="description">
          <textarea
            {...register("description")}
            type="text"
            className=" form-control"
            rows={10}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
          ></textarea>
        </FieldsetLayout>
      </div>
    </div>
  );
}
