import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
import "./_contactUs.scss";
// import arrow from "../../../assets/images/right-arrow.png";
// import * as routes from "../../../routePaths";
import validator from "validator";
import * as emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";

const _contactUs = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const sendMail = e => {
    e.preventDefault();
    setSending(true);
    if (validator.isEmpty(name)) {
      toast.error("Name field can't be empty");
      setSending(false);
      return;
    }
    if (!validator.isEmail(email)) {
      toast.error("Please enter valid email");
      setSending(false);
      return;
    }
    if (validator.isEmpty(subject)) {
      toast.error("Subject Can't be empty");
      setSending(false);
      return;
    }
    if (validator.isEmpty(message)) {
      toast.error("Please type some message");
      setSending(false);
      return;
    }

    let templateParams = {
      from_name: name,
      to_name: "Shodipo Ayomide",
      subject: subject,
      message_html: message,
      email : email
    };
    emailjs
      .send(
        "gmail",
        "template_Vw8OQELj",
        templateParams,
        "user_6HJktt9kRKnwxqo8qDYnT"
      )
      .then(res => {
        console.log(res);
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setSending(false);
      })
      .catch(err => {
        console.log(err);
        setSending(false);
        toast.error("Oops! Something went wrong");
      });
  };

  return (
    <Fragment>
      <section
        id="contactUs"
        className="container-fluid contact-us section-spacing"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 projects-text-col pr-1">
              <div className="title">
                <p style={{paddingBottom: "10px"}}>Email?</p>
              </div>
              <h5>
                Got an invitation?
                <br /> Let's talk.
              </h5>
              <div>
              <a href="mailto:shodipovi@gmail.com"> <h6>shodipovi@gmail.com</h6></a>
              </div>
            </div>
            <div className="col-12 col-lg-7 contact-us-form-col position-relative">
              <form className="contact-us-form" onSubmit={sendMail}>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />
                <textarea
                  id="message"
                  placeholder="write your message here"
                  name="message"
                  rows="5"
                  className="message-text"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                >
                  Message
                </textarea>
                <button
                  type="submit"
                  className="send-message"
                  disabled={sending}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section-spacing container-fluid click-to-view-resume">
        <div className="row ">
          <div className="col-12 text-center">
            <p className="heading">Click to view my Resume!</p>
            <Link to={routes.resume}>
              <button className="primary-btn">
                Resume
                <img
                  src={arrow}
                  className="mr-0"
                  style={{ marginLeft: "7px", height: "10px" }}
                  alt="arrow"
                />
              </button>
            </Link>
          </div>
        </div>
      </section> */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};
export default _contactUs;
