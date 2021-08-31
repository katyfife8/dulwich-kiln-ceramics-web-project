import React from "react";

// Assets
import heroteapotportrait from "../../assets/images/heroteapotportrait.jpg";

const BackgroundImageMobile = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroteapotportrait})`,
        height: "100vh",
        maxHeight: "625px",
        width: "500px",
        margin: "0 auto",
        backgroundPosition: "center"
      }}
    ></div>
  );
};

export default BackgroundImageMobile;