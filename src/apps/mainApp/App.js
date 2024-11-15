import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import OrderComplete from "./components/OrderComplete/OrderComplete";
import FormProfile from "../../components/FormProfile/FormProfile";
import HomePage from "./pages/Home/HomePage";
import CoursesPage from "./pages/Courses/CoursesPage";
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ShoppingCartPage from "./pages/ShoppingCart/ShoppingCartPage";
import CoursePage from "./pages/Course/CoursePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import TabMyCourses from "./pages/Profile/Components/TabMyCourses/TabMyCourses";
import TabMyReviews from "./pages/Profile/Components/TabMyReviews/TabMyReviews";
import TabMyTeachers from "./pages/Profile/Components/TabMyTeachers/TabMyTeachers";
import CourseContentPage from "./pages/CourseContent/CourseContentPage";
import MentorPage from "./pages/Mentor/MentorPage";
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage";
import useLoginCheck from "../../hooks/useLoginCheck";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import NotFound from "../../components/NotFound/NotFound";
import ChatRoom from "../../components/ChatRoom/ChatRoom";
import TabMyMessages from "./pages/Profile/Components/TabMyMessages/TabMyMessages";

const ROLE = "student";

function App() {
  useLoginCheck();
  return (
    <div className="main-app">
      <Navbar />
      <div className="app-wrapper">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CoursesPage />} />
            <Route path=":id" element={<CoursePage />} />
          </Route>
          <Route path="cart" element={<ShoppingCartPage />} />
          {/* 01) protected route (full - with nested) */}
          <Route
            path="payment/checkout"
            element={<ProtectedRoute roleOfRoute={ROLE} />}
          >
            <Route
              index
              element={
                <ProtectedRoute roleOfRoute={ROLE}>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="done"
              element={
                <ProtectedRoute roleOfRoute={ROLE}>
                  <OrderComplete />
                </ProtectedRoute>
              }
            />
          </Route>
          {/* 02) protected route (full - with children) */}
          <Route
            path="profile"
            element={
              <ProtectedRoute roleOfRoute={ROLE}>
                <ProfilePage />
              </ProtectedRoute>
            }
          >
            <Route index element={<FormProfile />} />
            <Route path="courses">
              <Route index element={<TabMyCourses />} />
              <Route
                path="archived"
                element={<TabMyCourses isArchived={true} />}
              />
            </Route>
            <Route path="teachers" element={<TabMyTeachers />} />
            <Route path="messages">
              <Route index element={<TabMyMessages />} />
              <Route path=":id" element={<ChatRoom />} />
            </Route>
            <Route path="reviews" element={<TabMyReviews />} />
          </Route>

          {/* 03) protected route (full - with children) */}
          <Route
            path="study/:courseId"
            element={
              <ProtectedRoute roleOfRoute={ROLE}>
                <CourseContentPage />
              </ProtectedRoute>
            }
          />

          <Route path="mentors/:mentorId" element={<MentorPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="reset-password" element={<ForgotPasswordPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function AppDev() {
  return (
    <>
      {/* <Dev /> */}
      <App />
    </>
  );
}

export default AppDev;
