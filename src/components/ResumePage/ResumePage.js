import React, { Fragment, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./_resume.scss";
import profile from "./shodipoayomide.jpg";
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
                  <br /><br />
                  <h5 className="resume-heading profile-name">
                    Shodipo Ayomide
                  </h5>
                  <p>Senior Developer Advocate & Program Manager</p>
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
                      Internation Speaker & Technologist
                    </li>
                    <li>
                      <button className="download">
                        <img style={{Color: "white"}} src={download} alt="download" />
                        <a download href="https://drive.google.com/file/d/1GNrYkVc6Bvq5GHOfzxwOQrCMXrY1zHJm/view?usp=sharing" style={{textdecoration: "none", color: "white"}}>Download CV</a>
                      </button>
                      <a href="https://twitter.com/developerayo" target="_blank" rel="noopener noreferrer"  style={{textdecoration: "none",}}><img src={globe} alt="globe" /></a>
                    </li>
                  </ul>
                </div>
                <div className="education d-none d-lg-block">
                  <h5 className="resume-heading">Education</h5>
                  <div className="education-item row">
                    <p className="col-12 pl-0">
                      Havard Business School
                    </p>
                    <div className="eduAndSchool col-6 pl-0">
                      <img src={school} alt="" />
                      Business Analytics
                    </div>
                    <div className="eduAndSchool col-6">
                      <img src={calender} alt="" />
                      June 15, 2020
                    </div>
                  </div>
                </div>
                <div className="social d-none d-lg-block">
                  <h5 className="resume-heading">Social</h5>
                  <ul className="resume-list social-links">
                    <li style={{ marginTop: "20px" }}>
                    <li>
                      <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social2} alt="" /> <span><a href="https://www.linkedin.com/in/shodipo-ayomide/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none' }}>Shodipo Ayomide</a></span>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social3} alt="" /> <span><a href="https://twitter.com/developerayo" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none' }}>@developerayo</a></span>
                      </a>
                    </li>
                    <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social1} alt="" /> <span><a href="https://github.com/developerayo" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none' }}>@developerayo</a></span>
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
                  Shodipo Ayomide is a Senior Developer Advocate, Program Manager, Community Evangelist, Open Source Contributor, Software Engineer, Media Developer Expert, and Speaker, who also contributes to a lot of open-source projects over on GitHub, he also runs some major communities like unStack Africa, Developers Circles Lagos from Facebook, Open Source Community Africa, DevRel Collective and NaijaHacks driving Nigeria & Africa forward in Technology globally, he is an international speaker who has spoken at several conferences over time in various locations across countries, in his free time he loves to, Read, see a movie and occasionally play video games, Loves Travelling to new countries, communicating/working with the developer community across the world majorly, in Africa, Europe and the America and importantly, love's Family.
                  </p>
                </div>
                <div className="work-experience-section">
                  <h5 className="resume-heading">Work Experience</h5>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                        Senior Developer Advocate
                      </span>
                      <span className="remote">United States</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Fleek
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        New York
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2020-04 - 2020-08
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                      Lead Developer Advocate & Software Engineer
                      </span>
                      <span className="remote">Canada</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        VanHack
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Vancouver
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2018-04 - 2019-05
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                      Media Developer Expert (Program)
                      </span>
                      <span className="remote">United States</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Cloudinary
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        San Francisco, Bay Area
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2019-11 - Current
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                      Community Lead (Community)
                      </span>
                      <span className="remote">Nigeria</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Developers Circles Lagos From Facebook
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Lagos
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2017-01 - Current
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                      Technical Instructor (Author Program)
                      </span>
                      <span className="remote">United States</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Egghead.io
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        New York
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2020-03 - Current
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                      Workspace Admin (Largest DevRel Channel)
                      </span>
                      <span className="remote">Slack</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        DevRel Collective, Slack
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Slack
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2020-04 - Current
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                      Founder (Community)
                      </span>
                      <span className="remote">Africa</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        unStack Africa
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        HQ=Lagos
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2019-01 - Current
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                      Core Team (Community)
                      </span>
                      <span className="remote">Africa</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Open Source Community Africa
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        HQ=Lagos
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2019-09 - Current
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                      LinkedIn Learning Author (Author Program)
                      </span>
                      <span className="remote">United States</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        LinkedIn Leading
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Mountain View, California
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2019-11 - Current
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                      Host
                      </span>
                      <span className="remote">Global</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        DevRelChat
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        HQ = Lagos, Nigeria
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2020-07 - Current
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                      Senior Software Engineer
                      </span>
                      <span className="remote">Nigeria</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Techpoint.africa
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Lagos
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2018-01 - 2020-07
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                      Senior FullStack Engineer
                      </span>
                      <span className="remote">Canada</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        LushPlabs
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Toronto
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2020-02 - 2020-06
                      </div>
                    </div>
                  </div>

                  <center>View a more detailed version of my Resume by clicking the "Download" button above :)</center>
                </div>

                <div className="education d-block d-lg-none">
                <h5 className="resume-heading">Education</h5>
                  <div className="education-item row">
                    <p className="col-12 pl-0 pr-0">
                    Havard Business School
                    </p>
                    <div className="eduAndSchool col-6 pl-0">
                      <img src={school} alt="" />
                      Business Analytics
                    </div>
                    <div className="eduAndSchool col-6">
                      <img src={calender} alt="" />
                      June 15, 2020
                    </div>
                  </div>
                </div>
                <div className="social d-block d-lg-none">
                  <h5 className="resume-heading">Social</h5>
                  <ul className="resume-list social-links">
                    <li style={{ marginTop: "20px" }}>
                      <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social2} alt="" /> <span><a href="https://www.linkedin.com/in/shodipo-ayomide/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none' }}>Shodipo Ayomide</a></span>
                      </a>
                    </li>
                    <li>
                      <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social3} alt="" /> <span><a href="https://twitter.com/developerayo" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none' }}>@developerayo</a></span>
                      </a>
                    </li>{" "}
                    <li>
                      <a href="#home" onClick={ev => ev.preventDefault()}>
                        {" "}
                        <img src={social1} alt="" /> <span><a href="https://github.com/developerayo" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none' }}>@developerayo</a></span>
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
