import React from "react";
import { HeroImageSecond, ProjectCard } from "../";
import projectOneSource from "../../assets/project1.png";
import projectTwoSource from "../../assets/project2.png";
import projectThreeSource from "../../assets/project3.png";
import projectFourSource from "../../assets/project4.png";

const Projects = () => {
  const projects = [
    {
      source: projectOneSource,
      title: "Ecommerce Website Design",
      description:
        "A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.",
    },
    {
      source: projectTwoSource,
      title: "LMS / Course Website Design",
      description: "This is an online learning and teaching marketplace with over 204000 courses and 54 million students. Learn programming, marketing, data science and more.",
    },
    {
      source: projectThreeSource,
      title: "Rymo Ecommerce Design",
      description: "A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.",
    },
    {
      source: projectFourSource,
      title: "Digital Marketing Website",
      description: "Digital marketing, also known as online marketing, refers to advertising delivered through digital channels to promote brands and connect potential customers using the internet and other forms of digital communication",
    },
  ];

  return (
    <div>
      <HeroImageSecond
        title={"Projects."}
        description={"Some of my most recent work"}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              source={project.source}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
