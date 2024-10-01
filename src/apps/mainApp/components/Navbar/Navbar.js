import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { imgsComps } from "../../../../assets";
import Logo from "../Logo/Logo";

const { SearchIcon, ShoppingIcon } = imgsComps;

export default function Navbar() {
  const [searchVal, setSearchVal] = useState("");
  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <nav className="main-navbar">
      {/* <div className="container-fluid"> */}
      <div className=" container-fluid px-4">
        <Logo />
        <ul className="navbar-items">
          <li>
            <NavLink to={"/courses"}>courses</NavLink>
          </li>
          <li className="form-item">
            <form onSubmit={submitHandler}>
              <input
                className="form-control"
                type="search"
                name="search"
                placeholder="Search on courses..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <div
                className="button-wrapper d-flex align-items-center"
                style={
                  searchVal === ""
                    ? {
                        cursor: "not-allowed",
                      }
                    : {}
                }
              >
                <button
                  type="submit"
                  className={`btn d-flex align-items-center ${
                    searchVal === "" ? "disabled" : ""
                  }`}
                >
                  <SearchIcon />
                </button>
              </div>
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
