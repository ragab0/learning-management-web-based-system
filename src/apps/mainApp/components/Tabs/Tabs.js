import React from "react";
import "./Tabs.css";

export default function Tabs({ tabs = [] }) {
  return (
    <ul className="tabs-items">
      {tabs.map((name, i) => (
        <li key={i}>
          <a
            href={"#" + name.toLocaleLowerCase()}
            className={`btn ${i === 0 ? "active" : ""}`}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
