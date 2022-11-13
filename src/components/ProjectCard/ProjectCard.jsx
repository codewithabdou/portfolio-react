import React from "react";

import "./ProjectCardStyles.css";

const ProjectCard = ({ source, description, title }) => {
  return (
    <div className="card">
      <img src={source} alt="ProjectImage"  />
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="pro-btns">
        <a href="http://github.com/codewithabdou" target="_blank" className="btn" style={{margin : "1rem"}} rel="noopener noreferrer">Github repo</a>
        <a href="http://colorwar.netlify.app/" target="_blank" className="btn btn-light" style={{margin : "1rem"}} rel="noopener noreferrer">Website</a>
      </div>
    </div>
  );
};

export default ProjectCard;
