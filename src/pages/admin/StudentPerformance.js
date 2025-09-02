// src/pages/admin/StudentPerformance.js
// Admin page to view student performance metrics
import React, { useState } from "react";
import { Table, Container, Badge } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";

const StudentPerformance = () => {
  // Dummy student performance data
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      courses: ["React Basics", "Advanced JS"],
      assignmentsCompleted: 12,
      averageGrade: "A",
      feedback: "Good progress",
    },
    {
      id: 2,
      name: "Mike Johnson",
      courses: ["Data Science 101"],
      assignmentsCompleted: 7,
      averageGrade: "B+",
      feedback: "Needs improvement",
    },
    {
      id: 3,
      name: "Sarah Lee",
      courses: ["Python Basics", "React Basics"],
      assignmentsCompleted: 10,
      averageGrade: "A-",
      feedback: "Consistent performance",
    },
  ]);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-grow-1 p-3 ms-lg-260">
        <h1 className="mb-4">Student Performance</h1>

        <Container fluid>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student Name</th>
                <th scope="col">Courses Enrolled</th>
                <th scope="col">Assignments Completed</th>
                <th scope="col">Average Grade</th>
                <th scope="col">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{student.name}</td>
                  <td>{student.courses.join(", ")}</td>
                  <td>{student.assignmentsCompleted}</td>
                  <td>
                    <Badge bg="info">{student.averageGrade}</Badge>
                  </td>
                  <td>{student.feedback}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </main>
    </div>
  );
};

export default StudentPerformance;
