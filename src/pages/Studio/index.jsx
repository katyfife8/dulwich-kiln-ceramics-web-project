import React from "react";

// Components
import ContactForm from "../../components/Form/ContactForm";
import CardLeft from "../../components/CardLeft";

// Assets
import welcomeback from "../../assets/images/welcomeback.jpg";
import potterywheel from "../../assets/images/potterywheel.jpg";

// Styles
import "./styles.css";

const Studio = () => {
  return (
    <div>
      <main>
        <section className="page-intro">
          <h1>Studio</h1>

          <p className="subtitle">
            Our beautiful studio is now open for workshops and coffee. We look
            forward to welcoming you soon!
          </p>
        </section>

        <div className="section-row">
          <div className="section-col">
            <img
              src={welcomeback}
              alt="Table with plates, a postcard and a freshly made cup of coffee."
            />
          </div>

          <div className="section-col">
            <h2>Visit us</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              consequatur iure nihil, quidem omnis nemo aut ipsum at saepe
              totam, quos est accusamus dignissimos dicta, voluptate expedita
              ipsa quisquam ea.
            </p>

            <div className="address">
              <p>The Dulwich Kiln</p>
              <p>50 Champion Hill</p>
              <p>London SE5 8BS</p>
            </div>
            <div className="address">
              <p>Tel +44 (0)208 972 084</p>
            </div>

            <div className="address">
              <p>Monday to Saturday, 10am to 4pm</p>
              <p>Sunday closed</p>
            </div>
          </div>
        </div>

        <section className="card-row">
          <CardLeft
            img={potterywheel}
            alt="Hands holding pot at pottery wheel"
            heading="Studio hire"
            summary="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          />
        </section>
        <section id="form-section">
          <h2>Send us a message</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default Studio;