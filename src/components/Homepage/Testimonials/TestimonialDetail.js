import React from "react";
import "./_testimonial_detail.scss";

const TestimonialDetail = ({
  selected: { image, name, post, organization, description }
}) => (
  <div className="testimonial-user-div">
    <div className="testimonial-detail">
      <div className="row">
        <div className="col-2 text-right" style={{ paddingTop: "10px" }}>
          <img className="avatar testimonial-detail-image" src={image} alt="" />
        </div>
        <div className="col-10">
          <h5 className="testimonial-name">{name}</h5>
          <p>
            <span>{post}, </span>
            <span className="testimonial-organzation">{organization}</span>
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);
export default TestimonialDetail;
