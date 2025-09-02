// src/pages/students/StudentDashboard.js
import React from "react";
import { Container, Row, Col, Card, ProgressBar, Table } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function StudentDashboard() {
  // Sample data
  const enrolledCourses = [
    { title: "React for Beginners", progress: 75 },
    { title: "JavaScript Advanced", progress: 40 },
    { title: "CSS Animations", progress: 90 },
  ];

  return (
    <>
      <AppNavbar />

      <div className="d-flex" aria-label="Student dashboard layout">
        {/* Sidebar */}
        <Sidebar role="navigation" />

        {/* Main content */}
        <Container fluid className="p-4">
          <h2 className="mb-4">Welcome, Student!</h2>

          {/* Stats Cards */}
          <Row xs={1} md={3} className="mb-4 g-4">
            <Col>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Courses Enrolled</Card.Title>
                  <Card.Text>{enrolledCourses.length}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Completed Courses</Card.Title>
                  <Card.Text>1</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Points Earned</Card.Title>
                  <Card.Text>250</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Enrolled Courses */}
          <h3 className="mb-3">Enrolled Courses</h3>
          <Table striped bordered hover responsive aria-label="Student enrolled courses">
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {enrolledCourses.map((course, idx) => (
                <tr key={idx}>
                  <td>{course.title}</td>
                  <td>
                    <ProgressBar now={course.progress} label={`${course.progress}%`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>

      <Footer />
    </>
  );
}
