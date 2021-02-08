import React, { Fragment, useEffect } from "react";
import Header from "../common/Header";
import Introduction from "./Introduction/Introduction";
import AboutMe from "./AboutMe/AboutMe";
// import Companies from "./Companies/Companies";
// import Projects from "./Projects/Projects";
import MyBlogs from "./MyBlogs/MyBlogs";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "../common/Footer";
import Testimonials from "./Testimonials/Testimonials";

const Homepage = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Header />
      <Introduction />
      <AboutMe />
      {/* <Companies />
      <Projects /> */}
      <MyBlogs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </Fragment>
  );
};
export default Homepage;
