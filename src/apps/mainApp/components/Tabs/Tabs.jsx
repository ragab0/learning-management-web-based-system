import React from "react";
import "./Tabs.css";

export default function Tabs({ tabs = [] }) {
  return (
    <ul className="tabs-items d-flex justify-content-center ">
      {tabs.map((name, i) => (
        <li>
          <a
            key={i}
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
