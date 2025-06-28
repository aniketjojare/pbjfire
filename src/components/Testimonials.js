import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/Testimonials.css";

const testimonials = [
  { 
    name: "Rahul Deshmukh", 
    designation: "Facility Manager, Prozone Mall", 
    feedback: "PBJ Fire’s hydrant system ensures absolute safety. Their skill and speed are unmatched!" 
  },
  { 
    name: "Dr. Neha Patil", 
    designation: "Safety Head, MGM Hospital", 
    feedback: "Their fire safety audit was remarkably detailed. We’re now confidently ready for anything!" 
  },
  { 
    name: "Amit Kulkarni", 
    designation: "General Manager, Carnival Mariplex", 
    feedback: "Their fire suppression system at our multiplex is exceptional. Truly expert service!" 
  },
];

function Testimonials() {
  return (
    <Container fluid className="testimonials my-5">
      <Container>
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  <Card.Text className="feedback">"{testimonial.feedback}"</Card.Text>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Subtitle>{testimonial.designation}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Testimonials;