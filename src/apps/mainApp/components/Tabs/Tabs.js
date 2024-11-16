import React from "react";
import "./Tabs.css";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Tabs({ tabs = [], loading }) {
  const { hash } = useLocation();

  return (
    <ul className="tabs-items text-capitalize">
      {tabs.map((name, i) => (
        <li key={i} className={loading ? "w-100" : ""}>
          {loading ? (
            <Skeleton className="w-100" height={50} />
          ) : (
            <a
              href={"#" + name.toLocaleLowerCase()}
              className={`btn ${
                (i === 0 && !hash) || hash.slice(1) === name ? "active" : ""
              }`}
            >
              {name}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
