import React from "react";
import "./Aside.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const links = [
  { name: "profile", to: "." },
  { name: "courses" },
  { name: "teachers" },
  // { name: "messages" },
  { name: "reviews" },
];

export default function Aside() {
  const { fname, lname, photo, headline } = useSelector(
    (state) => state.auth.login.apiData.result || {}
  );
  return (
    <aside className="aside profile-page-aside">
      <div className="aside-content">
        <header className=" text-center">
          <div className="img-wrapper d-flex justify-content-center align-items-center">
            {photo ? <img alt="profile" src={photo} /> : fname[0] + lname[0]}
          </div>
          <h5 className="mt-3 text-capitalize fw-bold">
            {fname} {lname}
          </h5>
          <h6 className="mb-3">{headline}</h6>
          <Link
            to="#"
            className="btn btn-link mt-3 mb-4 pb-4 text-decoration-none d-flex align-items-center justify-content-center gap-2 disabled"
          >
            <span className="shareProfile">Share Profile</span>
            <i className="fa-solid fa-share-nodes fs-5 mb-0"></i>
          </Link>
        </header>
        <ul>
          {links.map(({ name, to }, i) => (
            <li key={i}>
              <NavLink to={to ? to : name} end={i === 0}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
