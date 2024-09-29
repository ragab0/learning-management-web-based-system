import React, { useState } from "react";

export default function ChaptersMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleChaptersMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="w-100">
      <div
        onClick={toggleChaptersMenu}
        className="d-flex justify-content-between w-100 cursor-pointer"
      >
        <p>Number of Chapters</p>
        <i
          className={`ps-2 align-items-center ${
            isMenuVisible ? "fa-solid fa-angle-up " : "fa-solid fa-angle-down "
          }`}
        ></i>
      </div>
      <hr />
      {isMenuVisible && (
        <div className="">
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="checkbox1-10" className="checkbox" />
            <label htmlFor="checkbox1-10" className="ms-2">
              1-10
            </label>
          </div>
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="checkbox10-15" className="checkbox" />
            <label htmlFor="checkbox10-15" className="ms-2">
              10-15
            </label>
          </div>
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="checkbox15-20" className="checkbox" />
            <label htmlFor="checkbox15-20" className="ms-2">
              15-20
            </label>
          </div>
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="checkbox20-25" className="checkbox" />
            <label htmlFor="checkbox20-25" className="ms-2">
              20-25
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
