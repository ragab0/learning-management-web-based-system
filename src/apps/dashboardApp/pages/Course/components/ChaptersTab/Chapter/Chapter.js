import React, { useEffect, useState } from "react";
import "./Chapter.css";
import { Outlet } from "react-router-dom";
import Tabs from "../../../../../components/Tabs/Tabs";
import myAxios from "../../../../../../../utils/myAxios";

const tabs = [
  { name: "details", to: ".", end: true },
  // { name: "resources" },
  { name: "lessons" },
];

export default function Chapter() {
  const chaptersData = useState([]);
  useEffect(function () {
    (async function () {
      try {
        const res = await myAxios("/mentor/courses/670bd2a0dc4327dd815086ce");
        console.log(res);
      } catch (error) {
        console.log("###", error);
      }
    })();
  }, []);

  return (
    <div className="container-fluid chapters-tab-chapter m-3 ms-0">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <h3 className="text-capitalize">Chapter 1 - The Solid State</h3>
        </div>
        <div className="col-lg-4 col-md-12 text-center mt-3 mt-lg-0">
          <div className="btn-group" role="group">
            <button className="btn btn-primary mb-2 px-5" type="button">
              Save
            </button>
            <button className="btn btn-danger mb-2" type="button">
              Delete
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
