// src/pages/admin/AdminSystemReview.js
// Admin System Review Page - View and manage user feedback on courses and system features.
import React, { useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";

const AdminSystemReview = () => {
  // Dummy feedback data
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "John Doe",
      role: "Student",
      target: "React Basics",
      review: "Course was very informative!",
      date: "2025-08-01",
    },
    {
      id: 2,
      user: "Jane Smith",
      role: "Instructor",
      target: "System",
      review: "Dashboard could be more responsive on mobile.",
      date: "2025-08-02",
    },
    {
      id: 3,
      user: "Mike Johnson",
      role: "Student",
      target: "Data Science 101",
      review: "Assignments were challenging but helpful.",
      date: "2025-08-03",
    },
  ]);

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-grow-1 p-3 ms-lg-260">
        <h1 className="mb-4">System Reviews</h1>

        <Container fluid>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Role</th>
                <th scope="col">Target</th>
                <th scope="col">Review</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((r, index) => (
                <tr key={r.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{r.user}</td>
                  <td>{r.role}</td>
                  <td>{r.target}</td>
                  <td>{r.review}</td>
                  <td>{r.date}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(r.id)}
                      aria-label={`Delete review by ${r.user}`}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </main>
    </div>
  );
};

export default AdminSystemReview;
