import React, { useState } from "react";

export default function RateMenu() {
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
        <p>Rating</p>
        <i
          className={`ps-2 align-items-center ${
            isMenuVisible ? "fa-solid fa-angle-up " : "fa-solid fa-angle-down "
          }`}
        ></i>
      </div>
      <hr />
      {isMenuVisible && (
        <div className="rate">
          <div className="stars5">
            <input type="checkbox" id="" className="checkbox" />
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="stars4">
            <input type="checkbox" id="" className="checkbox" />
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div className="stars3">
            <input type="checkbox" id="" className="checkbox" />
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div className="stars2">
            <input type="checkbox" id="" className="checkbox" />
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div className="stars1">
            <input type="checkbox" id="" className="checkbox" />
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
      )}
    </div>
  );
}
