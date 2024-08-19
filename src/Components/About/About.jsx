import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>
          Edusity University is dedicated to empowering students with the skills
          and knowledge needed for success in a global economy. We offer a
          dynamic, innovative learning experience with both online and on-campus
          programs, ensuring flexibility for every student.
        </p>
        <h2>Global Learning, Real Opportunities </h2>
        <p>
          Our curriculum blends traditional
          disciplines with cutting-edge fields, preparing students for the
          challenges of tomorrow. Strong industry partnerships provide
          real-world opportunities for internships, research, and career
          development.
        </p>
        <h2>A Community of Excellence</h2>
        <p>
           At Edusity University, you'll join a
          vibrant, supportive community focused on academic excellence and
          personal growth. Our graduates are ready to lead, innovate, and make a
          lasting impact on the world.
        </p>
      </div>
    </div>
  );
};

export default About;
