// src/pages/admin/InstructorPerformance.js
// Admin page to view instructor performance metrics
import React, { useState } from "react";
import { Table, Container, Badge, Button } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";

const InstructorPerformance = () => {
  // Dummy instructor performance data
  const [instructors, setInstructors] = useState([
    {
      id: 1,
      name: "Jane Smith",
      courses: ["React Basics", "Advanced JS"],
      studentsEnrolled: 120,
      averageRating: 4.5,
      feedback: "Very engaging instructor",
      status: "Active",
    },
    {
      id: 2,
      name: "Mike Johnson",
      courses: ["Data Science 101"],
      studentsEnrolled: 80,
      averageRating: 4.0,
      feedback: "Good explanations",
      status: "Active",
    },
    {
      id: 3,
      name: "Sarah Lee",
      courses: ["Python Basics", "React Basics"],
      studentsEnrolled: 95,
      averageRating: 4.7,
      feedback: "Excellent support",
      status: "Disabled",
    },
  ]);

  // Toggle instructor status
  const toggleStatus = (id) => {
    setInstructors(
      instructors.map((inst) =>
        inst.id === id
          ? { ...inst, status: inst.status === "Active" ? "Disabled" : "Active" }
          : inst
      )
    );
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-grow-1 p-3 ms-lg-260">
        <h1 className="mb-4">Instructor Performance</h1>

        <Container fluid>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Instructor Name</th>
                <th scope="col">Courses Taught</th>
                <th scope="col">Students Enrolled</th>
                <th scope="col">Average Rating</th>
                <th scope="col">Feedback</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((inst, index) => (
                <tr key={inst.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{inst.name}</td>
                  <td>{inst.courses.join(", ")}</td>
                  <td>{inst.studentsEnrolled}</td>
                  <td>
                    <Badge bg="info">{inst.averageRating}</Badge>
                  </td>
                  <td>{inst.feedback}</td>
                  <td>
                    <Badge
                      bg={inst.status === "Active" ? "success" : "secondary"}
                    >
                      {inst.status}
                    </Badge>
                  </td>
                  <td>
                    <Button
                      variant={inst.status === "Active" ? "danger" : "success"}
                      size="sm"
                      onClick={() => toggleStatus(inst.id)}
                      aria-label={
                        inst.status === "Active"
                          ? `Disable ${inst.name}`
                          : `Enable ${inst.name}`
                      }
                    >
                      {inst.status === "Active" ? "Disable" : "Enable"}
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

export default InstructorPerformance;
