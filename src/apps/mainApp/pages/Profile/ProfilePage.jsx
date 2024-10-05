import React from "react";
import "./ProfilePage.css";
import { Outlet } from "react-router-dom";
import Aside from "./Components/Aside/Aside";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="content-aside-layout content-aside-layout-reverse container">
        <Aside />
        <main className="profile-page-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
