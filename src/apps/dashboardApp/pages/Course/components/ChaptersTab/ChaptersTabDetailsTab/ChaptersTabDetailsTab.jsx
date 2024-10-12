import React from "react";
import "./ChaptersTabDetailsTab.css";
export default function ChaptersTabDetailsTab() {
  const renderSection = (title, content) => (
    <div className="section">
      <h6>{title}</h6>
      <h5 className="fs-6">{content}</h5>
    </div>
  );
  return (
    <div className="chapters-tab-details-tab">
      <h3 className="fs-5 fw-bold mt-3">Chapter Details</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
      <div className="chapters-tab-body-content">
        {renderSection("Title", "Chapter 1 - The Solid State")}
        {renderSection(
          "Subtitle",
          "Learn about the solid states with ease and get sample papers and notes too!"
        )}
        {renderSection(
          "Description",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        )}
      </div>
    </div>
  );
}
