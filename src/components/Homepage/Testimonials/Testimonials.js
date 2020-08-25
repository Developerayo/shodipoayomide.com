import React, { useState } from "react";
import "./_testimonials.scss";
import TestimonialDetail from "./TestimonialDetail";

let dataArray = [
  {
    name: "Mickey Aharony",
    post: "Senior Marketing Specialist",
    organization: "Cloudinary",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQF_IKC48DHgLw/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=GJyOeGYeqOkGzVqePfa5nGEPwDIF4pb3j8l6o4gJpJI",
    description:
      " My working relationship and then friendship with Shodipo started in 2017. My first impression was that this guy has aspirations that are much larger than his local community. Since then we've worked together on multiple projects and programs where he has proved time and time again to go above and beyond for those around him. Recommendations alone do not shed light to the positive impact Shodipo can bring to an organization, community, and the developer landscape."
  },
  {
    name: "Larissa Meiglin",
    post: "Ex. Talent Development Leader",
    organization: "VanHack",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E03AQE0FdGGSrQH-g/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=p0LgavBxJjpJM583oOIxMVZ0CqdGBFedMc4Z_kznYJU",
    description:
      " Ayo is a Speaker / Developer Advocate, Software Engineer and Entrepreneur who helps to expand the tech community worldwide. He's a very nice person, with always a smile on his face. I have no doubts that he's a great professional, with really important technical skills and soft skills, which can be a very rare thing to find in a tech talent."
  },
  {
    name: "Kingdom Orjiewuru",
    post: "Software Engineer",
    organization: "Aula",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQG6WQVFSilUuw/profile-displayphoto-shrink_800_800/0?e=1603929600&v=beta&t=nvBhOku7CDEyzgrq6oSwDWpxBIEaiExvSxM206FJvM0",
    description:
      " I started unStack with Shodipo because when it comes to building developer communities, it's in his DNA. I have enjoyed working with him in planning events that attracted many local and international speakers. His organizational skills are top-notch and I've enjoyed learning some skills from him which has helped me become better at planning and running developer community events. Shodipo is also an avid speaker who delivers great content with his talks and workshop around the globe. He's a great teammate and a highly passionate about his work."
  },
  {
    name: "Chima Precious",
    post: "Chima Precious",
    organization: "Mobile Applications Developer",
    image:
      "https://scontent.flos8-1.fna.fbcdn.net/v/t1.0-9/105050798_1699972073474468_1273220682647603883_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeFTsLdLpgfQr7bLBfgrIBl3925s9lSaUyP3bmz2VJpTIzxd8tkxaM_PEkicL_BeUbJOuDUSNrqStCbFriJNpSlm&_nc_ohc=9ZBgo2jcHXgAX8NeE7i&_nc_ht=scontent.flos8-1.fna&oh=95182f30ba03ec16cf97bbdc6cc1c264&oe=5F6B05E1",
    description:
      " Shodipo Ayomide , as i call him 'Developerayo', is dedicated to providing quality work. He checks and rechecks his software before turning it in for presentation to the client. He strives to make his programs as user friendly as possible understanding that not everyone is an expert programmer. He is detail oriented and rarely has any bugs in his finished product. Developerayo’s energy is limitless and his enthusiasm serves to motivate everyone on his team."
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
        <h4 className="testimonials-heading pb-4">Recommendations</h4>
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
        {/* <div className="row">
          <div className="col-6">
            <img
              className="avatar sm testimonial-image"
              src={testimonials[4].image}
              alt=""
              onClick={() => setSelected(testimonials[4])}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Testimonials;
