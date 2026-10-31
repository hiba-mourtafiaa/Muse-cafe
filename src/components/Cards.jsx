import React, { useState } from "react";
import "./Cards.css";

const dishes = [
  {
    category: "CAKES",
    name: "Signature Chocolate Cake",
    description: "Dark cocoa layers, silk ganache and market berries.",
    price: "$16.00",
    image: "../assets/hero.jfif",
  },
  {
    category: "CAKES",
    name: "Pistachio Rose Cake",
    description: "Pistachio sponge with rose cream and raspberry.",
    price: "$15.00",
    image: "../assets/hero.jfif",
  },
  {
    category: "DESSERTS",
    name: "Burnt Basque Cheesecake",
    description: "Caramelized top, softly set center and vanilla bean.",
    price: "$13.00",
    image: "../assets/hero.jfif",
  },
  {
    category: "PASTRIES",
    name: "Almond Croissant",
    description: "Buttery layers filled with almond cream and toasted almonds.",
    price: "$8.00",
    image: "../assets/hero.jfif",
  },
  {
    category: "DESSERTS",
    name: "Strawberry Pavlova",
    description: "Crisp meringue, whipped cream and fresh strawberries.",
    price: "$12.00",
    image: "../assets/hero.jfif",
  },
  {
    category: "CAKES",
    name: "Vanilla Berry Cake",
    description: "Soft vanilla sponge, cream and seasonal berries.",
    price: "$14.00",
    image: "../assets/hero.jfif",
  },
];

function Cards() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const isLoggedIn = false;

  const handleFavorite = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    console.log("Added to favorites");
  };

  return (
    <>
      <section className="popular-dishes">
        <div className="popular-header">
          <div>
            <span className="subtitle">GUEST FAVOURITES</span>
            <h2>Popular dishes</h2>
          </div>

          <a href="/menu" className="see-all">
            See all
          </a>
        </div>

        <div className="cards-grid">
          {dishes.map((dish, index) => (
            <div className="dish-card" key={index}>
              <div className="dish-image">
                <img src={dish.image} alt={dish.name} />

                <button
                  className="favorite-btn"
                  onClick={handleFavorite}
                  aria-label="Add to favourites"
                >
                  ♡
                </button>
              </div>

              <div className="dish-content">
                <span className="dish-category">
                  {dish.category}
                </span>

                <h3>{dish.name}</h3>

                <p>{dish.description}</p>

                <div className="dish-bottom">
                  <span className="price">{dish.price}</span>

                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showLoginModal && (
        <div
          className="login-overlay"
          onClick={() => setShowLoginModal(false)}
        >
          <div
            className="login-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setShowLoginModal(false)}
            >
              ×
            </button>

            <h3>Please log in to save your favorite dishes.</h3>

            <p>
              Your personal collection will stay with your account on every
              visit.
            </p>

            <div className="modal-buttons">
              <button className="create-account-btn">
                Create Account
              </button>

              <button className="login-btn">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;