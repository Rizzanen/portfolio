import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // Handle success, e.g., show a success message or redirect to a confirmation page
      setSubmitMessage(
        "Thank you for your message! I will get back to you asap."
      );
    } else {
      // Handle error, e.g., display an error message
      setSubmitMessage("Messasge sent failed. Please try again!");
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="contactNavigationbar">
        <nav>
          <Link to={"/"}>
            <h2>Back</h2>
          </Link>
        </nav>
        <div className="socialMedia">
          <a
            className="github"
            href={"https://github.com/Rizzanen"}
            target="_blank"
          >
            <GitHubIcon style={{ fontSize: 40 }} />
          </a>
          <a
            className="linkedin"
            href={"https://www.linkedin.com/in/aapo-rissanen-0b25802a1/"}
            target="_blank"
          >
            <LinkedInIcon style={{ fontSize: 46 }} />
          </a>
        </div>
      </div>
      <div className="contact">
        <form
          action="https://formspree.io/f/xdorrypd"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="namediv">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="emaildiv">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="messagediv">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="button" type="submit">
            Send
          </button>
          {submitMessage && <p className="submitMessage">{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
