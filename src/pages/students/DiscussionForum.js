// src/pages/students/DiscussionForum.js
// A discussion forum page for students in a SaaS e-learning platform using React and React-Bootstrap.
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, ListGroup } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function DiscussionForum() {
  const [posts, setPosts] = useState([
    { user: "Alice", message: "How do I submit the React assignment?", date: "2025-08-30" },
    { user: "Bob", message: "Any tips for the upcoming CSS quiz?", date: "2025-08-29" },
  ]);
  const [newPost, setNewPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    setPosts([{ user: "You", message: newPost, date: new Date().toLocaleDateString() }, ...posts]);
    setNewPost("");
  };

  return (
    <>
      <AppNavbar />

      <div className="d-flex">
        <Sidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">Discussion Forum</h2>

          <Row className="mb-4">
            <Col xs={12} md={8}>
              <Form onSubmit={handleSubmit} aria-label="Discussion forum post form">
                <Form.Group controlId="newPost" className="mb-2">
                  <Form.Label>New Post</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Write your question or comment"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    required
                    aria-required="true"
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Post
                </Button>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={8}>
              <ListGroup aria-label="Discussion posts list">
                {posts.map((post, idx) => (
                  <ListGroup.Item key={idx}>
                    <Card>
                      <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                          {post.user} | {post.date}
                        </Card.Subtitle>
                        <Card.Text>{post.message}</Card.Text>
                      </Card.Body>
                    </Card>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}
