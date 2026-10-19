// components/Hero.jsx
import './Hero.css'
import AvailabilityPill from "@/components/AvailabilityPill/AvailabilityPill";
import Button from "@/components/Button/Button";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Introduction">
      <AvailabilityPill>Available for new Projects</AvailabilityPill>

      <h1 className="hero__heading">
        <span className="hero__heading-line">Hey!, I am Jesse</span>
        <span className="hero__heading-line hero__heading-line--role">
          Front-End Developer
        </span>
      </h1>

      <p className="hero__subtext">
        I craft beautiful, functional digital experiences that bring ideas to
        life. Specializing in modern web development and user-centered design.
      </p>

      <div className="hero__actions">
        <a href="#projects">
          <Button variant="primary">View My Work</Button>
        </a>
        <a href="#contact">
          <Button variant="secondary">Get in Touch</Button>
        </a>
      </div>
    </section>
  );
}
