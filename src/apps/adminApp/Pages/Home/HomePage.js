import React, { useState } from "react";
import "./HomePage.css";
import CodingIcon from "../../../../assets/svgsComps/admin/Coding";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllMentors,
  fetchAllStudents,
} from "../../../../store/slices/adminSlice";
import NoContent from "../../../../components/NoContent/NoContent";
import Loader from "../../../../components/Loader/Loader";
import { isLogin } from "../../../../store/slices/authSlice";
import HomePageContent from "./components/HomePageContent";

const controllers = [
  {
    name: "Show all Mentors",
    action: fetchAllMentors,
  },
  {
    name: "Show all Students",
    action: fetchAllStudents,
  },
];

export default function HomePage() {
  const dispatch = useDispatch();
  function controllerHandler(action) {
    dispatch(action());
  }

  return (
    <div className="admin-home-page">
      <HomePageContent />

      <aside className="admin-home-page-aside admin-container-card p-3">
        <section>
          <h2 className=" text-capitalize h4 pb-2 mb-4">admin controlers</h2>
          <div>
            {controllers?.map(({ name, action }, i) => (
              <div
                className="admin-card d-flex align-items-center overflow-hidden rounded-4 mb-3"
                style={{ cursor: "pointer" }}
                onClick={() => controllerHandler(action)}
                key={i}
              >
                <div className="icon-wrapper d-flex justify-content-center align-items-center p-3">
                  <CodingIcon />
                </div>
                <h4 className="px-2 h6 mb-0">{name}</h4>
              </div>
            ))}
          </div>
        </section>
      </aside>
    </div>
  );
}
