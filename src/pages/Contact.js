import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send function (corrected syntax)
    emailjs
      .send(
        "service_pbjfire", // Replace with your EmailJS Service ID
        "template_pbjfire", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }, // Template parameters
        "WllL1X2jbkcaKqRQ1" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormSubmitted(true);
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
          setError(null);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setError("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero-section">
        <div className="hero-overlay">
          <Container className="hero-content">
            <h1>Reach Out to PBJ Fire</h1>
            <p>Let’s Secure Your Future with Expert Fire Safety Solutions.</p>
            <Button variant="danger" href="#contact-details" className="hero-button">
              Contact Us Now
            </Button>
          </Container>
        </div>
      </div>

      {/* Contact Details and Form Section */}
      <Container fluid className="contact-content-section">
        <Container>
          <Row id="contact-details">
            {/* Contact Details */}
            <Col md={6} className="mb-4">
              <Card className="contact-details-card">
                <Card.Body>
                  <h2 className="text-center mb-4">Get in Touch</h2>
                  <div className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <h5>Call Our Experts</h5>
                    <p>
                      <strong>Head Office (Chhatrapati Sambhajinagar)</strong><br />
                      <a href="tel:+919325449233" className="contact-link">+91 95528 65115</a>
                    </p>
                    <p>
                      <strong>Branch Office (Pune)</strong><br />
                      <a href="tel:+919405319516" className="contact-link">+91 94053 19516</a>
                    </p>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <h5>Email Us Anytime</h5>
                    <p>
                      <a href="mailto:pbjfiresafety@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                        pbjfiresafety@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <h5>Visit Our Offices</h5>
                    <p>
                      <strong>Head Office (Chhatrapati Sambhajinagar)</strong><br />
                      N-12, ED-32/12, HUDCO, Bharatmata Nagar,<br />
                      Chhatrapati Sambhajinagar, 431001
                    </p>
                    <p>
                      <strong>Branch Office (Pune)</strong><br />
                      5B, Janranjani, Next to Mangal Bhairav,<br />
                      Nanded City, Pune - 41
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Form */}
            <Col md={6} className="mb-4">
              <Card className="contact-form-card">
                <Card.Body>
                  <h2 className="text-center mb-4">Send Us a Message</h2>
                  {formSubmitted ? (
                    <div className="success-message">
                      <h5>Thank You!</h5>
                      <p>Your message has been sent successfully. We’ll get back to you soon.</p>
                    </div>
                  ) : (
                    <>
                      {error && (
                        <div className="error-message">
                          <p>{error}</p>
                        </div>
                      )}
                      <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                          />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                          />
                        </Form.Group>
                        <Form.Group controlId="formPhone" className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                          />
                        </Form.Group>
                        <Form.Group controlId="formSubject" className="mb-3">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Enter the subject of your message"
                            required
                          />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className="mb-3">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            required
                          />
                        </Form.Group>
                        <Button variant="danger" type="submit" className="submit-button">
                          Send Message
                        </Button>
                      </Form>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Google Map Section */}
      <Container fluid className="map-section">
        <Container>
          <h2 className="text-center mb-5">Find Our Head Office</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.8708977505594!2d75.34208567468539!3d19.905245025418164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3aca052b165%3A0xd96f1694448b2df7!2sPBJ%20Fire%20Services!5e1!3m2!1sen!2sin!4v1743674908964!5m2!1sen!2sin%22%20width=%22800%22%20height=%22600%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen=""
              loading="fast"
              referrerPolicy="no-referrer-when-downgrade"
              title="PBJ Fire Head Office Location"
            ></iframe>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default Contact;