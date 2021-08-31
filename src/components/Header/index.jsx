import React from "react";

// Components
import PromoStrip from "../PromoStrip";
import NavBar from "../NavBar";

// Styles
import "./styles.css";

const Header = () => {
  return (
    <header>
      <PromoStrip />
      <NavBar />
    </header>
  );
};

export default Header;