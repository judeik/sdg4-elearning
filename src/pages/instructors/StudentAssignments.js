// src/pages/instructors/StudentAssignments.js
// New file created for viewing and grading student assignments. Route Param: studentEmail.
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InstructorSidebar from "../../components/InstructorSidebar";

export default function StudentAssignments() {
  const { studentEmail } = useParams(); // Get student email from URL

  const [assignments, setAssignments] = useState([
    { title: "React Project", submittedOn: "2025-08-25", feedback: "Struggled with hooks", grade: "" },
    { title: "CSS Animations", submittedOn: "2025-08-20", feedback: "Excellent styling", grade: "A" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState(null);

  const handleGradeClick = (assignment) => {
    setCurrentAssignment(assignment);
    setShowModal(true);
  };

  const handleSaveGrade = () => {
    setAssignments(
      assignments.map((a) =>
        a.title === currentAssignment.title ? { ...a, grade: currentAssignment.grade, feedback: currentAssignment.feedback } : a
      )
    );
    setShowModal(false);
  };

  return (
    <>
      <AppNavbar />
      <div className="d-flex">
        <InstructorSidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">Assignments - {studentEmail}</h2>

          <Table striped bordered hover responsive aria-label="Student assignments table">
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Submitted On</th>
                <th>Feedback</th>
                <th>Grade</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a, idx) => (
                <tr key={idx}>
                  <td>{a.title}</td>
                  <td>{a.submittedOn}</td>
                  <td>{a.feedback}</td>
                  <td>{a.grade || "Not graded"}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleGradeClick(a)}>Grade / Review</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Grade Assignment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {currentAssignment && (
                <Form>
                  <Form.Group controlId="grade" className="mb-3">
                    <Form.Label>Grade</Form.Label>
                    <Form.Control
                      type="text"
                      value={currentAssignment.grade || ""}
                      onChange={(e) => setCurrentAssignment({...currentAssignment, grade: e.target.value})}
                    />
                  </Form.Group>

                  <Form.Group controlId="feedback" className="mb-3">
                    <Form.Label>Feedback / Review</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={currentAssignment.feedback}
                      onChange={(e) => setCurrentAssignment({...currentAssignment, feedback: e.target.value})}
                    />
                  </Form.Group>
                </Form>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
              <Button variant="primary" onClick={handleSaveGrade}>Save</Button>
            </Modal.Footer>
          </Modal>

        </Container>
      </div>
      <Footer />
    </>
  );
}
