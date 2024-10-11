import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import OrderComplete from "./components/OrderComplete/OrderComplete";
import FormProfile from "../../components/FormProfile/FormProfile";
// import Dev from "./components/dev/dev";
import HomePage from "./pages/Home/HomePage";
import CoursesPage from "./pages/Courses/CoursesPage";
import NotfoundPage from "./pages/Notfound/NotfoundPage";
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ShoppingCartPage from "./pages/ShoppingCart/ShoppingCartPage";
import CoursePage from "./pages/Course/CoursePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import TabMyCourses from "./pages/Profile/Components/TabMyCourses/TabMyCourses";
import TabTeachers from "./pages/Profile/Components/TabTeachers/TabTeachers";
import TabMessage from "./pages/Profile/Components/TabMessage/TabMessage";
import TabMyReviews from "./pages/Profile/Components/TabMyReviews/TabMyReviews";
import CourseContentPage from "./pages/CourseContent/CourseContent";
import MentorPage from "./pages/Mentor/MentorPage";
import TabChat from "./pages/Profile/Components/TabChat/TabChat";
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage";
import useLoginCheck from "../../hooks/useLoginCheck";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

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
            <Route path="courses" element={<TabMyCourses />} />
            <Route path="teachers">
              <Route index element={<TabTeachers />} />
              <Route path="chat/:teacherId" element={<TabChat />} />
            </Route>
            <Route path="messages" element={<TabMessage />} />
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
          <Route path="*" element={<NotfoundPage />} />
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
