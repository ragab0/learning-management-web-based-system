import React from "react";
import "./MentorMainContent.css";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import MarkDown from "../../../../../dashboardApp/components/MarkDown/MarkDown";
import MarkDownReadOnly from "../../../../../dashboardApp/components/MarkDown/MarkDownReadOnly";

export default function MentorMainContent() {
  const {
    loading,
    apiData: { result = {} },
  } = useSelector((state) => state.mentor.basicProfile);

  if (loading) {
    return <Skel />;
  }

  const { fname, lname, headline, description } = result;

  return (
    <main className="mentor-main-content">
      {
        <>
          <header className="instructor-header">
            <span className="instructor-label fw-bold">Instructor</span>
            <h1 className="instructorName text-capitalize">
              {fname} {lname}
            </h1>
            <p className="instructorTitle">{headline}</p>
            {/* <div className="instructor-header-stats">
              <div>
                <span>Total Students</span>
                <h5>{"totalStudents"}</h5>
              </div>
              <div>
                <span>Reviews</span>
                <h5>{"reviews"}</h5>
              </div>
            </div> */}
          </header>
          <section className="instructor-about">
            <MarkDownReadOnly source={description} />
          </section>
        </>
      }
    </main>
  );
}

function Skel() {
  return (
    <div>
      <Skeleton height={30} className=" w-50" />
      <Skeleton height={30} className=" w-75" />
      {[...Array(15)].map((_, i) => (
        <Skeleton key={i} height={40} />
      ))}
    </div>
  );
}
