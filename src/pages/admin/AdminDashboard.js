// src/pages/admin/AdminDashboard.js
// Admin Dashboard Page
import React from "react";
import { Card } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-grow-1 p-3 ms-lg-260">
        <h1 className="mb-4">Admin Dashboard</h1>

        {/* Overview Cards */}
        <div className="row">
          <div className="col-md-3 mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                <h5>Students</h5>
                <p>1,245</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                <h5>Instructors</h5>
                <p>125</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                <h5>Courses</h5>
                <p>87</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                <h5>Total Revenue</h5>
                <p>$24,500</p>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Quick Links */}
        <section aria-labelledby="quick-links-heading" className="mt-4">
          <h2 id="quick-links-heading" className="h5">
            Quick Actions
          </h2>
          <div className="list-group mt-2">
            <a
              href="/admin/analytics"
              className="list-group-item list-group-item-action"
            >
              View Analytics
            </a>
            <a
              href="/admin/manage-users"
              className="list-group-item list-group-item-action"
            >
              Manage Users
            </a>
            <a
              href="/admin/courses"
              className="list-group-item list-group-item-action"
            >
              Manage Courses
            </a>
            <a
              href="/admin/payments"
              className="list-group-item list-group-item-action"
            >
              View Payment History
            </a>
            <a
              href="/admin/reviews"
              className="list-group-item list-group-item-action"
            >
              Check Reviews
            </a>
            <a
              href="/admin/forum"
              className="list-group-item list-group-item-action"
            >
              Moderate Discussion Forum
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
