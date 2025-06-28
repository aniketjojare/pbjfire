import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaFire, FaClipboardCheck, FaTools, FaBell, FaSyncAlt, FaChartLine } from "react-icons/fa";
import "../styles/Services.css";
import installImage from "../assets/installation.webp";
import trainingImage from "../assets/training.webp";
import maintenanceImage from "../assets/maintenance.webp";
import alarmImage from "../assets/alarm.webp";
import refillImage from "../assets/refill.webp";
import consultingImage from "../assets/consulting.webp";

function Services() {
  const services = [
    {
      icon: <FaFire />,
      image: installImage,
      title: "Fire Safety Installation",
      description: "Expert installation of fire hydrants, alarms, and extinguishers. We ensure your business is fully prepared for any fire emergency.",
    },
    {
      icon: <FaClipboardCheck />,
      image: trainingImage,
      title: "Fire Safety Audits & Training",
      description: "Comprehensive safety audits, compliance checks, and hands-on training programs to empower your organization with fire safety expertise.",
    },
    {
      icon: <FaTools />,
      image: maintenanceImage,
      title: "Equipment Maintenance & Inspection",
      description: "Thorough maintenance and inspection of fire-fighting equipment, ensuring all systems are functional and meet safety standards.",
    },
    {
      icon: <FaBell />,
      image: alarmImage,
      title: "Fire Alarm System Installation",
      description: "Top-tier fire alarm installations including smoke detectors, manual call points, and beam detector panels for reliable protection.",
    },
    {
      icon: <FaSyncAlt />,
      image: refillImage,
      title: "Fire Extinguisher Refilling",
      description: "Efficient refilling and servicing of fire extinguishers to maintain compliance and ensure readiness for emergencies.",
    },
    {
      icon: <FaChartLine />,
      image: consultingImage,
      title: "Fire Safety Consulting",
      description: "Specialized fire safety planning, risk assessment, and regulatory compliance guidance tailored for diverse industries.",
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero-section">
        <div className="hero-overlay">
          <Container className="hero-content">
            <h1>Your Proven Fire Safety Solution</h1>
            <p>Comprehensive Solutions for Prevention and Protection.</p>
            <Button variant="danger" href="/contact" className="hero-button">
              Get Started Today
            </Button>
          </Container>
        </div>
      </div>

      {/* Services Section */}
      <Container fluid className="services-content-section">
        <Container>
          <h2 className="text-center mb-5">Our Expert Services</h2>
          <Row>
            {services.map((service, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="service-card">
                  <div className="service-image-wrapper">
                    <img src={service.image} alt={service.title} className="service-image" />
                  </div>
                  <Card.Body>
                    <div className="service-icon">{service.icon}</div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Services;