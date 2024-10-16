import React from "react";
import "./CommunicationPage.css";
import { Outlet } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";

const tabs = [{ name: "reviews", to: ".", end: true }, { name: "messages" }];

export default function CommunicationPage() {
  return (
    <div className="communication-dash-page p-3">
      <header className="communication-page">
        <h2>Communication</h2>
        <Tabs tabs={tabs} />
      </header>
      <Outlet />
    </div>
  );
}
