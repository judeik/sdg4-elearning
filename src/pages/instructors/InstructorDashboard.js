// src/pages/instructors/InstructorDashboard.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InstructorSidebar from "../../components/InstructorSidebar";

export default function InstructorDashboard() {
  // Sample stats
  const coursesCreated = 5;
  const totalStudents = 120;
  const pendingAssignments = 10;

  return (
    <>
      <AppNavbar />

      <div className="d-flex">
        <InstructorSidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">Instructor Dashboard</h2>

          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Courses Created</Card.Title>
                  <Card.Text>{coursesCreated}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Total Students</Card.Title>
                  <Card.Text>{totalStudents}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Pending Assignments</Card.Title>
                  <Card.Text>{pendingAssignments}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}
