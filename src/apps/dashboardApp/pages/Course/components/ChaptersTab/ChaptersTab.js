import React, { useState } from "react";
import "./ChaptersTab.css";
import { NavLink, Outlet } from "react-router-dom";

export default function ChaptersTab() {
  const [activeTab, setActiveTab] = useState("details");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="chapters-tab">
      <header className="chapters-tab-header">
        <div className="chapterNav">
          <h3 className=" text-capitalize"> chapter1-the solid state</h3>
          <div>
            <button className="btn btn-danger" type="button">
              Delete
            </button>
            <button className="btn btn-light mx-4" type="button">
              Move To Draft
            </button>
            <button className="btn btn-primary" type="button">
              Add Course
            </button>
          </div>
        </div>
        <ul className="chapters-tab-tabs">
          <li className=" details text-primary">
            <NavLink
              style={{
                color: activeTab === "details" ? "#3b82f6" : "#475569",
                borderBottom:
                  activeTab === "details" ? "3px solid #3b82f6" : "none",
              }}
              onClick={() => handleTabClick("details")}
              to=""
              end
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{
                color: activeTab === "resources" ? "#3b82f6" : "#475569",
                borderBottom:
                  activeTab === "resources" ? "3px solid #3b82f6" : "none",
              }}
              onClick={() => handleTabClick("resources")}
              to="resources"
            >
              Resources
            </NavLink>
          </li>
        </ul>
      </header>
      <div className="chapters-tab-body">
        <Outlet />
      </div>
    </div>
  );
}
