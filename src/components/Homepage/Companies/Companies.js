import React from "react";
import "./_companies.scss";
import facebook from "../../../assets/images/facebook.png";
import google from "../../../assets/images/google.png";
import paypal from "../../../assets/images/paypal.png";
import cloud from "../../../assets/images/cloud.png";

const Companies = props => {
  let icons = [
    google,
    facebook,
    paypal,
    cloud,
    google,
    facebook,
    paypal,
    cloud,
    google,
    facebook
  ];
  return (
    <section id="companies" className="companies section-spacing">
      <p className="companiesText">
        Companies we have worked with and improved their products
      </p>
      <div className="icons-div">
        {icons.map((img, i) => (
          <figure key={i} className="icon-fig">
            <img
              className="img-fluid comp-icon"
              src={img}
              alt={`company-logo-${i}`}
            />
          </figure>
        ))}
      </div>
    </section>
  );
};
export default Companies;
