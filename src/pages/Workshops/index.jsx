import React from "react";

// Components
import Card from "../../components/Card";
import CardRight from "../../components/CardRight";

// Assets
import kintsugibowl from "../../assets/images/kintsugibowl.jpg";
import glazedbowl from "../../assets/images/glazedbowl.jpg";
import colourfulcups from "../../assets/images/colourfulcups.jpg";

const Workshops = () => {
    return (
        <main>
            <section className="page-intro">
                <h1>Workshops</h1>
                <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
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
    );
};

export default Workshops;