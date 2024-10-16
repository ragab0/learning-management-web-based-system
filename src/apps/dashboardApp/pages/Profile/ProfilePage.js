import React from "react";
import "./ProfilePage.css";
import FormProfile from "../../../../components/FormProfile/FormProfile";

export default function Profile() {
  return (
    <div className="profile-dash-page">
      <FormProfile ofRole="mentor" />
    </div>
  );
}
