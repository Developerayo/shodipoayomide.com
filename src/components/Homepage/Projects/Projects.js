// remove from home for now


import React, { useState } from "react";
import "./_projects.scss";
import bg from "../../../assets/images/projects-bg.png";
import projects from "../../../assets/images/projects.png";
import projectsLite from "../../../assets/images/projects-lite.png";
import dashed from "../../../assets/images/dashed-line.png";

const Projects = props => {
  let [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("darkTheme"))
  );
  if (false) {
    setTheme("");
  } // REMOVE WARNING FROM TERMINAL
  return (
    <section
      id="projects"
      className="container-fluid projects position-relative"
    >
      <div className="row projects-section-row">
        <div className="col-12 col-lg-8 position-relative">
          <img className="projects-bg-img" src={bg} alt="bg" />
          <img
            className="img-fluid projects-list-img"
            src={theme ? projects : projectsLite}
            id="projects-bg"
            alt="projects"
          />
        </div>
        <div className="col-12 col-lg-4 projects-text-col">
          <div className="title">
            <p>My Projects</p>
          </div>
          <h5 className="heading">All Created Works, Selected projects,</h5>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <a
            href="#projects"
            style={{ color: "#8247E5", zIndex: 100000, cursor: "pointer" }}
          >
            View More Projects
            <img
              className="arrow"
              src={require("../../../assets/images/arrow-right.png")}
              alt="right-arrow"
            />
          </a>
        </div>
      </div>
      <img src={dashed} alt="" className="dashed-line d-none d-lg-block" />
    </section>
  );
};
export default Projects;
