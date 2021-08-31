import React from "react";

// Components
import SubscribeForm from "../Form/SubscribeForm";

// Styles
import "./styles.css";

const CardRight = (props) => {
  return (
    <div className="card-wide">
      <div className="image-container-wide">
        <img src={props.img} alt={props.alt} />
      </div>

      <div className="text-panel">
        <h2>{props.heading}</h2>
        <p class="summary">{props.summary}</p>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default CardRight;