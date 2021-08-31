import React from "react";

// Components
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import CardRight from "../../components/CardRight";

// Assets
import cupsaucerbranches from "../../assets/images/cupsaucerbranches.jpg";
import greenvase from "../../assets/images/greenvase.jpg";
import whitevase from "../../assets/images/whitevase.jpg";
import kintsugibowl from "../../assets/images/kintsugibowl.jpg";
import glazedbowl from "../../assets/images/glazedbowl.jpg";
import colourfulcups from "../../assets/images/colourfulcups.jpg";

const Home = () => {
  return (
    <div>
      <Hero />

      <main>
        <section className="card-row">
          <Card
            className="card col-3"
            img={cupsaucerbranches}
            alt="Cup and saucer"
            heading="Tableware"
            summary="A summary of this wonderful collection and why you should buy something."
            path="../Shop"
            action="explore collection"
          />

          <Card
            className="card col-3"
            img={greenvase}
            alt="Glass vases"
            heading="Glassware"
            summary="A summary of this wonderful collection and why you should buy something."
            path="../Shop"
            action="explore collection"
          />

          <Card
            className="card col-3"
            img={whitevase}
            alt="White vase"
            heading="Vases"
            summary="A summary of this wonderful collection and why you should buy something."
            path="../Shop"
            action="explore collection"
          />
        </section>

        <section className="card-row">
          <Card
            className="card col-2"
            img={kintsugibowl}
            alt="Kintsugi bowl"
            heading="The Art of Kintsugi"
            summary="A summary of this amazing course and why you should sign up."
            path="../Workshops"
            action="explore collection"
          />

          <Card
            className="card col-2"
            img={glazedbowl}
            alt="Glazed bowl"
            heading="The Art of Glazing"
            summary="A summary of this amazing course and why you should sign up."
            path="../Workshops"
            action="explore collection"
          />
        </section>

        <section className="card-row">
          <CardRight
            img={colourfulcups}
            alt="Colourful glazed cups"
            heading="Sign up to emails"
            summary="Subscribe to our newsletter for the latest news, courses and offers."
          />
        </section>
      </main>
    </div>
  );
};

export default Home;