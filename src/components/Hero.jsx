import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-small-text">
          CAFE · PASTANE · MUTFAK
        </span>

        <h1>
          Her Lokmada
          <br />
          Özel Bir Lezzet
        </h1>

        <p>
          Özenle hazırlanmış yemekler, enfes tatlılar,
          <br />
          ferahlatıcı içecekler ve sevgiyle sunulan
          <br />
          sıcacık anlar.
        </p>

        <div className="hero-buttons">

          <Link to="/menu" className="hero-btn primary">
            Menümüzü Keşfedin
            <span className="arrow">→</span>
          </Link>

          <Link to="/about" className="hero-btn secondary">
            Daha Fazlasını Keşfedin
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;
