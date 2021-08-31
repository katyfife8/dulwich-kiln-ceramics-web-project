import React, { useState } from "react";

// Components
import { NavLink } from "react-router-dom";
import Logo from "../Logo";

// Assets
import dkclogo from "../../assets/logos/dkclogo.svg";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Styles
import "./styles.css";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleClick = () => setMobileMenu(!mobileMenu);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div id="nav-logo">
            <Logo
              img={dkclogo}
              alt="Dulwich Kiln Ceramics logo"
              width="270px"
              height="44px"
            />
          </div>
          <ul className={mobileMenu ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/studio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Studio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/workshops"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Workshops
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/shop"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/account"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                My account
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {mobileMenu ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;