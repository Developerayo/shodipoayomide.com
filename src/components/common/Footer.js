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

  
};
export default Footer;
