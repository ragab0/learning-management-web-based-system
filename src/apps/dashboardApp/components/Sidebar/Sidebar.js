import React, { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../../../components/Logo/Logo";
import CloseArrow from "../../../../assets/svgsComps/CloseArrow";
import DashboardIcon from "../../../../assets/svgsComps/dashboard/Dashboard";
import CourseIcon from "../../../../assets/svgsComps/dashboard/Course";
import ChatIcon from "../../../../assets/svgsComps/dashboard/Chat";
import DollarIcon from "../../../../assets/svgsComps/dashboard/Dollar";
import SettingIcon from "../../../../assets/svgsComps/dashboard/Setting";
import ProfileImg from "../../../../assets/mentorsImgs/profile.png";
import { useSelector } from "react-redux";

const hiddenPages = ["signup", "login", "reset-password"];

export default function Sidebar() {
  const location = useLocation();
  const [isSideOpened, setIsSideOpened] = useState(true);
  const {
    apiData: { result: user = {} },
    isAuthRole,
  } = useSelector((state) => state.auth.login);

  function isSideOpenedHandler() {
    setIsSideOpened(!isSideOpened);
  }

  if (!isAuthRole) return;
  const { fname, photo } = user;

  return (
    <aside
      className={`sidebar ${isSideOpened ? "" : "closed"}`}
      style={
        hiddenPages
          .map((h) => location.pathname.includes(h))
          .find((result) => result)
          ? {
              display: "none",
            }
          : {}
      }
    >
      <header className="d-flex justify-content-between  align-items-center">
        <Logo />
        <i onClick={isSideOpenedHandler} className="open-close-arrow">
          <CloseArrow />
        </i>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/dashboard"} end>
              <i>
                <DashboardIcon />
              </i>
              <span>dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/courses"}>
              <i>
                <CourseIcon />
              </i>
              <span>courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/communication"}>
              <i>
                <ChatIcon />
              </i>
              <span>communication</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/settings"}>
              <i>
                <SettingIcon />
              </i>
              <span>settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link
        to={"settings"}
        className="footer d-flex align-items-center gap-2 w-100 overflow-hidden"
      >
        <div className="img-wrapper d-flex align-items-center justify-content-center text-capitalize fw-bold flex-shrink-0">
          {photo ? <img src={photo} alt="profile-img"></img> : fname[0]}
        </div>
        <span className=" text-nowrap navbar-text p-0 text-capitalize">
          Hello, {fname}!
        </span>
      </Link>
    </aside>
  );
}
