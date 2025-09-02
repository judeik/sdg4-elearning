// src/components/InstructorSidebar.js
// Instructor Sidebar Component with Responsive Design and Modern Icons
import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import {
  BarChart2,
  BookOpen,
  Users,
  FileText,
  MessageSquare,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"; // Modern icons

import "../assets/css/InstructorSidebar.css"; // custom styles

export default function InstructorSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  // Toggle for collapse (desktop)
  const toggleCollapse = () => setCollapsed(!collapsed);

  // Toggle for mobile
  const toggleMobile = () => setOpen(!open);

  return (
    <aside
      className={`instructor-sidebar ${collapsed ? "collapsed" : ""} ${
        open ? "open" : ""
      }`}
      role="navigation"
      aria-label="Instructor Sidebar Navigation"
    >
      {/* Sidebar toggle buttons */}
      <button
        className="toggle-btn d-none d-lg-block"
        onClick={toggleCollapse}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight /> : <ChevronLeft />}
      </button>

      <button
        className="toggle-btn d-lg-none"
        onClick={toggleMobile}
        aria-label={open ? "Close sidebar menu" : "Open sidebar menu"}
      >
        {open ? <ChevronLeft /> : <ChevronRight />}
      </button>

      {/* Navigation links */}
      <Nav className="flex-column mt-4" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/instructor/dashboard">
            <BarChart2 />
            <span className="link-text">Dashboard</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link href="/instructor/courses">
            <BookOpen />
            <span className="link-text">My Courses</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link href="/instructor/students">
            <Users />
            <span className="link-text">Students</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link href="/instructor/assignments">
            <FileText />
            <span className="link-text">Assignments</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link href="/instructor/discussions">
            <MessageSquare />
            <span className="link-text">Discussions</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link href="/logout">
            <LogOut />
            <span className="link-text">Logout</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </aside>
  );
}
