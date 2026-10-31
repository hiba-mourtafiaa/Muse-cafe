import React from "react";
import "./About.css";
import hero from "../assets/hero.jfif";
//import hero from "../assets/hero.jfif";
//import hero from "../assets/hero.jfif";

export default function About() {
  return (
    <main className="about-page">
      <section className="menu-hero">
        <div className="menu-overlay"></div>

        <div className="menu-content">
          <span className="menu-label">About Müze</span>
          <h1>A café composed with care</h1>
          <p>
            Part bakery, part dining room, always a place to feel at home.
          </p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-content">
          <div className="about-text">
            <span className="section-label">OUR STORY</span>

            <h2>An everyday ritual, elevated.</h2>

            <p>
              Müze began with a simple belief: the best cafés are not rushed.
              They are places where coffee is brewed with attention, cakes are
              treated by hand, and a table can hold an entire afternoon.
            </p>

            <p>
              Our kitchen moves between familiar comfort and fresh expression,
              serving generous breakfasts, precise pastries, vibrant drinks,
              and deeply satisfying plates.
            </p>
          </div>

          <div className="about-main-image">
            <img src={hero} alt="Müze café interior" />
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="value">
          <span>01</span>
          <h3>Quality</h3>
          <p>
            Ingredients are chosen for flavour, season and integrity.
          </p>
        </div>

        <div className="value">
          <span>02</span>
          <h3>Craft</h3>
          <p>
            Our kitchen and pastry teams make every detail count.
          </p>
        </div>

        <div className="value">
          <span>03</span>
          <h3>Welcome</h3>
          <p>
            Thoughtful hospitality makes the room feel like yours.
          </p>
        </div>
      </section>

      <section className="about-team">
        <div className="team-images">
          <div className="team-image team-image-left">
            <img
              src={hero}
              alt="Müze breakfast"
            />
          </div>

          <div className="team-image team-image-right">
            <img src={hero} alt="Müze chocolate cake" />
          </div>
        </div>

        <div className="team-text">
          <span className="section-label">THE TEAM</span>

          <h2>Cooks, bakers, baristas, hosts</h2>

          <p>
            Led by a close-knit culinary team, Müze brings classical training
            and local curiosity together. From early-morning baking to the
            final espresso, the same standard runs through everything we serve.
          </p>
        </div>
      </section>
    </main>
  );
}