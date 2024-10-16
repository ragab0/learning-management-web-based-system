import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/Home/HomePage";
import CoursesPage from "./pages/Courses/CoursesPage";
import Communication from "./pages/Communication/CommunicationPage";
import RevenuePage from "./pages/Revenue/components/RevenuePage";
import SettingsPage from "./pages/Settings/components/SettingsPage";
import CoursePage from "./pages/Course/CoursePage";
import CommissionTab from "./pages/Course/components/CommissionTab/CommissionTab";
import ReviewsTab from "./pages/Course/components/ReviewsTab/ReviewsTab";
import CustomerTab from "./pages/Course/components/CustomerTab/CustomerTab";
import ChaptersTab from "./pages/Course/components/ChaptersTab/ChaptersTab";
import PromotionTab from "./pages/Course/components/PromotionTab/PromotionTab";
import DetailsTab from "./pages/Course/components/DetailsTab/DetailsTab";
import SettingsTab from "./pages/Course/components/SettingsTab/SettingsTab";
import ChaptersTabResourcesTab from "./pages/Course/components/ChaptersTab/Chapter/ChapterResourceTab/ChapterResourceTab";
import ChaptersTabDetailsTab from "./pages/Course/components/ChaptersTab/Chapter/ChapterDetailsTab/ChapterDetailsTab";
import CouponDetails from "./pages/Course/components/PromotionTab/components/CouponDetails/CouponDetails";
import EditCoupon from "./pages/Course/components/PromotionTab/components/CouponDetails/components/EditCoupon/EditCoupon";
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import MessagesTab from "./pages/Communication/components/MessagesTab/MessagesTab";
import ForgotPassword from "./pages/ForgotPassword/ForgotPasswordPage";
import useLoginCheck from "../../hooks/useLoginCheck";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import FullReviewsTab from "./pages/Communication/FullReviewsTab/FullReviewsTab";
import ChapterDetailsTab from "./pages/Course/components/ChaptersTab/Chapter/ChapterDetailsTab/ChapterDetailsTab";
import ChapterResourceTab from "./pages/Course/components/ChaptersTab/Chapter/ChapterResourceTab/ChapterResourceTab";
import Chapter from "./pages/Course/components/ChaptersTab/Chapter/Chapter";
import Lessons from "./pages/Course/components/ChaptersTab/Chapter/Lessons/Lessons";

const ROLE = "mentor";
const notRequireAuthRoutes = [
  "/dashboard/login",
  "/dashboard/signup",
  "/dashboard/reset-password",
];

export default function DashboardApp() {
  const { isInitialized, loading } = useSelector((state) => state.auth.login);
  useLoginCheck();
  const location = useLocation();

  if (
    !notRequireAuthRoutes.includes(location.pathname) &&
    !isInitialized &&
    loading
  ) {
    return <Loader />;
  }

  return (
    <div
      className="dashboard-app"
      style={
        notRequireAuthRoutes.includes(location.pathname)
          ? { gridTemplateColumns: "1fr" }
          : {}
      }
    >
      <Sidebar />
      <Routes>
        {/* protected (full - with children) */}
        <Route
          index
          element={
            <ProtectedRoute roleOfRoute={ROLE}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        {/* protected (full - with nested routes) */}
        <Route path="courses" element={<ProtectedRoute roleOfRoute={ROLE} />}>
          <Route index element={<CoursesPage />} />
          <Route path=":courseId" element={<CoursePage />}>
            {/* <Route index element={<CommissionTab />} /> */}
            <Route index element={<CustomerTab />} />
            <Route path="reviews" element={<ReviewsTab />} />
            {/* <Route path="customers" element={<CustomerTab />} /> */}
            <Route path="chapters">
              <Route index element={<ChaptersTab />} />
              <Route path=":chapterId" element={<Chapter />}>
                <Route index element={<ChapterDetailsTab />} />
                <Route path="resources" element={<ChapterResourceTab />} />
                <Route path="lessons">
                  <Route index element={<Lessons />} />
                </Route>
              </Route>
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

        {/* protected (full - with children) */}
        <Route
          path="communication"
          element={
            <ProtectedRoute roleOfRoute={ROLE}>
              <Communication />
            </ProtectedRoute>
          }
        >
          <Route index element={<FullReviewsTab />} />
          <Route path="messages" element={<MessagesTab />} />
        </Route>
        {/* protected (full - with children) */}
        <Route
          path="revenue"
          element={
            <ProtectedRoute roleOfRoute={ROLE}>
              <RevenuePage />
            </ProtectedRoute>
          }
        />
        {/* protected (full - with children) */}
        {/* <Route
          path="settings"
          element={
            <ProtectedRoute roleOfRoute={ROLE}>
              <SettingsPage />
            </ProtectedRoute>
          }
        /> */}
        {/* protected (full - with children) */}
        <Route
          path="profile"
          element={
            <ProtectedRoute roleOfRoute={ROLE}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="reset-password" element={<ForgotPassword />} />
        <Route path="*" element={"NotFound on dashboard app !!"} />
      </Routes>
    </div>
  );
}
