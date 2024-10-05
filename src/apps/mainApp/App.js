import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import CoursesPage from "./pages/Courses/CoursesPage";
import NotfoundPage from "./pages/Notfound/NotfoundPage";
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ShoppingCartPage from "./pages/ShoppingCart/ShoppingCartPage";
import CoursePage from "./pages/Course/CoursePage";
import Dev from "./components/dev/dev";
import ProfilePage from "./pages/Profile/ProfilePage";
import TabProfile from "./pages/Profile/Components/TabProfile/TabProfile";
import TabMyCourses from "./pages/Profile/Components/TabMyCourses/TabMyCourses";
import TabTeachers from "./pages/Profile/Components/TabTeachers/TabTeachers";
import TabMessage from "./pages/Profile/Components/TabMessage/TabMessage";
import TabMyReviews from "./pages/Profile/Components/TabMyReviews/TabMyReviews";
import CourseContent from "./pages/CourseContent/CourseContent";
import MentorPage from "./pages/Mentor/MentorPage";
import OrderComplete from "./components/OrderComplete/OrderComplete";
import TabChat from "./pages/Profile/Components/TabChat/TabChat";

function App() {
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
          <Route path="payment/checkout">
            <Route index element={<CheckoutPage />} />
            <Route path="done" element={<OrderComplete />} />
          </Route>
          <Route path="profile" element={<ProfilePage />}>
            <Route index element={<TabProfile />} />
            <Route path="courses" element={<TabMyCourses />} />
            <Route path="teachers">
              <Route index element={<TabTeachers />} />
              <Route path="chat/:teacherId" element={<TabChat />} />
            </Route>
            <Route path="messages" element={<TabMessage />} />
            <Route path="reviews" element={<TabMyReviews />} />
          </Route>
          <Route path="study/:courseId" element={<CourseContent />} />
          <Route path="mentors/:mentorId" element={<MentorPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
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
      <Dev />
      <App />
    </>
  );
}

export default AppDev;
