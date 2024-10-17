import React from "react";
import "./Tabs.css";
import { NavLink } from "react-router-dom";

export default function Tabs({ tabs }) {
  return (
    <div className="tabls-wrapper">
      <ul className="tabs d-flex align-items-center gap-2 mb-4">
        {tabs.map(({ name, to, end }, i) => (
          <li key={i}>
            <NavLink to={to ? to : name.toLocaleLowerCase()} end={end}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
