import React from "react";
import { Link, NavLink } from "react-router-dom";
import { imgsComps } from "../../../../assets";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const { SearchIcon, ShoppingIcon } = imgsComps;

export default function Navbar() {
  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <nav className="main-navbar">
      {/* <div className="container-fluid"> */}
      <div className="container">
        <Logo />
        <ul className="navbar-items">
          <li>
            <NavLink to={"/courses"}>courses</NavLink>
          </li>
          <li className="form-item">
            <form onSubmit={submitHandler}>
              <input
                type="search"
                name="search"
                placeholder="Search on courses..."
              />
              <button type="submit" className="btn">
                <SearchIcon />
              </button>
            </form>
          </li>
          <li>
            <NavLink to={"/dashboard"}>
              teach <span style={{ textTransform: "lowercase" }}>on</span>{" "}
              LMS-Depi
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              <ShoppingIcon />
            </NavLink>
          </li>
          <li>
            <Link to={"/login"} className="my-btn btn--squared btn--trans">
              login
            </Link>
          </li>
          <li>
            <Link
              to={"/signup"}
              className="my-btn btn--squared btn--dark-light"
            >
              signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
