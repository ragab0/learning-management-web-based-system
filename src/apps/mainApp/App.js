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

function App() {
  return (
    <div className="main-app">
      <Navbar />
      <div className="app-wrapper">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CoursesPage />} />
            <Route path=":id" element={<CoursePage />} />
          </Route>
          <Route path="cart">
            <Route index element={<ShoppingCartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
          <Route path="profile" element={<ProfilePage />}>
            <Route path="" element={<TabProfile />} />
            <Route path="my-courses" element={<TabMyCourses />} />
            <Route path="teachers" element={<TabTeachers />} />
            <Route path="message" element={<TabMessage />} />
            <Route path="my-reviews" element={<TabMyReviews />} />
          </Route>
          <Route path="coursecontent" element={<CourseContent />} />

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
