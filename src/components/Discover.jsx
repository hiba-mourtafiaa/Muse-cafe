
import React from "react";
import "./Discover.css";
import heroImage from "../assets/hero.jfif";


const Discover = () => {
  return (
    <section className="discover-section">
      <div className="discover-content">
        <div className="discover-text">
          <span className="discover-label">THE SIGNATURE</span>

          <h1>
            Chocolate, at its
            <br />
            most memorable
          </h1>

          <p>
            Deep cocoa sponge, satin ganache, and jewel-like berries. A
            <br className="desktop-break" />
            house classic made slowly and served generously.
          </p>

          <button
            className="discover-button"
            onClick={() => {
              document
                .getElementById("collection")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Discover the Collection
          </button>
        </div>

        <div className="discover-image">
          <img
            src={heroImage}
            alt="Chocolate cake decorated with fresh berries"
          />
        </div>
      </div>
    </section>
  );
};

export default Discover;