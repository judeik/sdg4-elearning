// src/pages/admin/AdminDashboard.js
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Bar, Line, Pie } from "react-chartjs-2";
import AdminSidebar from "../../components/AdminSidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const AdminAnalytics = () => {
  // Dummy Data
  const studentsPerCourseData = {
    labels: ["Course A", "Course B", "Course C", "Course D", "Course E"],
    datasets: [
      {
        label: "Enrolled Students",
        data: [45, 78, 62, 34, 90],
        backgroundColor: "#0d6efd",
      },
    ],
  };

  const revenueOverTimeData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [4000, 5000, 4500, 7000, 6000, 8000],
        borderColor: "#198754",
        backgroundColor: "rgba(25, 135, 84, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const courseDistributionData = {
    labels: ["Science", "Math", "Arts", "Technology", "Languages"],
    datasets: [
      {
        label: "Courses",
        data: [12, 8, 15, 10, 5],
        backgroundColor: [
          "#0d6efd",
          "#198754",
          "#ffc107",
          "#dc3545",
          "#6f42c1",
        ],
      },
    ],
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-grow-1 p-3 ms-lg-260">
        <h1 className="mb-4">Admin Analytics</h1>

        <Container fluid>
          {/* Summary Cards */}
          <Row className="mb-4">
            <Col md={3} sm={6} className="mb-3">
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Total Students</h5>
                  <p>1,245</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Total Instructors</h5>
                  <p>125</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Total Courses</h5>
                  <p>87</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Total Revenue</h5>
                  <p>$24,500</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Charts */}
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Students per Course</h5>
                  <Bar data={studentsPerCourseData} />
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Revenue Over Time</h5>
                  <Line data={revenueOverTimeData} />
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Course Distribution</h5>
                  <Pie data={courseDistributionData} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default AdminAnalytics;
