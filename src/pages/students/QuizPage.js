// src/pages/students/QuizPage.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert, ProgressBar } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function QuizPage() {
  // Sample quiz data
  const quizQuestions = [
    {
      question: "Which language is used for web apps?",
      type: "multipleChoice",
      options: ["Python", "JavaScript", "C++", "Java"],
      answer: "JavaScript",
    },
    {
      question: "The earth is flat.",
      type: "trueFalse",
      answer: "False",
    },
    {
      question: "What does HTML stand for?",
      type: "text",
      answer: "HyperText Markup Language",
    },
  ];

  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (questionIndex, value) => {
    setResponses({ ...responses, [questionIndex]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempScore = 0;

    quizQuestions.forEach((q, idx) => {
      if (responses[idx]?.toString().toLowerCase() === q.answer.toString().toLowerCase()) {
        tempScore++;
      }
    });

    setScore(tempScore);
    setSubmitted(true);
  };

  return (
    <>
      <AppNavbar />

      <div className="d-flex">
        <Sidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">Quiz</h2>

          {!submitted ? (
            <Form onSubmit={handleSubmit} aria-label="Quiz form">
              {quizQuestions.map((q, idx) => (
                <Card key={idx} className="mb-3 shadow-sm">
                  <Card.Body>
                    <Card.Title>{q.question}</Card.Title>

                    {q.type === "multipleChoice" &&
                      q.options.map((option, i) => (
                        <Form.Check
                          key={i}
                          type="radio"
                          label={option}
                          name={`question-${idx}`}
                          value={option}
                          onChange={(e) => handleChange(idx, e.target.value)}
                          required
                          aria-required="true"
                        />
                      ))}

                    {q.type === "trueFalse" &&
                      ["True", "False"].map((option, i) => (
                        <Form.Check
                          key={i}
                          type="radio"
                          label={option}
                          name={`question-${idx}`}
                          value={option}
                          onChange={(e) => handleChange(idx, e.target.value)}
                          required
                          aria-required="true"
                        />
                      ))}

                    {q.type === "text" && (
                      <Form.Control
                        type="text"
                        placeholder="Your answer"
                        value={responses[idx] || ""}
                        onChange={(e) => handleChange(idx, e.target.value)}
                        required
                        aria-required="true"
                      />
                    )}
                  </Card.Body>
                </Card>
              ))}

              <Button type="submit" variant="primary" className="w-100">
                Submit Quiz
              </Button>
            </Form>
          ) : (
            <Alert variant="success">
              You scored {score} out of {quizQuestions.length}!
              <ProgressBar now={(score / quizQuestions.length) * 100} className="mt-2" />
            </Alert>
          )}
        </Container>
      </div>

      <Footer />
    </>
  );
}
