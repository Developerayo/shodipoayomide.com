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
    </section>
  );
};
export default MyBlogs;
