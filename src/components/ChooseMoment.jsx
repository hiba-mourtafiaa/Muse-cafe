import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChooseMoment.css";

const moments = [
  {
    number: "01",
    title: "Cakes & Desserts",
    path: "/Menu",
  },
  {
    number: "02",
    title: "Coffee & Tea",
    path: "/Menu",
  },
  {
    number: "03",
    title: "Fresh Juices",
    path: "/Menu",
  },
  {
    number: "04",
    title: "Burgers & Sandwiches",
    path: "/Menu",
  },
  {
    number: "05",
    title: "Breakfast",
    path: "/Menu",
  },
  {
    number: "06",
    title: "Special Drinks",
    path: "/Menu",
  },
];

export default function ChooseMoment() {
  const navigate = useNavigate();

  return (
    <section className="moments-section">
      <div className="moments-header">
        <p className="eyebrow">A WORLD OF FLAVOUR</p>
        <h1>Choose your moment</h1>
      </div>

      <div className="moments-grid">
        {moments.map((moment) => (
          <div
            key={moment.number}
            className="moment-card"
            onClick={() => navigate(moment.path)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate(moment.path);
              }
            }}
          >
            <div className="moment-number">{moment.number}</div>

            <h2>{moment.title}</h2>

            <span className="moment-arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
