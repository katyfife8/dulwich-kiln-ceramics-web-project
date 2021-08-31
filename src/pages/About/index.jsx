import React from "react";

// Components
import Quotes from "../../components/Quotes";

// Styles
import "./styles.css";

const About = () => {
  return (
    <main>
      <section className="page-intro">
        <h1>About</h1>
        <p className="subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          consequatur iure nihil, quidem omnis nemo aut ipsum at saepe totam,
          quos est accusamus dignissimos dicta, voluptate expedita ipsa quisquam
          ea.
        </p>
      </section>

      <section id="quotes-section">
        <Quotes />
      </section>
    </main>
  );
};

export default About;