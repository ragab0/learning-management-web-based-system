import React, { useState } from "react";
import "./ChaptersTab.css";
import { Outlet } from "react-router-dom";
import Tabs from "../../../../components/Tabs/Tabs";

const tabs = [{ name: "details", to: ".", end: true }, { name: "resources" }];

export default function ChaptersTab() {
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
        <Tabs tabs={tabs} />
      </header>
      <div className="chapters-tab-body">
        <Outlet />
      </div>
    </div>
  );
}
