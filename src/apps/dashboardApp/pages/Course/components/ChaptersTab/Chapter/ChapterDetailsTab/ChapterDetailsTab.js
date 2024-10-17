import React from "react";
import "./ChapterDetailsTab.css";

export default function ChapterDetailsTab() {
  return (
    <div className="chapters-tab-details-tab">
      <h3 className="fs-5 fw-bold mt-3">Chapter Details</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
      <div className="chapters-tab-body-content">
        <div className="section">
          <label>
            <span>Title</span>
            <input
              type="text"
              name=""
              className="form-control"
              value="Chapter 1 - The Solid State"
            />
          </label>
        </div>
        <div className="section">
          <label>
            <span>Subtitle</span>
            <input
              type="text"
              name=""
              className="form-control"
              value="Learn about the solid states with ease and get sample papers and
            notes too!"
            />
          </label>
        </div>
        <div className="section">
          <label>
            <span>Description</span>
            <textarea type="text" name="" className=" form-control" rows={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </textarea>
          </label>
        </div>
      </div>
    </div>
  );
}
