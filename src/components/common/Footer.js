import React, { Fragment, useEffect } from "react";
import $ from "jquery";
import "./_footer.scss";
import dev from "../../assets/images/dev.png";
import github from "../../assets/images/github.png";
import oo from "../../assets/images/oo.png";
import linked from "../../assets/images/linked.png";
import twitter from "../../assets/images/twitter.png";

const Footer = props => {
  let icons = [twitter, github, oo, linked, dev];

  useEffect(() => {
    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {
        $("#back2Top").fadeIn();
      } else {
        $("#back2Top").fadeOut();
      }
    });
    $(document).ready(function() {
      $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    });
  });

  return (
    <Fragment>
      <div className="container footer">
        <div className="row ml-0 mr-0">
          <div className="col-12 col-lg-6 pl-0 footer-text" style={{color: "#c2c2c2"}}>
            &copy; 2021 Shodipo Ayomide
          </div>
          <div className="col-12 col-lg-6 pr-0">
            <ul className="footer-list">
              {icons.map((icon, i) => (
                <li key={i}>
                  <img src={icon} alt={`icon-${i}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="back2Top" title="Back to top" href="#">
        &#10148;
      </div>
    </Fragment>
  );
};
export default Footer;
