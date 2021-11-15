import React from "react";
import "./_introduction.scss";
import shodipoayomide from "./shodipoayomide.jpg";
import dots from "../../../assets/images/dots.png";
import line from "../../../assets/images/introlines.png";
import dotsSquare from "../../../assets/images/dots-square.png";
// import socials from "../../../assets/images/socials.png";
// import socials1 from "../../../assets/images/socials-1.png";
// import contact from "../../../assets/images/contact.png";
import brackets from "../../../assets/images/brackets.png";
import file from "../../../assets/images/file.png";
import zigzag from "../../../assets/images/zigzag.png";

const Introduction = props => (
  <section id="intro" className="intro container section-spacing">
    <div className="row">
      <div className="col-12 col-lg-6 intro-text-col">
        {/* <div className="socials-img d-none d-lg-block">
          <img src={socials} alt="socials" style={{ width: "12px" }} />
        </div> */}
        <div className="intro-text-box">
          <h1>Shodipo Ayomide</h1>
          <p className="sub-text">Global Head, Developer Advocacy at <b>Polygon</b></p>
          <p className="description desc" style={{color: "#969696"}}>
          Polygon solves pain points associated with Blockchains, like high gas fees and slow speeds, without sacrificing on security. This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc, but with at least three major upsides:
          </p>
          {/* <img
            className="d-block d-lg-none"
            src={socials1}
            alt="socials"
            style={{ width: "79%", marginBottom: "20px" }}
          /> */}
          <a href="https://speaking.shodipoayomide.com" target="_blank" rel="noopener noreferrer"> <button className="primary-btn">Speaking</button></a>
        </div>
        <img src={zigzag} className="zigzag d-none d-lg-block" alt="zig-zag" />
      </div>
      <div className="col-12 col-lg-6">
        <div className="dots">
          <img className="img-fluid dots-img" src={dots} alt="freelancer" />
        </div>
        <div className="freelancer-img-div">
          <img className="img-fluid" style={{borderStyle: "dashed", borderColor: "#B2ACAB"}} src={shodipoayomide} alt="shodipoayomide" loading="lazy" />
          <img
            className="brackets d-none d-lg-block"
            src={brackets}
            alt="brackets"
          />
          <img className="file d-none d-lg-block" src={file} alt="file" />
        </div>
        <div>
          <img className="dashed-box" src={line} alt="line" />
        </div>
      </div>
    </div>
    <img
      className="square-dots dots-img d-none d-lg-block"
      src={dotsSquare}
      alt="dots-sq"
    />
  </section>
);
export default Introduction;
