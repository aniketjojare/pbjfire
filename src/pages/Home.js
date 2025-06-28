import React from "react";
import HeroSection from "../components/HeroSection";
import Highlights from "../components/Highlights";
import ProjectCarousel from "../components/ProjectCarousel";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";

import "../styles/Highlights.css";
import "../styles/ProjectCarousel.css";
import "../styles/Testimonials.css";
import "../styles/ContactCTA.css";
import "../styles/Home.css"; // Global styling

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Highlights />
      <ProjectCarousel />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Home;