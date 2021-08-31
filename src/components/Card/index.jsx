import React from "react";

// Components
import { Link } from "react-router-dom";
import Button from "../Button";

// Styles
import "./styles.css";

const Card = (props) => {
  return (
    <div className={props.className}>
      <div className="image-container">
        <Link to={props.path}>
          <img src={props.img} alt={props.alt} />
        </Link>
      </div>

      <div className="text-container">
        <h2>{props.heading}</h2>
        <p className="summary">{props.summary}</p>
      </div>

      <Link to={props.path}>
        <Button action="find out more" />
      </Link>
    </div>
  );
};

export default Card;