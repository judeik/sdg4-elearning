// src/pages/admin/AdminManageCourses.js
// Admin Manage Courses Page
import React, { useState } from "react";
import { Table, Button, Container, Modal, Form } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";

const AdminManageCourses = () => {
  // Dummy courses data
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", instructor: "Jane Smith", students: 50 },
    { id: 2, title: "Advanced Python", instructor: "Mike Johnson", students: 35 },
    { id: 3, title: "Data Science 101", instructor: "John Doe", students: 40 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: "", instructor: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    setCourses([...courses, { id: courses.length + 1, ...newCourse, students: 0 }]);
    setShowModal(false);
    setNewCourse({ title: "", instructor: "" });
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-grow-1 p-3 ms-lg-260">
        <h1 className="mb-4">Manage Courses</h1>

        <Container fluid>
          <Button
            variant="primary"
            className="mb-3"
            onClick={() => setShowModal(true)}
            aria-label="Add New Course"
          >
            Add New Course
          </Button>

          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course Title</th>
                <th scope="col">Instructor</th>
                <th scope="col">Enrolled Students</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={course.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{course.title}</td>
                  <td>{course.instructor}</td>
                  <td>{course.students}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      className="me-2"
                      onClick={() => handleDeleteCourse(course.id)}
                      aria-label={`Delete ${course.title}`}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      aria-label={`Edit ${course.title}`}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Add Course Modal */}
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Add New Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="courseTitle">
                  <Form.Label>Course Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter course title"
                    name="title"
                    value={newCourse.title}
                    onChange={handleChange}
                    aria-label="Course Title"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="instructorName">
                  <Form.Label>Assign Instructor</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Instructor Name"
                    name="instructor"
                    value={newCourse.instructor}
                    onChange={handleChange}
                    aria-label="Instructor Name"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleAddCourse}>
                Add Course
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </main>
    </div>
  );
};

export default AdminManageCourses;
