import React from "react";
import "./HeroImageStyles.css";
import { Link } from "react-router-dom";

import introImage from "../../assets/intro-bg.jpg";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImage} alt="introImage" />
      </div>
      <div className="content">
        <p>Hi ,I am Abderrahmène HABOUCHE.</p>
        <h1>Front-end <br/> Developer.</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
