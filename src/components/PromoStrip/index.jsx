import React from "react";

// Components
import { Link } from "react-router-dom";

// Styles
import "./styles.css";

const PromoStrip = () => {
  return (
    <div className="promo-strip">
      <p className="strip-text">
        <Link to="./shop">Free delivery on orders over £50</Link>
      </p>
    </div>
  );
};

export default PromoStrip;