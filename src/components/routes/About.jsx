import React from "react";
import {HeroImageSecond,AboutContent} from "../";

const About = () => {
  return (
    <div>
      {" "}
      <HeroImageSecond
        title={"ABOUT."}
        description={"I am a friendly front-end developer"}
      />
      <AboutContent/>
    </div>
  );
};

export default About;
