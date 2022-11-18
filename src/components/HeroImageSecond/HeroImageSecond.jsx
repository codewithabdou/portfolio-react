import React from "react";

import "./HeroImageSecondStyles.css";


const HeroImageSecond = ({ title, description,ImageUrl }) => {
  return (
    <div className="main">
      <div className="mask">
        <img className="second-img" src={ImageUrl} alt="secondImage" />
      </div>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeroImageSecond;
