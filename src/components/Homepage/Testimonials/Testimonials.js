import React, { useState } from "react";
import "./_testimonials.scss";
import TestimonialDetail from "./TestimonialDetail";

let dataArray = [
  {
    name: "Shodipo Ayomide",
    post: "CEO",
    organization: "Hotels.ng",
    image:
      "https://scontent.flhe2-1.fna.fbcdn.net/v/t1.0-9/10422376_10152142699272623_2876956110947339528_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeFkzyj84Pmhf4O-kqy6AzF8QWWQjzr_AJNBZZCPOv8Akwt-D-D6iJPlMKpiq3ebj9eW5OfO9ViCkUpd-4vuGT9O&_nc_ohc=X4qCWJE_UJMAX_9a99q&_nc_oc=AQk2Ry_6JIFXBmkGGZH4cKaxuLDYYzO68Nu-to118hLeUpNCOylDePts5QGFYnjmipc&_nc_ht=scontent.flhe2-1.fna&oh=3789fe8b11c411053b654edd075909a0&oe=5F507EC0",
    description:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed diam nonumy eirmod"
  },
  {
    name: "Shodipo Ayomide 1",
    post: "CEO 1",
    organization: "1 Hotels.ng",
    image:
      "https://scontent.flhe2-1.fna.fbcdn.net/v/t1.0-9/69258398_2433948743543895_4801811623482228736_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeEC6JRDowJDuGIdjzCUXMV20j76WlcKNdPSPvpaVwo10ww1gwZH_oVgNMzWAbJS1xsP_ldgB-u42mLYfq40W7bk&_nc_ohc=msvKCqfrXooAX_6n-PV&_nc_ht=scontent.flhe2-1.fna&oh=8d056a90f02db71fd0c60e9fbd0792ad&oe=5F4F47EB",
    description:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed diam nonumy eirmod 1"
  },
  {
    name: "Shodipo Ayomide 2",
    post: "CEO 2",
    organization: "Hotels.ng 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW8EUVLlWMsQBXOBjiKFuNJBXCX2lmOMvr_g&usqp=CAU",
    description:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed diam nonumy eirmod 2"
  },
  {
    name: "Shodipo Ayomide 3",
    post: "CEO 3",
    organization: "Hotels.ng 3",
    image:
      "https://www.upwork.com/profile-portraits/c1okZ6YSczvp9nZfCRdLjT6rWP8PSE4QFbIuL6PnAQDEAKBWAZykPhaoJqfDQTKg7b",
    description:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed diam nonumy eirmod 3"
  },
  {
    name: "Shodipo Ayomide 4",
    post: "CEO 4",
    organization: "Hotels.ng 4",
    image:
      "https://scontent.flhe2-1.fna.fbcdn.net/v/t1.0-9/48994275_252190439003234_3750715461226987520_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeEOcxjhIGDlfN4GAegB1hiJQlccQWjP9XRCVxxBaM_1dIna6WpbMLd2duXQU7SkkG7N_GzVAm1sXenTbFhh3DrR&_nc_ohc=Vnh6MSF05I4AX8fM8aN&_nc_ht=scontent.flhe2-1.fna&oh=d41a7e6a189e61a4cae78fb5915aced1&oe=5F4DA440",
    description:
      " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed diam nonumy eirmod 4"
  }
];

const Testimonials = props => {
  const [testimonials, setTestimonials] = useState(dataArray);
  const [selected, setSelected] = useState(testimonials[0]);
  if (false) {
    setTestimonials([]);
  } // NOT NEEDED JUST TO REMOVE WARNING FROM TERMINAL ON CLIENT DEMAND
  return (
    <section
      id="testimonials"
      className="container-fluid testimonials section-spacing"
    >
      <div className="container">
        <h4 className="testimonials-heading pb-4">Testimonials</h4>
        <div className="row">
          <div className="col-6 text-center">
            <img
              className="avatar sm testimonial-image"
              src={testimonials[0].image}
              alt=""
              onClick={() => setSelected(testimonials[0])}
            />
          </div>
          <div className="col-6 text-center">
            <img
              className="avatar sm testimonial-image"
              src={testimonials[1].image}
              alt=""
              onClick={() => setSelected(testimonials[1])}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              className="avatar testimonial-image"
              src={testimonials[2].image}
              alt=""
              onClick={() => setSelected(testimonials[2])}
            />
          </div>
          <div className="col-6 text-right">
            <img
              className="avatar testimonial-image"
              src={testimonials[3].image}
              alt=""
              onClick={() => setSelected(testimonials[3])}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TestimonialDetail selected={selected} />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              className="avatar sm testimonial-image"
              src={testimonials[4].image}
              alt=""
              onClick={() => setSelected(testimonials[4])}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
