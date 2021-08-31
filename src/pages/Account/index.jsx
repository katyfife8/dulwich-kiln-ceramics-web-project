import React from "react";

// Components
import LoginForm from "../../components/Form/LoginForm";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

// Assets
import heartbottlecups from "../../assets/images/heartbottlecups.jpg";

const Account = () => {
  return (
    <main>
      <section className="page-intro">
        <h1>Sign in</h1>

        <p className="subtitle">
          Log in to your account or register with us to shop online, book
          courses and build your wishlist.
        </p>
      </section>

      <section id="form-section">
        <div className="section-row">
          <div className="section-col">
            <h2>Sign in to an existing account</h2>
            <LoginForm />
            <Link to="/">
              <p>Forgotten your password?</p>
            </Link>
          </div>

          <div className="section-col">
            <h2>New customer?</h2>

            <Link to="/">
              <Button action="Create account" className="form-button" />
            </Link>

            <img
              src={heartbottlecups}
              alt="Ceramic bottle and cups with hearts glaze"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Account;