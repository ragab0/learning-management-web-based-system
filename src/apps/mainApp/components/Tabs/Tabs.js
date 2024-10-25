import React from "react";
import "./Tabs.css";
import { useLocation } from "react-router-dom";

export default function Tabs({ tabs = [] }) {
  const { hash } = useLocation();

  return (
    <ul className="tabs-items text-capitalize">
      {tabs.map((name, i) => (
        <li key={i}>
          <a
            href={"#" + name.toLocaleLowerCase()}
            className={`btn ${
              (i === 0 && !hash) || hash.slice(1) === name ? "active" : ""
            }`}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
