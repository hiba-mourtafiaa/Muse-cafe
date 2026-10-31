import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../assets/logo.png";
import langImg from "../assets/lang.png";
import React, { useState } from "react";

function Navbar({ isLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

const changeLanguage = () => {
  const currentLanguage = document.cookie
    .split("; ")
    .find((row) => row.startsWith("googtrans="))
    ?.split("=")[1];

  const newLanguage =
    currentLanguage === "/tr/en" ? "/tr/tr" : "/tr/en";

  document.cookie = `googtrans=${newLanguage}; path=/`;
  document.cookie = `googtrans=${newLanguage}; path=/; domain=${window.location.hostname}`;

  window.location.reload();
};
  return (
    <header className="navbar">
      

      <div className="navbar-logo">
        <img
          src={logoImg}
          alt="MÜZE cafe logo"
          className="logo-image"
        />

        <span className="logo-text">
          MÜZE <span className="logo-cafe">cafe</span>
        </span>
      </div>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>

        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Ana Sayfa
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Menü
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Hakkımızda
        </NavLink>

        <NavLink
          to="/gallery"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Galeri
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          İletişim
        </NavLink>

      </nav>

      <div className="navbar-actions">

        <button
  className="lang-btn"
  onClick={changeLanguage}
  type="button"
>
  <img
    src={langImg}
    className="lang-image"
    alt="Language"
  />
</button>

        {isLoggedIn && (
          <button className="account-btn">
            <i className="fas fa-user"></i>
          </button>
        )}

        {!isLoggedIn && (
          <div className="auth-links">
            <a href="/login">Giriş Yap</a>
            <a href="/register">Kayıt Ol</a>
          </div>
        )}

        <button className="view-menu-btn">
          Menüyü Gör
        </button>

      </div>

    </header>
  );
}

export default Navbar;