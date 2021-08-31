import React, { useState } from "react";

// Components
import Input from "../Input";
import Button from "../../Button";

// Styles
import "../styles.css";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState(" ");

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for signing up!");
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
    <form onSubmit={handleSubscribeSubmit} className="subscribe">
      <Input
        type="email"
        title="Email"
        className="visually-hidden"
        id="email"
        placeholder="email@address.com"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
      />
      <Button type="submit" action="sign up" />
    </form>
  );
};

export default SubscribeForm;