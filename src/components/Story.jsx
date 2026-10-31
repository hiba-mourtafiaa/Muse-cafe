import React from "react";
import "./Story.css";
import heroImage from "../assets/hero.jfif";

function Story() {
  return (
    <section className="story-section">
      <div className="story-image">
        <img
          src={heroImage}
          alt="Breakfast at our cafe"
        />
      </div>

      <div className="story-content">
        <span className="story-label">OUR STORY</span>

        <h2>
          Made for the art of
          <br />
          gathering
        </h2>

        <p>
          Müze Cafe brings the generosity of a neighbourhood table together
          with the precision of a modern patisserie. Every plate is made to
          feel considered, never complicated.
        </p>

        <button className="story-button">
          <a href="/About" className="see-all">
            Learn More
          </a>
        </button>
      </div>
    </section>
  );
}

export default Story;
