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
            Building Developer Communities in Africa and acorss the globe, sharing technical knowledge via talks, keynotes and workshops at conferences across the globe.
            </p>
          </div>
          <div className="row ml-0 about-lists-row">
            <ul className="col-12 col-lg-6 about-list">
              <li className="description">Developer Relations</li>
             <p>Lead teams in DevRel & Managed high scale programs in DevRel acorss Africa.</p>
            </ul>
            <ul className="col-12 col-lg-6 about-list">
              <li className="description">Engineering</li>
              <p>Over 8 years experience building complex systems from the Web to mobile and Desktop side of engineering, and as a Developer Advocate, working acoross technologies. </p>
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
