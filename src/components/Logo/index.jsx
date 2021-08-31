import React from "react";

// Components
import { NavLink } from "react-router-dom";

const Logo = (props) => {
  return (
    <NavLink exact to="/">
      <img src={props.img} alt={props.alt} />
    </NavLink>
  );
};

export default Logo;