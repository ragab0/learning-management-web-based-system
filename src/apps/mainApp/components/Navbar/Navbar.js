import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { imgsComps } from "../../../../assets";
import { useSelector } from "react-redux";
import Logo from "../../../../components/Logo/Logo";
import Skeleton from "react-loading-skeleton";
import ProfileImg from "../../../../components/ProfileImg/ProfileImg";

const { SearchIcon, ShoppingIcon, HeartIcon, NotificationIcon } = imgsComps;

export default function Navbar() {
  const location = useLocation();
  const [searchVal, setSearchVal] = useState("");
  const {
    isAuthRole,
    isInitialized,
    loading,
    apiData: { result: user = {} },
  } = useSelector((state) => state.auth.login);

  function submitHandler(e) {
    e.preventDefault();
  }

  if (location.pathname.includes("study")) return <div></div>;

  return (
    <nav className={`main-navbar ${isAuthRole === "student" ? "auth" : ""}`}>
      {/* <div className="container-fluid"> */}
      <div className=" container-fluid px-4">
        <Logo />
        <ul className="navbar-items">
          <li>
            <NavLink to={"/courses"} end>
              courses
            </NavLink>
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
        </ul>
        {loading ? (
          <SkeletonNavbarItems />
        ) : isAuthRole === "student" ? (
          <AuthNavbarItems user={user} />
        ) : isInitialized ? (
          <DefaultNavbarItems />
        ) : (
          <ul></ul>
        )}
      </div>
    </nav>
  );
}

function AuthNavbarItems({ user }) {
  return (
    <ul className="navbar-items">
      <li>
        <NavLink to={"/dashboard"}>
          teach <span style={{ textTransform: "lowercase" }}>on</span> EDEPedia
        </NavLink>
      </li>
      <li>
        <NavLink to={"/cart#wishlist"}>
          <HeartIcon />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>
          <ShoppingIcon />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/profile/messages"}>
          <NotificationIcon />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/profile"} className="profile-link">
          <ProfileImg photo={user.profileImg} fL={user.fname[0]} />
        </NavLink>
      </li>
    </ul>
  );
}

function DefaultNavbarItems() {
  return (
    <ul className="navbar-items">
      <li>
        <NavLink to={"/dashboard"}>
          teach <span style={{ textTransform: "lowercase" }}>on</span> EDEPedia
        </NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>
          <ShoppingIcon />
        </NavLink>
      </li>
      <li>
        <Link to={"/login"} className="my-btn p-2 btn--trans">
          login
        </Link>
      </li>
      <li>
        <Link to={"/signup"} className="my-btn p-2 btn--dark-light">
          signup
        </Link>
      </li>
    </ul>
  );
}

function SkeletonNavbarItems() {
  return (
    <div className=" ms-3 d-flex">
      <div className=" me-2 mt-1">
        <Skeleton width={200} height={10} />
        <Skeleton width={200} height={10} />
      </div>
      <Skeleton width={45} height={45} className="rounded-circle" />
    </div>
  );
}
