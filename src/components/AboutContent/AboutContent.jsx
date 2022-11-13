import React from "react";
import { Link } from "react-router-dom";

import "./AboutContentStyles.css";

import reactFirstImage from "../../assets/react1.jpg";
import reactSecondImage from "../../assets/react2.webp";

const AboutContent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        padding: "1.5rem",
        flexDirection: "row",
        justifyContent : "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 600,
        }}
      >
        <h1>Who am I ?</h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            paddingTop: "0.8rem",
            paddingBottom: "0.8rem",
          }}
        >
          I am Abderrahmène Habouche A Front-end Developer from Algeria. I am a
          student at the higher school of Computer Science (ESI Algiers ex.INI).
          I've always been fascinated with how things work. fast forward to 3
          years into school and i'm now structuring, developing and implementing
          incredible web and mobile apps. Believe i’ve got the right skills and
          technologies to take your online presence on the level it truly
          deserves. Your website should be your no1 sales agent and its works
          24/7, Get a quote now that’s best for your business.
        </p>
        <Link to="/contact" className="btn">
          Contact me
        </Link>
      </div>
      <div className="images">
        <div className="top-image">
          <img src={reactSecondImage} alt="reactSecondImage" />
        </div>
        <div className="bottom-image">
          <img src={reactFirstImage} alt="reactFirstImage" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
