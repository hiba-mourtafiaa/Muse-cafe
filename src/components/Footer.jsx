import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-title">
            <span className="brand-circle">M</span>
            <span className="brand-name">MÜZE</span>
            <span className="brand-cafe">cafe</span>
          </div>

          <p>
            A warm meeting place for beautiful
            <br />
            food, thoughtful drinks, and unhurried
            <br />
            moments.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3>Explore</h3>

          <a href="/menu">Full Menu</a>
          <a href="/About">Our Story</a>
          <a href="/Gallery">Gallery</a>
          <a href="/Contact">Contact</a>
        </div>

        {/* Opening Hours */}
        <div className="footer-column">
          <h3>Opening hours</h3>

          <p>Mon–Fri · 08:00–22:00</p>
          <p>Sat–Sun · 09:00–23:00</p>
        </div>

        {/* Visit Us */}
        <div className="footer-column visit-column">
          <h3>Visit us</h3>

          <p>Sample Address, Istanbul</p>
          <p>+90 212 000 00 00</p>
          <p>hello@muzecafe.example</p>

          <div className="social-buttons">
            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="Facebook">
              f
            </a>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        © 2026 Müze Cafe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;