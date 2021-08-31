import React from "react";

// Styles
import "./styles.css";

const Input = (props) => {
  return (
    <div className="input-field">
      <label htmlFor={props.id} className={props.className}>
        {props.title}
      </label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <p className="input-error">{props.error}</p>}
    </div>
  );
};

export default Input;