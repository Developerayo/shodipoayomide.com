import React from "react";
import "./_introduction.scss";
import freelancer from "../../../assets/images/freelancer.png";
import dots from "../../../assets/images/dots.png";
import line from "../../../assets/images/introlines.png";
import dotsSquare from "../../../assets/images/dots-square.png";
import socials from "../../../assets/images/socials.png";
import socials1 from "../../../assets/images/socials-1.png";
import brackets from "../../../assets/images/brackets.png";
import file from "../../../assets/images/file.png";
import zigzag from "../../../assets/images/zigzag.png";

const Introduction = props => (
  <section id="intro" className="intro container section-spacing">
    <div className="row">
      <div className="col-12 col-lg-6 intro-text-col">
        <div className="socials-img d-none d-lg-block">
          <img src={socials} alt="socials" style={{ width: "12px" }} />
        </div>
        <div className="intro-text-box">
          <h1>Shodipo Ayomide</h1>
          <p className="sub-text">Senior Developer Advocate af Fleek</p>
          <p className="description desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat
          </p>
          <img
            className="d-block d-lg-none"
            src={socials1}
            alt="socials"
            style={{ width: "79%", marginBottom: "20px" }}
          />
          <button className="primary-btn">Learn More</button>
        </div>

  </section>
);
export default Introduction;
