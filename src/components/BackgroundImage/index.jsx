import React from "react";

// Assets
import heroteapot from "../../assets/images/heroteapot.jpg";

const BackgroundImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroteapot})`,
        height: "100vh",
        maxHeight: "768px",
        maxWidth: "1440px",
        margin: "0 auto",
        backgroundPosition: "center"
        // backgroundSize: 'cover',
        // backgroundRepeat: "no-repeat"
      }}
    ></div>
  );
};

export default BackgroundImage;