import React from "react";
import "./_aboutMe.scss";
import aboutImg from "../../../assets/images/aboutMe.png";
import contact from "../../../assets/images/contact.png";

const AboutMe = props => (
  <section id="aboutMe" className="aboutMe container-fluid section-spacing">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-5 about-text-col">
          <div className="section-heading">
            <h4 className="about-me-heading">About Me</h4>
          </div>
          <div className="about-text">
            <p className="description">
              Lorem ipsum dolor sit amet, consetetur sacing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd
            </p>
          </div>
          <div className="row ml-0 about-lists-row">
            <ul className="col-12 col-lg-6 about-list">
              <li className="description">Problem Solving</li>
              <li className="description">Finding the Right Solution</li>
              <li className="description">Finding the Right Solution</li>
              <li className="description">Finding the Right Solution</li>
            </ul>
            <ul className="col-12 col-lg-6 about-list">
              <li className="description">Problem Solving</li>
              <li className="description">Finding the Right Solution</li>
              <li className="description">Finding the Right Solution</li>
              <li className="description">Finding the Right Solution</li>
            </ul>
            <ul className="col-12 col-lg-6 about-list">
              <li className="description">Problem Solving</li>
              <li className="description">Finding the Right Solution</li>
              <li className="description">Finding the Right Solution</li>
              <li className="description">Finding the Right Solution</li>
            </ul>
            <ul className="col-12 col-lg-6 about-list">
              <li className="description">Problem Solving</li>
              <li className="description">Finding the Right Solution</li>
              <li className="description">Finding the Right Solution</li>
              <li className="description">Finding the Right Solution</li>
            </ul>
          </div>
          <div className="contact-me-wrapper">
            <button className="primary-btn">
              <img src={contact} alt="contact" />
              Contact Me
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-7 about-img-col">
          <img className="img-fluid" src={aboutImg} alt="about-me" />
        </div>
      </div>
    </div>
  </section>
);
export default AboutMe;
