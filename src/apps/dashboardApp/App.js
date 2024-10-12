import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import CoursesPage from "./pages/Courses/CoursesPage";
import Communication from "./pages/Communication/CommunicationPage";
import RevenuePage from "./pages/Revenue/components/RevenuePage";
import SettingsPage from "./pages/Settings/components/SettingsPage";
import CoursePage from "./pages/Course/CoursesPage";
import CommissionTab from "./pages/Course/components/CommissionTab/CommissionTab";
import ReviewsTab from "./pages/Course/components/ReviewsTab/ReviewsTab";
import CustomerTab from "./pages/Course/components/CustomerTab/CustomerTab";
import ChaptersTab from "./pages/Course/components/ChaptersTab/ChaptersTab";
import PromotionTab from "./pages/Course/components/PromotionTab/PromotionTab";
import DetailsTab from "./pages/Course/components/DetailsTab/DetailsTab";
import SettingsTab from "./pages/Course/components/SettingsTab/SettingsTab";
import Sidebar from "./components/Sidebar/Sidebar";
import ChaptersTabResourcesTab from "./pages/Course/components/ChaptersTab/ChaptersTabResourcesTab/ChaptersTabResourcesTab";
import ChaptersTabDetailsTab from "./pages/Course/components/ChaptersTab/ChaptersTabDetailsTab/ChaptersTabDetailsTab";
import CouponDetails from "./pages/Course/components/PromotionTab/components/CouponDetails/CouponDetails";
import EditCoupon from "./pages/Course/components/PromotionTab/components/CouponDetails/components/EditCoupon/EditCoupon";
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import Profile from "./pages/Profile/Profile";
import MessagesTab from "./pages/Communication/components/MessagesTab/MessagesTab";

export default function DashboardApp() {
  const location = useLocation();
  return (
    <div
      className="dashboard-app"
      style={
        location.pathname.includes("signup") ||
        location.pathname.includes("login")
          ? {
              gridTemplateColumns: "1fr",
            }
          : {}
      }
    >
      <Sidebar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="courses">
          <Route index element={<CoursesPage />} />
          <Route path=":courseId" element={<CoursePage />}>
            <Route index element={<CommissionTab />} />
            <Route path="reviews" element={<ReviewsTab />} />
            <Route path="customer" element={<CustomerTab />} />
            <Route path="chapters" element={<ChaptersTab />}>
              <Route index element={<ChaptersTabDetailsTab />} />
              <Route path="resources" element={<ChaptersTabResourcesTab />} />
            </Route>
            <Route path="promotion">
              <Route index element={<PromotionTab />} />
              <Route path=":offerid" element={<CouponDetails />} />
              <Route path=":offerid/editcoupon" element={<EditCoupon />} />
            </Route>
            <Route path="details" element={<DetailsTab />} />
            <Route path="settings" element={<SettingsTab />} />
          </Route>
        </Route>
        <Route path="communication" element={<Communication />}>
          <Route index element={<ReviewsTab />} />
          <Route path="reviews" element={<ReviewsTab />} />
          <Route path="messages" element={<MessagesTab />} />
        </Route>
        <Route path="revenue" element={<RevenuePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={"NotFound on dashboard app !!"} />
      </Routes>
    </div>
  );
}
