// src/pages/admin/AdminPayments.js
// Admin Payments Page with Filtering and Export Placeholder
import React, { useState } from "react";
import { Table, Button, Container, Form } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";

const AdminPayments = () => {
  // Dummy payment data
  const [payments, setPayments] = useState([
    {
      id: 1,
      user: "John Doe",
      role: "Student",
      course: "React Basics",
      amount: "$49",
      status: "Completed",
      date: "2025-08-01",
    },
    {
      id: 2,
      user: "Jane Smith",
      role: "Instructor",
      course: "Python Advanced",
      amount: "$120",
      status: "Pending",
      date: "2025-08-02",
    },
    {
      id: 3,
      user: "Mike Johnson",
      role: "Student",
      course: "Data Science 101",
      amount: "$79",
      status: "Completed",
      date: "2025-08-03",
    },
  ]);

  const [filterRole, setFilterRole] = useState("");

  const filteredPayments = filterRole
    ? payments.filter((p) => p.role === filterRole)
    : payments;

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-grow-1 p-3 ms-lg-260">
        <h1 className="mb-4">Payments</h1>

        <Container fluid>
          {/* Filter */}
          <Form className="mb-3" aria-label="Filter Payments by Role">
            <Form.Group className="d-flex align-items-center">
              <Form.Label className="me-2 mb-0">Filter by Role:</Form.Label>
              <Form.Select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                aria-label="Filter Role"
                style={{ maxWidth: "200px" }}
              >
                <option value="">All</option>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
              </Form.Select>
            </Form.Group>
          </Form>

          {/* Export Placeholder */}
          <div className="mb-3">
            <Button variant="outline-primary" aria-label="Export Payments">
              Export Payments
            </Button>
          </div>

          {/* Payments Table */}
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Role</th>
                <th scope="col">Course</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((p, index) => (
                <tr key={p.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{p.user}</td>
                  <td>{p.role}</td>
                  <td>{p.course}</td>
                  <td>{p.amount}</td>
                  <td>{p.status}</td>
                  <td>{p.date}</td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      aria-label={`View details for ${p.user} payment`}
                    >
                      View
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

export default AdminPayments;
