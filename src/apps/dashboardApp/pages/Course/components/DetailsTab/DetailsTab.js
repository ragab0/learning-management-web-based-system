import React from "react";
import "./DetailsTab.css";
import DetailsTabAside from "./components/DetailsTabAside";
import FieldsetLayout from "../../../../layouts/Fieldset/FieldsetLayout";

export default function DetailsTab() {
  return (
    <div className="details-tab">
      <header>
        <h3 className="ps-1 my-4">Course Details</h3>
      </header>
      <div className="details-tab-body row">
        <div className="details-tab-content col-lg-8">
          <FieldsetLayout title="Course Name">
            <input
              type="text"
              className="form-control bg-white"
              name="name"
              placeholder="UnTitled Course!"
            />
          </FieldsetLayout>
          <FieldsetLayout title="Course Hook Title">
            <input
              type="text"
              className="form-control bg-white"
              name="name"
              placeholder="UnTitled Course!"
            />
          </FieldsetLayout>
          <FieldsetLayout title="Course Description">
            <textarea className="form-control" rows={10}></textarea>
          </FieldsetLayout>
          <FieldsetLayout title="Course Image source">
            <input
              type="url"
              className="form-control bg-white"
              name="name"
              placeholder="Image source (URL)"
            />
          </FieldsetLayout>
        </div>
        <div className="details-tab-aside col-lg-4">
          <DetailsTabAside />
        </div>
      </div>
    </div>
  );
}
