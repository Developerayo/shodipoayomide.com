import React from "react";
import "./_myBlogs.scss";
import toRight from "../../../assets/images/point-to-right.png";
import circles from "../../../assets/images/circles.png";

const MyBlogs = props => {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section
      id="blogs"
      className="container-fluid blogs position-relative section-spacing"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5  projects-text-col">
            <div className="title">
              <p>My Blogs</p>
            </div>
            <h5 className="heading">
              What's new?
              <br />
              My blog and news.
            </h5>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
            <div>
              <button className="primary-btn">Visit My Blog</button>
            </div>
          </div>
          <div className="col-12 col-lg-7 position-relative">
            <ul className="blogs-list">
              {arr.map((v, i) => (
                <li key={i}>
                  <div className="row">
                    <div className="col-4 col-lg-3 pl-0 column">
                      May 24 . Blog
                    </div>
                    <div className="col-7 col-lg-6 column blog-name">
                      Let this be a lesson to you
                    </div>
                    <div className="col-1 col-lg-1 pr-0 text-right column">
                      <img src={toRight} alt="" />
                    </div>
                  </div>
                </li>
              ))}
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
          left: "100px",
          maxHeight: "70%"
          // display : "none"
        }}
      />
    </section>
  );
};
export default MyBlogs;
