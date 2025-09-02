// src/pages/instructors/InstructorCourseDetails.js
// New file created for detailed view of students in a course. Route Param: courseId
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Table, Button, Badge } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InstructorSidebar from "../../components/InstructorSidebar";

export default function InstructorCourseDetails() {
  const { courseId } = useParams(); // Get courseId from URL
  const [students, setStudents] = useState([
    { name: "John Doe", email: "john@example.com", progress: 80, completed: false, access: true },
    { name: "Alice Smith", email: "alice@example.com", progress: 100, completed: true, access: true },
    { name: "Bob Johnson", email: "bob@example.com", progress: 60, completed: false, access: false },
  ]);

  const toggleAccess = (email) => {
    setStudents(
      students.map((s) => (s.email === email ? { ...s, access: !s.access } : s))
    );
  };

  return (
    <>
      <AppNavbar />
      <div className="d-flex">
        <InstructorSidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">Students Enrolled - Course ID: {courseId}</h2>

          <Table striped bordered hover responsive aria-label="Enrolled students table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Progress</th>
                <th>Completed</th>
                <th>Access</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={idx}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.progress}%</td>
                  <td>{student.completed ? "Yes" : "No"}</td>
                  <td>
                    {student.access ? (
                      <Badge bg="success">Allowed</Badge>
                    ) : (
                      <Badge bg="danger">Disabled</Badge>
                    )}
                  </td>
                  <td>
                    <Button
                      variant={student.access ? "danger" : "success"}
                      className="me-2"
                      onClick={() => toggleAccess(student.email)}
                    >
                      {student.access ? "Disable" : "Allow"}
                    </Button>
                    <Link
                      to={`/instructor/student-assignments/${student.email}`}
                      className="btn btn-warning"
                    >
                      Grade / Review
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Button variant="secondary" className="mt-3">
            Back to Courses
          </Button>
        </Container>
      </div>
      <Footer />
    </>
  );
}
