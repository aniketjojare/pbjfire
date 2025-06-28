import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/ContactCTA.css";
import { useNavigate } from "react-router-dom";

function ContactCTA() {
  const navigate = useNavigate();

  return (
    <Container fluid className="contact-cta">
      <Container>
        <h2 className="mb-5">Connect with PBJ Fire Today!</h2>
        <p className="text-center mb-5">
          Need fire safety solutions, audits, or maintenance? Reach out for expert support now!
        </p>
        <Row>
          <Col md={4} className="mb-4">
            <FaPhoneAlt className="cta-icon" />
            <h5>Call Our Experts</h5>
            <p>
              <strong>Head Office</strong><br />
              <strong>(Chhatrapati Sambhajinagar)</strong><br />
              <a href="tel:+919552865115" className="contact-link">+91 95528 65115</a>
            </p>
            <p>
              <strong>Branch Office</strong><br />
              <strong>(Pune)</strong><br />
              <a href="tel:+919405319516" className="contact-link">+91 94053 19516</a>
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <FaEnvelope className="cta-icon" />
            <h5>Email Us Anytime</h5>
            <p>
              <a href="mailto:pbjfiresafety@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                pbjfiresafety@gmail.com
              </a>
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <FaMapMarkerAlt className="cta-icon" />
            <h5>Visit Our Offices</h5>
            <p>
              <strong>Head Office</strong><br />
              <strong>(Chhatrapati Sambhajinagar)</strong><br />
              N-12, ED-32/12, HUDCO, Bharatmata Nagar,<br />
              Chhatrapati Sambhajinagar, 431001
            </p>
            <p>
              <strong>Branch Office</strong><br />
              <strong>(Pune)</strong><br />
              5B, Janranjani, Next to Mangal Bhairav,<br />
              Nanded City, Pune - 41
            </p>
          </Col>
        </Row>
        <Button variant="danger" className="cta-button" onClick={() => navigate("/contact")}>
          Request a Consultation Now
        </Button>
      </Container>
    </Container>
  );
}

export default ContactCTA;