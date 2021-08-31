import React from "react";

// Components
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import { ExternalLink } from "react-external-link";

// Assets
import dkclogocircle from "../../assets/logos/dkclogocircle.svg";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

// Styles
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <div id="footer-logo">
              <Logo img={dkclogocircle} alt="Dulwich Kiln Ceramics logo" />
            </div>
          </div>
          <div className="footer-column">
            <p className="footer-header">About</p>

            <ul className="footer-links">
              <li>
                <NavLink exact to="/about">
                  Our story
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about">
                  Commissions
                </NavLink>
              </li>

              <li>
                <NavLink exact to="/studio">
                  Studio hire
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <p className="footer-header">Customers</p>
            <ul className="footer-links">
              <li>
                <NavLink exact to="/shop">
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/">
                  Delivery and returns
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/">
                  Privacy policy
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/studio">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-column connect">
            <p className="footer-header">Follow us</p>

            <div className="social-icons">
              <ExternalLink href="https://en-gb.facebook.com">
                <FontAwesomeIcon
                  className="social-icon"
                  icon={faFacebook}
                  alt="Facebook logo"
                />
              </ExternalLink>
              <ExternalLink href="https://twitter.com">
                <FontAwesomeIcon
                  className="social-icon"
                  icon={faTwitter}
                  alt="Twitter logo"
                />
              </ExternalLink>
              <ExternalLink href="https://www.instagram.com">
                <FontAwesomeIcon
                  className="social-icon"
                  icon={faInstagram}
                  alt="Instagram logo"
                />
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;