import React, { useState } from "react";
import './contact.css'
import 'animate.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://formspree.io/f/mzbooyno", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (response.ok) {
      alert("Thanks for your message!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5 bg-contact">
      <h1 className="text-contact-header">Contact Me!</h1>
      <p className="text-contact">Leave me a message below!</p>
      <form className="" onSubmit={handleSubmit}>
        <div className="form-group m-3 text-input">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name here" />
        </div>
        <div className="form-group m-3 text-input">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email here" />
        </div>
        <div className="form-group m-3 text-input">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" rows="6" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Type your message here!" />
        </div>
        <button type="submit" className="btn btn-style text-input ms-3">Submit</button>
      </form>
    </div>
  );
}
export default Contact
