import React, { useState } from "react";

export default function CategoryMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleChaptersMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="w-100">
      <div
        onClick={toggleChaptersMenu}
        className="d-flex justify-content-between w-100"
      >
        Category
        <i
          className={`ps-2 align-items-center  ${
            isMenuVisible ? "fa-solid fa-angle-up " : "fa-solid fa-angle-down "
          }`}
        ></i>
      </div>
      <hr />
      {isMenuVisible && (
        <div className="">
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="" className="checkbox" />
            <label htmlFor="" className="ms-2">
              Front-end
            </label>
          </div>
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="" className="checkbox" />
            <label htmlFor="" className="ms-2">
              Back-end
            </label>
          </div>
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="" className="checkbox" />
            <label htmlFor="" className="ms-2">
              UI-UX
            </label>
          </div>
          <div className="d-flex align-items-center mb-2">
            <input type="checkbox" id="" className="checkbox" />
            <label htmlFor="" className="ms-2">
              Flutter
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
