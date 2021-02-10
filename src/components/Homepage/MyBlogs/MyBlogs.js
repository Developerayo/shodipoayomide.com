import React from "react";
import "./_myBlogs.scss";
import toRight from "../../../assets/images/point-to-right.png";
import circles from "../../../assets/images/circles.png";

const MyBlogs = props => {
  // let arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section
      id="blogs"
      className="container-fluid blogs position-relative section-spacing"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5  projects-text-col">
            <div className="title">
              <p style={{paddingBottom: "10px"}}>Latest Articles</p>
            </div>
            <h5>
              What's new?
              <br />
              My blog and news.
            </h5>
            <p className="paragraph" style={{color: "#969696"}}>
              I write usually about engineering, community, <br />  & life.
            </p>
            <div>
              <a href="https://dev.to/developerayo" alt="" target="_blank" rel="noopener noreferrer"><button className="primary-btn">Read My Articles</button></a> <br /><br /><br />
            </div>
          </div>
          <div className="col-12 col-lg-7 position-relative">
            <ul className="blogs-list">
            <li>
                  <div className="row">
                    <div className="col-4 col-lg-3 pl-0 column">
                      January 12, 2021
                    </div>
                    <div className="col-7 col-lg-6 column blog-name">
                     <a href="https://dev.to/developerayo/the-journey-is-only-1-finished-10o" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <h6>The journey is only 1% finished</h6></a>
                    </div>
                    <div className="col-1 col-lg-1 pr-0 text-right column">
                    <a href="https://dev.to/developerayo/the-journey-is-only-1-finished-10o" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <img src={toRight} alt="" /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-4 col-lg-3 pl-0 column">
                      August 2, 2020
                    </div>
                    <div className="col-7 col-lg-6 column blog-name">
                     <a href="https://dev.to/developerayo/mentorship-the-way-forward-4l85" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <h6>Mentorship: The Way Forward</h6></a>
                    </div>
                    <div className="col-1 col-lg-1 pr-0 text-right column">
                    <a href="https://dev.to/developerayo/mentorship-the-way-forward-4l85" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <img src={toRight} alt="" /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-4 col-lg-3 pl-0 column">
                      June 4, 2019
                    </div>
                    <div className="col-7 col-lg-6 column blog-name">
                     <a href="https://dev.to/developerayo/deploying-static-sites-to-netlify-from-codesandbox-1jnl" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <h6>Deploying Static Sites to Netlify from CodeSandbox</h6></a>
                    </div>
                    <div className="col-1 col-lg-1 pr-0 text-right column">
                    <a href="https://dev.to/developerayo/deploying-static-sites-to-netlify-from-codesandbox-1jnl" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <img src={toRight} alt="" /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-4 col-lg-3 pl-0 column">
                      October 12, 2019
                    </div>
                    <div className="col-7 col-lg-6 column blog-name">
                     <a href="https://dev.to/developerayo/safeguard-your-blog-content-in-reactjs-and-css-510l" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <h6>Safeguard your blog content in Reactjs and CSS</h6></a>
                    </div>
                    <div className="col-1 col-lg-1 pr-0 text-right column">
                    <a href="https://dev.to/developerayo/safeguard-your-blog-content-in-reactjs-and-css-510l" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <img src={toRight} alt="" /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-4 col-lg-3 pl-0 column">
                      July 9, 2019
                    </div>
                    <div className="col-7 col-lg-6 column blog-name">
                     <a href="https://dev.to/developerayo/getting-started-with-raspberry-pi-3-25gl" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <h6>Getting started with Raspberry Pi 3</h6></a>
                    </div>
                    <div className="col-1 col-lg-1 pr-0 text-right column">
                    <a href="https://dev.to/developerayo/getting-started-with-raspberry-pi-3-25gl" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <img src={toRight} alt="" /></a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-4 col-lg-3 pl-0 column">
                      March 16, 2020
                    </div>
                    <div className="col-7 col-lg-6 column blog-name">
                     <a href="https://dev.to/developerayo/unstack-workshop-on-react-js-to-kick-off-soon-in-lagos-2ido" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <h6>unStack Workshop on React.js to Kick Off Soon in Lagos</h6></a>
                    </div>
                    <div className="col-1 col-lg-1 pr-0 text-right column">
                    <a href="https://dev.to/developerayo/unstack-workshop-on-react-js-to-kick-off-soon-in-lagos-2ido" style={{textDecoration: "none"}} alt="" target="_blank" rel="noopener noreferrer"> <img src={toRight} alt="" /></a>
                    </div>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        className="d-none d-lg-block"
        src={circles}
        alt="circles"
        style={{
          position: "absolute",
          top: "15%",
          left: "800px",
          maxHeight: "70%"
          // display : "none"
        }}
      />
    </section>
  );
};
export default MyBlogs;
