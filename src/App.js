import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import CoursesPage from "./pages/Courses/CoursesPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import ShoopingPage from "./pages/Shopping/ShoppingPage";
import NotfoundPage from "./pages/Notfound/NotfoundPage";
import SignupPage from "./pages/Signup/SignupPage";
import LoginPage from "./pages/Login/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-wrapper">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="dashboard" element={<DashboardPage />}>
            {/* <Route path="login" element={<LoginPage />} /> */}
            {/* <Route path="signup" element={<SignupPage />} /> */}
          </Route>
          <Route path="shopping" element={<ShoopingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
