// src/components/StudentSidebar.js
import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import {
  Home,
  BookOpen,
  CreditCard,
  User,
  Bell,
  MessageCircle,
  LogOut,
} from "lucide-react";
import "../assets/css/StudentSidebar.css"; // Student-specific sidebar styles

export default function StudentSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <aside
      className={`student-sidebar ${collapsed ? "collapsed" : ""} ${
        mobileOpen ? "open" : ""
      }`}
      role="navigation"
      aria-label="Student Sidebar"
    >
      {/* Sidebar Toggle for desktop */}
      <button
        className="toggle-btn"
        onClick={toggleSidebar}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        ☰
      </button>

      {/* Sidebar Toggle for mobile */}
      <button
        className="toggle-btn d-lg-none"
        onClick={toggleMobile}
        aria-label={mobileOpen ? "Close sidebar" : "Open sidebar"}
      >
        📂
      </button>

      {/* Navigation Links */}
      <Nav className="flex-column" role="menu">
        <Nav.Link href="/student/dashboard" role="menuitem">
          <Home />
          <span className="link-text">Dashboard</span>
        </Nav.Link>

        <Nav.Link href="/student/courses" role="menuitem">
          <BookOpen />
          <span className="link-text">My Courses</span>
        </Nav.Link>

        <Nav.Link href="/student/payments" role="menuitem">
          <CreditCard />
          <span className="link-text">Payment History</span>
        </Nav.Link>

        <Nav.Link href="/student/profile" role="menuitem">
          <User />
          <span className="link-text">Profile</span>
        </Nav.Link>

        <Nav.Link href="/student/notifications" role="menuitem">
          <Bell />
          <span className="link-text">Notifications</span>
        </Nav.Link>

        <Nav.Link href="/student/forum" role="menuitem">
          <MessageCircle />
          <span className="link-text">Discussion Forum</span>
        </Nav.Link>

        <Nav.Link href="/logout" role="menuitem">
          <LogOut />
          <span className="link-text">Logout</span>
        </Nav.Link>
      </Nav>
    </aside>
  );
}
