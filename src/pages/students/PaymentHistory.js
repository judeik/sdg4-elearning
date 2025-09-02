// PaymentHistory.js
// src/pages/students/PaymentHistory.js
import React from "react";
import { Container, Table } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function PaymentHistory() {
  const payments = [
    { date: "2025-08-01", plan: "Pro", amount: "$29.99", status: "Paid" },
    { date: "2025-07-01", plan: "Pro", amount: "$29.99", status: "Paid" },
    { date: "2025-06-01", plan: "Pro", amount: "$29.99", status: "Paid" },
  ];

  return (
    <>
      <AppNavbar />
      <div className="d-flex">
        <Sidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">Payment History</h2>

          <Table striped bordered hover responsive aria-label="Student payment history">
            <thead>
              <tr>
                <th>Date</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, idx) => (
                <tr key={idx}>
                  <td>{payment.date}</td>
                  <td>{payment.plan}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.status}</td>
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
