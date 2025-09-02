// src/App.js
// Main Application Component with Routing
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/general/Home";
import About from "./pages/general/About";
import Contact from "./pages/general/Contact";
import Courses from "./pages/general/Courses";
import Pricing from "./pages/general/Pricing";

// Student Pages
import StudentDashboard from "./pages/students/StudentDashboard";
import StudentProfile from "./pages/students/StudentProfile";
import QuizPage from "./pages/students/QuizPage";
import NotificationsPage from "./pages/students/NotificationsPage";
import DiscussionForum from "./pages/students/DiscussionForum";

// Instructor Pages
import InstructorDashboard from "./pages/instructors/InstructorDashboard";
import InstructorCourses from "./pages/instructors/InstructorCourses";
import CourseEditor from "./pages/instructors/CourseEditor";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import ManageUsers from "./pages/admin/AdminManageStudents";
import StudentPerformance from "./pages/admin/StudentPerformance";
import InstructorPerformance from "./pages/admin/InstructorPerformance";
import AdminSystemReview from "./pages/admin/AdminSystemReview";

// Payment Pages
import Checkout from "./pages/payment/Checkout";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentPlans from "./pages/payment/PaymentPlans";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResendVerification from "./pages/auth/ResendVerification";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Student Pages */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/quiz" element={<QuizPage />} />
        <Route path="/student/notifications" element={<NotificationsPage />} />
        <Route path="/student/forum" element={<DiscussionForum />} />

        {/* Instructor Pages */}
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/courses" element={<InstructorCourses />} />
        <Route path="/instructor/course-editor" element={<CourseEditor />} />

        {/* Admin Pages */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/student-performance" element={<StudentPerformance />} />
        <Route path="/admin/instructor-performance" element={<InstructorPerformance />} />
        <Route path="/admin/system-review" element={<AdminSystemReview />} />

        {/* Payment Pages */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-plans" element={<PaymentPlans />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resend-verification" element={<ResendVerification />} />
      </Routes>
    </Router>
  );
};

export default App;
