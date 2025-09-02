// src/pages/admin/AdminModerateForum.js
// Admin page to moderate discussion forum posts
import React, { useState } from "react";
import { Table, Button, Container, Form } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";

const AdminModerateForum = () => {
  // Dummy discussion data
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "John Doe",
      course: "React Basics",
      post: "Can someone explain useState hook?",
      date: "2025-08-01",
    },
    {
      id: 2,
      user: "Jane Smith",
      course: "Advanced Python",
      post: "Assignment 2 deadline extended?",
      date: "2025-08-02",
    },
    {
      id: 3,
      user: "Mike Johnson",
      course: "Data Science 101",
      post: "Looking for study group.",
      date: "2025-08-03",
    },
  ]);

  const handleDelete = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-grow-1 p-3 ms-lg-260">
        <h1 className="mb-4">Moderate Discussion Forum</h1>

        <Container fluid>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Course</th>
                <th scope="col">Post</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((p, index) => (
                <tr key={p.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{p.user}</td>
                  <td>{p.course}</td>
                  <td>{p.post}</td>
                  <td>{p.date}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      className="me-2"
                      onClick={() => handleDelete(p.id)}
                      aria-label={`Delete post by ${p.user}`}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      aria-label={`Reply to post by ${p.user}`}
                    >
                      Reply
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Add placeholder for pagination if needed */}
          <div className="mt-3 d-flex justify-content-end">
            <Button variant="outline-primary" size="sm" aria-label="Next page">
              Next
            </Button>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default AdminModerateForum;
