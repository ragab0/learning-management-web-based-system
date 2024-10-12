import { Route, Routes, useLocation } from "react-router-dom";
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
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="main-app">
      <Navbar />
      <div className="app-wrapper">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              index
              element={
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route path="courses">
              <Route
                index
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CoursesPage />
                  </motion.div>
                }
              />
              <Route
                path=":id"
                element={
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CoursePage />
                  </motion.div>
                }
              />
            </Route>

            <Route
              path="cart"
              element={
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                >
                  <ShoppingCartPage />
                </motion.div>
              }
            />

            <Route path="payment/checkout">
              <Route
                index
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckoutPage />
                  </motion.div>
                }
              />
              <Route
                path="done"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <OrderComplete />
                  </motion.div>
                }
              />
            </Route>

            <Route
              path="profile"
              element={
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProfilePage />
                </motion.div>
              }
            >
              <Route index element={<TabProfile />} />
              <Route path="courses" element={<TabMyCourses />} />
              <Route path="teachers">
                <Route index element={<TabTeachers />} />
                <Route path="chat/:teacherId" element={<TabChat />} />
              </Route>
              <Route path="messages" element={<TabMessage />} />
              <Route path="reviews" element={<TabMyReviews />} />
            </Route>

            <Route
              path="study/:courseId"
              element={
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <CourseContent />
                </motion.div>
              }
            />
            <Route
              path="mentors/:mentorId"
              element={
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                >
                  <MentorPage />
                </motion.div>
              }
            />
            <Route
              path="login"
              element={
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.5 }}
                >
                  <LoginPage />
                </motion.div>
              }
            />
            <Route
              path="signup"
              element={
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.5 }}
                >
                  <SignupPage />
                </motion.div>
              }
            />
            <Route
              path="*"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <NotfoundPage />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
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
