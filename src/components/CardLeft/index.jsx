import React from "react";

// Components
import Button from "../Button";

// Styles
import "./styles.css";

const CardLeft = (props) => {
  return (
    <div className="card-wide">
      <div className="text-panel">
        <h2>{props.heading}</h2>
        <p className="summary">{props.summary}</p>

        <Button action="find out more" />
      </div>
      <div className="image-container-wide">
        <img src={props.img} alt={props.alt} />
      </div>
    </div>
  );
};

export default CardLeft;