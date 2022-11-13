import React from "react";

import "./HeroImageSecondStyles.css";

import secondImage from "../../assets/second-bg.jpg";

const HeroImageSecond = ({ title, description }) => {
  return (
    <div className="main">
      <div className="mask">
        <img className="second-img" src={secondImage} alt="secondImage" />
      </div>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeroImageSecond;
