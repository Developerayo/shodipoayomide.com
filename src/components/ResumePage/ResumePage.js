import React, { Fragment, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "./_resume.scss";
import profile from "../../assets/images/freelancer.png";
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

      <Footer />
    </Fragment>
  );
};
export default ResumePage;
