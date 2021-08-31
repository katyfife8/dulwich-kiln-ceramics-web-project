import React, { useState, useEffect } from "react";

// Components
import Button from "../Button";

// Styles
import "./styles.css";

const api = "https://api.quotable.io/random";

const Quotes = () => {
  const [quote, setQuote] = useState([]);

  // Fetch quotes data
  const getQuote = () => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const { content, author } = quote;
  return (
    <div className="quotes-box">
      <div className="text-box">
        <p className="quote-text">&ldquo;{content}&rdquo;</p>
      </div>
      <p>{author}</p>
      <div className="button-container">
        <Button onClick={getQuote} action="new quote"></Button>
      </div>
    </div>
  );
};

export default Quotes;