import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/HeroSection.css";
import heroBg from '../assets/hero-bg.webp';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <Container className="text-center">
            <h1>YOUR TRUSTED FIRE SAFETY PARTNER</h1>
            <p>Ensuring safety across Chhatrapati Sambhajinagar – Now expanding to Pune</p>
            <div className="hero-buttons">
              <Button variant="danger" href="/contact">Get a Free Consultation</Button>
              <Button variant="outline-light" href="/services">Explore Our Services</Button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;