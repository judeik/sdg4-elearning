// src/components/admin/AdminSidebar.js
import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import {
  BarChart,
  Users,
  BookOpen,
  MessageCircle,
  CreditCard,
  LogOut,
  Shield,
  ClipboardList,
} from "lucide-react";
import "../assets/css/AdminSidebar.css"; // Import dedicated CSS

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <aside
      className={`admin-sidebar ${collapsed ? "collapsed" : ""} ${
        mobileOpen ? "open" : ""
      }`}
      role="navigation"
      aria-label="Admin Sidebar"
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
        <Nav.Link href="/admin/dashboard" role="menuitem">
          <BarChart />
          <span className="link-text">Dashboard</span>
        </Nav.Link>

        <Nav.Link href="/admin/analytics" role="menuitem">
          <ClipboardList />
          <span className="link-text">Analytics</span>
        </Nav.Link>

        <Nav.Link href="/admin/manage-users" role="menuitem">
          <Users />
          <span className="link-text">Manage Users</span>
        </Nav.Link>

        <Nav.Link href="/admin/manage-courses" role="menuitem">
          <BookOpen />
          <span className="link-text">Manage Courses</span>
        </Nav.Link>

        <Nav.Link href="/admin/payments" role="menuitem">
          <CreditCard />
          <span className="link-text">Payments</span>
        </Nav.Link>

        <Nav.Link href="/admin/moderate-forum" role="menuitem">
          <MessageCircle />
          <span className="link-text">Moderate Forum</span>
        </Nav.Link>

        <Nav.Link href="/admin/system-review" role="menuitem">
          <Shield />
          <span className="link-text">System Review</span>
        </Nav.Link>

        <Nav.Link href="/logout" role="menuitem">
          <LogOut />
          <span className="link-text">Logout</span>
        </Nav.Link>
      </Nav>
    </aside>
  );
}
