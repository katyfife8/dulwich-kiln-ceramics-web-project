import React from "react";

// Components

import BackgroundImage from "../BackgroundImage";
import BackgroundImageMobile from "../BackgroundImageMobile";
import Button from "../Button";

// Styles
import "./styles.css";

const Hero = (props) => {
  return (
    <section id="hero">
      <div className="desktop-background-image">
        <BackgroundImage />
      </div>

      <div className="mobile-background-image">
        <BackgroundImageMobile />
      </div>

      <div className="hero-items">
        <h1 className="title-text">Artisan ceramics and glassware</h1>
        <p className="hero-subtitle">Handmade in London</p>
        <div className="button-row">
          <div className="button-container">
            <Button action="shop sale" path="../Shop" />
          </div>
          <div className="button-container">
            {" "}
            <Button action="discover workshops" path="../Workshop" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;