import React, { useState } from "react";

// Components
import Input from "../Input";
import Button from "../../Button";

// Styles
import "../styles.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(" ");
  const [passwordError, setPasswordError] = useState(" ");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // {emailError || passwordError ? alert("Please complete all fields.") : alert("You have successfully logged in to your account!")};

    if (emailError || passwordError) {
      alert("Please complete all fields.");
    } else {
      alert("You have successfully logged in to your account!");
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

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length === 0) {
      setPasswordError("Password field cannot be blank.");
    } else if (newPassword.length < 8) {
      setPasswordError("Password must contain a minimum of 8 characters.");
    } else if (!/\d/.test(newPassword)) {
      setPasswordError("Password must contain at least 1 number.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <Input
        type="email"
        title="Email"
        id="email"
        placeholder="email@address.com"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
      />
      <Input
        type="password"
        title="Password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
      />
      <Button type="submit" action="Sign in" className="form-button" />
    </form>
  );
};

export default LoginForm;