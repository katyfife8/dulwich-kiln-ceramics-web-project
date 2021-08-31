import React, { useState } from "react";

// Components
import Input from "../Input";
import Button from "../../Button";

// Styles
import "../styles.css";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [message, setMessage] = useState("");

  const [firstNameError, setFirstNameError] = useState(" ");
  const [lastNameError, setLastNameError] = useState(" ");
  const [emailError, setEmailError] = useState(" ");

  // Form submission

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (firstNameError || lastNameError || emailError) {
      alert("Please complete all the fields.");
    } else {
      alert(
        `Thank you for your ${enquiryType} enquiry! We’ll be in touch soon.`
      );
      console.log(`This message says: ${message}.`);
    }
  };

  // Input validation

  const handleFirstNameChange = (e) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
    if (newFirstName.length === 0) {
      setFirstNameError("First name field cannot be blank.");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameChange = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
    if (newLastName.length === 0) {
      setLastNameError("Last name field cannot be blank.");
    } else {
      setLastNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (newEmail.length === 0) {
      setEmailError("Please enter a valid email address.");
    } else if (
      !/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        newEmail
      )
    ) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-fields">
        <Input
          type="text"
          title="First name*"
          id="first-name"
          value={firstName}
          onChange={handleFirstNameChange}
          error={firstNameError}
        />

        <Input
          type="text"
          title="Last name*"
          id="last-name"
          value={lastName}
          onChange={handleLastNameChange}
          error={lastNameError}
        />
        <Input
          type="email"
          title="Email*"
          id="email"
          placeholder="email@address.com"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
        />

        <div className="input-field">
          <label>What can we help you with?</label>

          <select
            value={enquiryType}
            onChange={(e) => setEnquiryType(e.target.value)}
          >
            <option value="order">Order</option>
            <option value="workshop">Workshop</option>
            <option value="commission">Commissions</option>
            <option value="studio hire">Studio hire</option>
          </select>
        </div>

        <div className="input-field">
          <label>Your message</label>

          <textarea
            title="Your message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
      <Button type="submit" action="send" className="form-button" />
    </form>
  );
};

export default ContactForm;