// src/pages/students/CourseHistory.js
// A course history page for a SaaS e-learning platform using React and React-Bootstrap.
import React from "react";
import { Container, Table, ProgressBar } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function CourseHistory() {
  const completedCourses = [
    { title: "React for Beginners", completedOn: "2025-08-20", progress: 100 },
    { title: "CSS Animations", completedOn: "2025-08-10", progress: 100 },
  ];

  return (
    <>
      <AppNavbar />
      <div className="d-flex">
        <Sidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">Course History</h2>

          <Table striped bordered hover responsive aria-label="Student course history">
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Completed On</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {completedCourses.map((course, idx) => (
                <tr key={idx}>
                  <td>{course.title}</td>
                  <td>{course.completedOn}</td>
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
