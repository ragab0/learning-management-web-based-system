import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Aside.css";
import profileImg from "../../../../../../assets/mentorsImgs/mentor1.png";

export default function Aside() {
  const { pathname } = useLocation();

  return (
    <aside className="profile-page-aside">
      <header>
        <div className="profileImg">
          <img alt="profile-img" src={profileImg} />
          <h5>John Doe</h5>
          <span className="shareProfile">Share Profile</span>
          <i class="fa-solid fa-share-nodes fs-5"></i>
        </div>
      </header>
      <ul>
        <li>
          <NavLink
            to=""
            className={(e) => (pathname === "/profile" ? "active" : "")}
          >
            profile
          </NavLink>
        </li>
        <li>
          <NavLink to="my-courses">my courses</NavLink>
        </li>
        <li>
          <NavLink to="teachers">teachers</NavLink>
        </li>
        <li>
          <NavLink to="message">message</NavLink>
        </li>
        <li>
          <NavLink to="my-reviews">my reviews</NavLink>
        </li>
      </ul>
    </aside>
  );
}
