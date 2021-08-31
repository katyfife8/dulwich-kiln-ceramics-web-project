import React from "react";

//Styles
import "./styles.css";

const Button = (props) => {
    return (
        <div>
            <button
                className={props.className}
                type={props.type || "button"}
                onClick={props.onClick}
            >
                {props.action}
            </button>
        </div>
    );
};

export default Button;