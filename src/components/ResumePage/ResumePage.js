import React, { Fragment, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./_resume.scss";
import profile from "../../assets/images/shodipoayomide.JPG";
import inbox from "../../assets/images/inbox.png";
import location from "../../assets/images/location.png";
import art from "../../assets/images/art.png";
import download from "../../assets/images/download.png";
import globe from "../../assets/images/globe.png";
import school from "../../assets/images/school.png";
import social1 from "../../assets/images/social1.png";
import social2 from "../../assets/images/social2.png";
import social3 from "../../assets/images/social3.png";
import calender from "../../assets/images/calender.png";
import ellipse from "../../assets/images/resume-ellipse.png";

const ResumePage = props => {
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);
  return (
    <Fragment>
      <Header />
      <div className="container resume">
        <div className="middle">
          <div className="resume-main">
            <div className="row">
              <div className="col-12 col-lg-5 resume-col">
                <div className="user-personal-info">
                  <div className="profile-image-div">
                    <img className="img-fluid" src={profile} alt="" />
                  </div>
                  <h5 className="resume-heading profile-name">
                    Shodipo Ayomide
                  </h5>
                  <p>Senior Developer Advocate af Fleek</p>
                  <ul className="resume-list">
                    <li>
                      <img src={inbox} alt="" />
                      shodipovi@gmail.com
                    </li>
                    <li>
                      <img src={location} alt="" />
                      Lagos, Nigeria
                    </li>
                    <li>
                      <img src={art} alt="" />
                      Art & Technology
                    </li>
                    <li>
                      <button className="download">
                        <img src={download} alt="download" />
                        Download
                      </button>
                      <img src={globe} alt="globe" />
                    </li>
                  </ul>
                </div>
                <div className="education d-none d-lg-block">
                  <h5 className="resume-heading">Education</h5>
                  <div className="education-item row">
                    <p className="col-12 pl-0">
                      Business Management and Finance
                    </p>
                    <div className="eduAndSchool col-6 pl-0">
                      <img src={school} alt="" />
                      Havard Business School
                    </div>
                    <div className="eduAndSchool col-6">
                      <img src={calender} alt="" />
                      June 15, 2019
                    </div>
                  </div>
                  <div className="education-item row">
                    <p className="col-12 pl-0">
                      Business Management and Finance
                    </p>
                    <div className="eduAndSchool col-6 pl-0">
                      <img src={school} alt="" />
                      Havard Business School
                    </div>
                    <div className="eduAndSchool col-6">
                      <img src={calender} alt="" />
                      June 15, 2019
                    </div>
                  </div>
                  <div className="education-item row">
                    <p className="col-12 pl-0">
                      Business Management and Finance
                    </p>
                    <div className="eduAndSchool col-6 pl-0">
                      <img src={school} alt="" />
                      Havard Business School
                    </div>
                    <div className="eduAndSchool col-6">
                      <img src={calender} alt="" />
                      June 15, 2019
                    </div>
                  </div>
                </div>
                <div className="social d-none d-lg-block">
                  <h5 className="resume-heading">Social</h5>
                  <ul className="resume-list social-links">
                    <li style={{ marginTop: "20px" }}>
                      <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social1} alt="" /> <span>@developerayo</span>
                      </a>
                    </li>
                    <li>
                      <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social2} alt="" /> <span>@developerayo</span>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social3} alt="" /> <span>@developerayo</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <img
                  className="left-bottom-img d-none d-lg-block"
                  src={ellipse}
                  alt=""
                />
              </div>
              <div className="col-12 col-lg-7 resume-col">
                <div className="summary">
                  <h5 className="resume-heading">Professional Summary</h5>
                  <p className="summary-text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem
                  </p>
                </div>
                <div className="work-experience-section">
                  <h5 className="resume-heading">Work Experience</h5>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                        Senior Developer Advocate
                      </span>
                      <span className="remote">Remote</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Fleek
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        California
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        May 15, 2020
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                        Senior Developer Advocate
                      </span>
                      <span className="remote">Remote</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Fleek
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        California
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        May 15, 2020
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                        Senior Developer Advocate
                      </span>
                      <span className="remote">Remote</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Fleek
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        California
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        May 15, 2020
                      </div>
                    </div>
                  </div>
                </div>

                <div className="education d-block d-lg-none">
                  <h5 className="resume-heading">Education</h5>
                  <div className="education-item row">
                    <p className="col-12 pl-0 pr-0">
                      Business Management and Finance
                    </p>
                    <div className="eduAndSchool col-6 pl-0">
                      <img src={school} alt="" />
                      Havard Business School
                    </div>
                    <div className="eduAndSchool col-6">
                      <img src={calender} alt="" />
                      June 15, 2019
                    </div>
                  </div>
                  <div className="education-item row">
                    <p className="col-12 pl-0 pr-0">
                      Business Management and Finance
                    </p>
                    <div className="eduAndSchool col-6 pl-0">
                      <img src={school} alt="" />
                      Havard Business School
                    </div>
                    <div className="eduAndSchool col-6">
                      <img src={calender} alt="" />
                      June 15, 2019
                    </div>
                  </div>
                  <div className="education-item row">
                    <p className="col-12 pl-0 pr-0">
                      Business Management and Finance
                    </p>
                    <div className="eduAndSchool col-6 pl-0">
                      <img src={school} alt="" />
                      Havard Business School
                    </div>
                    <div className="eduAndSchool col-6">
                      <img src={calender} alt="" />
                      June 15, 2019
                    </div>
                  </div>
                </div>
                <div className="social d-block d-lg-none">
                  <h5 className="resume-heading">Social</h5>
                  <ul className="resume-list social-links">
                    <li style={{ marginTop: "20px" }}>
                      <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social1} alt="" /> <span>@developerayo</span>
                      </a>
                    </li>
                    <li>
                      <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social2} alt="" /> <span>@developerayo</span>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social3} alt="" /> <span>@developerayo</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default ResumePage;
