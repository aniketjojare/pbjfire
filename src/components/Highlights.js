import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ShieldFillCheck, Fire, Headset } from "react-bootstrap-icons";
import "../styles/Highlights.css";

function Highlights() {
  const highlights = [
    { icon: <ShieldFillCheck size={60} />, title: "Trusted Expertise", text: "Years of experience in fire safety and compliance." },
    { icon: <Fire size={60} />, title: "Complete Fire Solutions", text: "From installation to training, we cover all fire safety needs." },
    { icon: <Headset size={60} />, title: "24/7 Support", text: "Always available for emergency response and consultations." }
  ];

  return (
    <Container fluid className="highlights-section my-5"> {/* Changed to fluid for full width */}
      <Container> {/* Inner container for content alignment */}
        <h2 className="text-center mb-5">Why Choose Us</h2>
        <Row>
          {highlights.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="highlight-card">
                <Card.Body>
                  <div className="highlight-icon">{item.icon}</div>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Highlights;