import React from "react";
import {HeroImageSecond,AboutContent} from "../";
import ImageUrl from "../../assets/second-bg.jpg"


const About = () => {
  return (
    <div>
      {" "}
      <HeroImageSecond
        title={"ABOUT."}
        description={"I am a friendly front-end developer"}
        ImageUrl={ImageUrl}
      />
      <AboutContent/>
    </div>
  );
};

export default About;
