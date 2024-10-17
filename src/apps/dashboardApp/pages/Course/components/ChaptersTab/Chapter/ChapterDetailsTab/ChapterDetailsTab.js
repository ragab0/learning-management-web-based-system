import React from "react";
import "./ChapterDetailsTab.css";
import FieldsetLayout from "../../../../../../layouts/Fieldset/FieldsetLayout";

export default function ChapterDetailsTab() {
  return (
    <div className="chapters-tab-details-tab">
      <h3 className="fs-5 fw-bold mt-3">Chapter Details</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
      <div className="chapters-tab-body-content">
        <FieldsetLayout title="title">
          <input
            type="text"
            name=""
            className="form-control"
            value="Chapter 1 - The Solid State"
          />
        </FieldsetLayout>
        <FieldsetLayout title="subtitle">
          <input
            type="text"
            name=""
            className="form-control"
            value="Learn about the solid states with ease and get sample papers and
            notes too!"
          />
        </FieldsetLayout>
        <FieldsetLayout title="description">
          <textarea
            type="text"
            name=""
            className=" form-control"
            rows={10  }
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
