import React from "react";
import "./ChaptersTabResourcesTab.css";

export default function ChaptersTabResourcesTab() {
  const renderSection = (title, content) => (
    <div className="section">
      <h6>{title}</h6>
      <h5 className="text-black fs-6 fw-normal">{content}</h5>
    </div>
  );

  const renderUploadSection = (label, fileTypes) => (
    <div className="upload-section text-center my-5">
      <i className="fa-solid fa-upload"></i>
      <h3 className="fs-4 my-4">
        Drag and drop files, or <span className="text-primary">Browse</span>
      </h3>
      <h6 className="fw-light">Upload files in {fileTypes}.</h6>
    </div>
  );

  return (
    <div className="chapters-tab-resources-tab">
      <h3 className="fs-5 fw-bold mt-3">Upload Notes</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="chapters-tab-resources-body">
        {renderSection("Content Type", "Notes")}
        {renderSection("Title", "Notes")}
        <div className="description section">
          <h6>Description</h6>
          <h5 className="fs-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h5>
        </div>
      </div>
      <div className="upload">
        <h6 className="mt-5">Upload File</h6>
        {renderUploadSection("Upload File", "Text, Word, PDF")}
        <h6 className="mt-5">Upload Thumbnail</h6>
        {renderUploadSection("Upload Thumbnail", "JPEG, PNG")}
      </div>
    </div>
  );
}
