import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better Education for a better World</h1>
        <p>
          Welcome to Edusity University, where innovative learning meets
          real-world opportunities. We empower students to excel in their
          careers and make a global impact through flexible, cutting-edge
          education.
        </p>
        <button className="btn">
          Explore more
          <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
