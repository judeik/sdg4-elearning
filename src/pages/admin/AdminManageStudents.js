// src/pages/admin/AdminManageUsers.js
import React, { useState } from "react";
import { Table, Button, Badge, Container } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";

const AdminManageUsers = () => {
  // Dummy users data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Student",
      status: "Active",
      courses: 5,
      payments: 3,
      feedback: "Good progress",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Instructor",
      status: "Disabled",
      courses: 8,
      payments: 0,
      feedback: "Pending review",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Student",
      status: "Active",
      courses: 3,
      payments: 2,
      feedback: "Needs improvement",
    },
  ]);

  // Toggle user status
  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Active" ? "Disabled" : "Active" }
          : user
      )
    );
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-grow-1 p-3 ms-lg-260">
        <h1 className="mb-4">Manage Users</h1>

        <Container fluid>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col">Courses</th>
                <th scope="col">Payments</th>
                <th scope="col">Feedback</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <Badge
                      bg={user.status === "Active" ? "success" : "secondary"}
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td>{user.courses}</td>
                  <td>{user.payments}</td>
                  <td>{user.feedback}</td>
                  <td>
                    <Button
                      variant={user.status === "Active" ? "danger" : "success"}
                      size="sm"
                      onClick={() => toggleStatus(user.id)}
                      aria-label={
                        user.status === "Active"
                          ? `Disable ${user.name}`
                          : `Enable ${user.name}`
                      }
                    >
                      {user.status === "Active" ? "Disable" : "Enable"}
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

export default AdminManageUsers;
