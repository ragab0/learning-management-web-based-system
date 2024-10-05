import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Aside.css";
import profileImg from "../../../../../../assets/mentorsImgs/mentor1.png";

const links = [
  { name: "profile", to: "." },
  { name: "courses" },
  { name: "teachers" },
  { name: "messages" },
  { name: "reviews" },
];

export default function Aside() {
  return (
    <aside className="aside profile-page-aside">
      <div className="aside-content">
        <header>
          <div className="profileImg text-center">
            <img alt="profile-img" src={profileImg} />
            <h5 className="my-3">John Doe</h5>
            <Link
              to="#"
              className="btn btn-link mt-3 mb-4 pb-4 text-decoration-none d-flex align-items-center justify-content-center gap-2 disabled"
            >
              <span className="shareProfile">Share Profile</span>
              <i class="fa-solid fa-share-nodes fs-5 mb-0"></i>
            </Link>
          </div>
        </header>
        <ul>
          {links.map(({ name, to }, i) => (
            <li>
              <NavLink key={i} to={to ? to : name} end>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
