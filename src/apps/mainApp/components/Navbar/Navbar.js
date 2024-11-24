import React from "react";
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { imgsComps } from "../../../../assets";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Logo from "../../../../components/Logo/Logo";
import Skeleton from "react-loading-skeleton";
import ProfileImg from "../../../../components/ProfileImg/ProfileImg";

const { SearchIcon, ShoppingIcon, HeartIcon, NotificationIcon } = imgsComps;

export default function Navbar() {
  const location = useLocation();
  const { register, handleSubmit, watch } = useForm();
  const {
    isAuthRole,
    isInitialized,
    loading,
    apiData: { result: user = {} },
  } = useSelector((state) => state.auth.login);
  const search = watch("search");

  if (location.pathname.includes("study")) return <div></div>;

  function submitHandler(data) {}

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1 }}
      className={`main-navbar ${isAuthRole === "student" ? "auth" : ""}`}
    >
      {/* <div className="container-fluid"> */}
      <div className=" container-fluid px-4">
        <Logo />
        <div className="menu-icon">111</div>
        <ul className="navbar-items">
          <li>
            <NavLink to={"/courses"} end>
              courses
            </NavLink>
          </li>
          <li className="form-item">
            <form onSubmit={handleSubmit(submitHandler)}>
              <input
                className="form-control"
                type="search"
                placeholder="Search on courses..."
                {...register("search")}
              />
              <div
                className="button-wrapper d-flex align-items-center"
                style={
                  search === ""
                    ? {
                        cursor: "not-allowed",
                      }
                    : {}
                }
              >
                <button
                  type="submit"
                  className={`btn d-flex align-items-center ${
                    search === "" ? "disabled" : ""
                  }`}
                >
                  <SearchIcon />
                </button>
              </div>
            </form>
          </li>
        </ul>
        {loading ? (
          <Skel />
        ) : isAuthRole === "student" ? (
          <AuthNavbarItems user={user} />
        ) : isInitialized ? (
          <DefaultNavbarItems />
        ) : (
          <ul></ul>
        )}
      </div>
    </motion.nav>
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
        <NavLink to={"/cart/#wishlist"}>
          <HeartIcon />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>
          <ShoppingIcon />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/profile/chats"}>
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

function Skel() {
  return (
    <div className="ms-3 d-flex justify-content-end">
      <div className="me-2 mt-1">
        <Skeleton width={200} height={10} count={2} />
      </div>
      <Skeleton width={45} height={45} className="rounded-circle" />
    </div>
  );
}
