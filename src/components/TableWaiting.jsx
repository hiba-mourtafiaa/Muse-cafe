import React from "react";
import "./TableWaiting.css";

const TableWaiting = () => {
  return (
    <section className="table-waiting">
      <div className="table-content">
        <span className="table-label">COME AS YOU ARE</span>

        <h2>Your Table Is Waiting</h2>

        <div className="table-buttons">
          <button
            className="menu-btn"
            onClick={() => {
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Menu
          </button>

          <button
            className="contact-btn"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default TableWaiting;