import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import * as routes from "../../routePaths";
import "./_header.scss";
import contact from "../../assets/images/contact.png";
import socials1 from "../../assets/images/socials-1.png";
import dark from "../../assets/images/dark.png";
import light from "../../assets/images/light.png";
import projects from "../../assets/images/projects.png";
import projectsLite from "../../assets/images/projects-lite.png";

const Header = props => {
  let [show, setShow] = useState(false);
  let [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("darkTheme"))
  );
  const handleTheme = () => {
    localStorage.setItem("darkTheme", JSON.stringify(!darkTheme));
    setDarkTheme(!darkTheme);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let darkTheme = JSON.parse(localStorage.getItem("darkTheme"));

    if (darkTheme) {
      document.documentElement.style.setProperty(
        `--background-color`,
        "#252525"
      );
      document.documentElement.style.setProperty(`--main-heading`, "white");
      document.documentElement.style.setProperty(`--sub-heading`, "#aaa3a3");
      document.documentElement.style.setProperty(`--paragraph`, "#6d6d6d");
      document.documentElement.style.setProperty(
        `--aboutme-blogs-bg`,
        "#232323"
      );
      document.documentElement.style.setProperty(
        `--companies-click-to-view-bg`,
        "#252525"
      );
      document.documentElement.style.setProperty(
        `--contact-us-bg-img`,
        "linear-gradient(180deg, #232323 0%, #272727 100%)"
      );
      document.documentElement.style.setProperty(`--resume-main-bg`, "#1B1B1B");
      document.documentElement.style.setProperty(`--testimonial`, "#2a303b");
      document.documentElement.style.setProperty(
        `--testimonial-shadow`,
        "#2c2e31"
      );
    } else {
      document.documentElement.style.setProperty(`--background-color`, "white");
      document.documentElement.style.setProperty(`--main-heading`, "#1d1d1d");
      document.documentElement.style.setProperty(`--sub-heading`, "#646464");
      document.documentElement.style.setProperty(`--paragraph`, "#504f4f");
      document.documentElement.style.setProperty(
        `--aboutme-blogs-bg`,
        "#faf8f8"
      );
      document.documentElement.style.setProperty(
        `--companies-click-to-view-bg`,
        "#ededed"
      );
      document.documentElement.style.setProperty(
        `--contact-us-bg-img`,
        "linear-gradient(180deg, #ededed 0%, #ffffff 100%)"
      );
      document.documentElement.style.setProperty(`--resume-main-bg`, "#EAEAEA");
      document.documentElement.style.setProperty(`--testimonial`, "#EFEFEF");
      document.documentElement.style.setProperty(
        `--testimonial-shadow`,
        "#D9D9D9"
      );
    }
    let projectSection = document.getElementById("projects-bg");
    if (projectSection) {
      darkTheme
        ? (document.getElementById("projects-bg").src = projects)
        : (document.getElementById("projects-bg").src = projectsLite);
    }
  }, [darkTheme, setDarkTheme]);
 
};
export default Header;
