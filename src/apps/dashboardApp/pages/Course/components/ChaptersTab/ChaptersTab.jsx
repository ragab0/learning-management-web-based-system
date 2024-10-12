import React from "react";
import "./ChaptersTab.css";
import { Outlet } from "react-router-dom";
import Tabs from "../../../../components/Tabs/Tabs";

const tabs = [{ name: "details", to: ".", end: true }, { name: "resources" }];

export default function ChaptersTab() {
  return (
    <div className="container-fluid m-3 ms-0">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <h3 className="text-capitalize">Chapter 1 - The Solid State</h3>
        </div>
        <div className="col-lg-4 col-md-12 text-center mt-3 mt-lg-0">
          <div className="btn-group" role="group">
            <button className="btn btn-danger mb-2" type="button">
              Delete
            </button>
            <button className="btn btn-secondary mx-2 mb-2" type="button">
              Move To Draft
            </button>
            <button className="btn btn-primary mb-2" type="button">
              Add Course
            </button>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 mt-3">
          <Tabs tabs={tabs} />
        </div>
      </div>
      <div className="chapters-tab-body">
        <Outlet />
      </div>
    </div>
  );
}
