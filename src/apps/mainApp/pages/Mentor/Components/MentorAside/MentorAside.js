import React from "react";
import "./MentorAside.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

export default function MentorAside() {
  const {
    loading,
    apiData: { result = {} },
  } = useSelector((state) => state.mentor.basicProfile);

  if (loading) {
    return <Skel />;
  }

  const { photo, links = [] } = result;

  return (
    <aside className="aside mentor-aside">
      <div className="aside-content text-center">
        <div className="img-wrapper rounded-circle overflow-hidden">
          <img alt="profile-img" src={photo} />
        </div>
        <ul className="d-flex flex-column gap-2">
          {links.map((link, i) => {
            const [k, v] = Object.entries(link)[0];
            return (
              v && (
                <li>
                  <Link
                    key={i}
                    to={v}
                    className="btn btn-outline-dark py-3 w-100"
                  >
                    {k}
                  </Link>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

function Skel() {
  return (
    <aside className="aside mentor-aside">
      <div className="aside-content text-center">
        <div className="img-wrapper">
          <Skeleton className="w-100 h-100 rounded-circle" />
        </div>
        <ul className="d-flex flex-column gap-2">
          {[...Array(3)].map((_, index) => (
            <li key={index}>
              <Skeleton height={50} width="100%" />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
