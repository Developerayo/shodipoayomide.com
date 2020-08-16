import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./_contactUs.scss";
import arrow from "../../../assets/images/right-arrow.png";
import * as routes from "../../../routePaths";
import validator from "validator";
import * as emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";

const _contactUs = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("write your message here");
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
        toast.error("Something went wrong");
      });
  };


};
export default _contactUs;
