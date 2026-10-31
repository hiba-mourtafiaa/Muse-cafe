import React, { useEffect, useMemo, useState } from "react";
import "./Menu.css";

const categories = [
  "All",
  "Cakes",
  "Desserts",
  "Coffee",
  "Tea",
  "Fresh Juices",
  "Burgers",
  "Sandwiches",
  "Breakfast",
  "Special Drinks",
];

const menuItems = [
  {
    id: 1,
    category: "Cakes",
    name: "Signature Chocolate Cake",
    price: 16,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Dark cocoa layers, silk ganache and market berries.",
    ingredients: [
      "Valrhona cocoa",
      "Free-range eggs",
      "Cultured butter",
      "Seasonal berries",
    ],
  },
  {
    id: 2,
    category: "Cakes",
    name: "Pistachio Rose Cake",
    price: 15,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Pistachio sponge with rose cream and fresh raspberry.",
    ingredients: [
      "Pistachios",
      "Rose cream",
      "Fresh raspberries",
      "Free-range eggs",
    ],
  },
  {
    id: 3,
    category: "Cakes",
    name: "Vanilla Berry Cake",
    price: 14,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Soft vanilla sponge layered with cream and ripe berries.",
    ingredients: [
      "Madagascar vanilla",
      "Fresh cream",
      "Mixed berries",
      "Cultured butter",
    ],
  },
  {
    id: 4,
    category: "Cakes",
    name: "Salted Caramel Cake",
    price: 17,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Buttery caramel cream with chocolate sponge and sea salt.",
    ingredients: [
      "Sea salt",
      "Dark chocolate",
      "Caramel",
      "Cultured butter",
    ],
  },
  {
    id: 5,
    category: "Cakes",
    name: "Red Velvet Cake",
    price: 15,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Classic red velvet with smooth cream cheese frosting.",
    ingredients: ["Cocoa", "Cream cheese", "Vanilla", "Free-range eggs"],
  },
  {
    id: 6,
    category: "Desserts",
    name: "Burnt Basque Cheesecake",
    price: 13,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Caramelized top, softly set center and vanilla bean.",
    ingredients: [
      "Cream cheese",
      "Vanilla bean",
      "Fresh cream",
      "Free-range eggs",
    ],
  },
  {
    id: 7,
    category: "Desserts",
    name: "Chocolate Tart",
    price: 12,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Silky dark chocolate filling in a crisp pastry shell.",
    ingredients: ["Dark chocolate", "Cocoa", "Butter", "Cane sugar"],
  },
  {
    id: 8,
    category: "Desserts",
    name: "Berry Pavlova",
    price: 11,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Crisp meringue, whipped cream and seasonal berries.",
    ingredients: [
      "Egg whites",
      "Fresh cream",
      "Strawberries",
      "Raspberries",
    ],
  },
  {
    id: 9,
    category: "Desserts",
    name: "Lemon Meringue Tart",
    price: 12,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Bright lemon curd topped with toasted Italian meringue.",
    ingredients: ["Fresh lemon", "Egg yolks", "Butter", "Vanilla"],
  },
  {
    id: 10,
    category: "Desserts",
    name: "Tiramisu",
    price: 13,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Espresso-soaked ladyfingers with mascarpone cream.",
    ingredients: ["Espresso", "Mascarpone", "Cocoa", "Ladyfingers"],
  },
  {
    id: 11,
    category: "Coffee",
    name: "House Espresso",
    price: 4,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Rich double espresso with notes of chocolate and caramel.",
    ingredients: ["Arabica coffee beans"],
  },
  {
    id: 12,
    category: "Coffee",
    name: "Vanilla Latte",
    price: 6,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Velvety espresso, steamed milk and house vanilla.",
    ingredients: ["Espresso", "Whole milk", "Vanilla syrup"],
  },
  {
    id: 13,
    category: "Coffee",
    name: "Caramel Macchiato",
    price: 6.5,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Espresso layered with milk foam and salted caramel.",
    ingredients: ["Espresso", "Milk", "Caramel", "Sea salt"],
  },
  {
    id: 14,
    category: "Coffee",
    name: "Cold Brew",
    price: 5.5,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Slow-steeped coffee served chilled over clear ice.",
    ingredients: ["Arabica coffee", "Filtered water", "Ice"],
  },
  {
    id: 15,
    category: "Coffee",
    name: "Mocha",
    price: 6,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Espresso and dark chocolate finished with steamed milk.",
    ingredients: ["Espresso", "Dark chocolate", "Milk"],
  },
  {
    id: 16,
    category: "Tea",
    name: "Earl Grey",
    price: 4.5,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Fragrant black tea scented with bright bergamot.",
    ingredients: ["Black tea", "Bergamot"],
  },
  {
    id: 17,
    category: "Tea",
    name: "Jasmine Green Tea",
    price: 5,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Delicate green tea infused with jasmine blossoms.",
    ingredients: ["Green tea", "Jasmine flowers"],
  },
  {
    id: 18,
    category: "Tea",
    name: "Chamomile Honey",
    price: 4.5,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Calming chamomile tea finished with local honey.",
    ingredients: ["Chamomile", "Local honey"],
  },
  {
    id: 19,
    category: "Tea",
    name: "Moroccan Mint Tea",
    price: 5,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Refreshing green tea with fresh mint leaves.",
    ingredients: ["Green tea", "Fresh mint", "Sugar"],
  },
  {
    id: 20,
    category: "Tea",
    name: "Chai Latte",
    price: 6,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Warm black tea blended with aromatic spices and milk.",
    ingredients: ["Black tea", "Cinnamon", "Cardamom", "Milk"],
  },
  {
    id: 21,
    category: "Fresh Juices",
    name: "Orange Sunrise",
    price: 7,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Freshly pressed orange juice with a touch of citrus.",
    ingredients: ["Fresh orange", "Lime"],
  },
  {
    id: 22,
    category: "Fresh Juices",
    name: "Green Garden",
    price: 8,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Crisp apple, cucumber and spinach blended fresh.",
    ingredients: ["Green apple", "Cucumber", "Spinach", "Lime"],
  },
  {
    id: 23,
    category: "Fresh Juices",
    name: "Berry Burst",
    price: 8,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Bright berries blended with apple and fresh lemon.",
    ingredients: ["Strawberries", "Blueberries", "Apple", "Lemon"],
  },
  {
    id: 24,
    category: "Fresh Juices",
    name: "Tropical Glow",
    price: 8.5,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Pineapple, mango and passion fruit in one refreshing glass.",
    ingredients: ["Pineapple", "Mango", "Passion fruit"],
  },
  {
    id: 25,
    category: "Fresh Juices",
    name: "Carrot Ginger",
    price: 7.5,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Fresh carrot juice brightened with orange and ginger.",
    ingredients: ["Carrot", "Orange", "Fresh ginger"],
  },
  {
    id: 26,
    category: "Burgers",
    name: "Classic House Burger",
    price: 14,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Grilled beef patty with cheddar, lettuce and house sauce.",
    ingredients: ["Beef", "Cheddar", "Lettuce", "Tomato", "House sauce"],
  },
  {
    id: 27,
    category: "Burgers",
    name: "Smoky Bacon Burger",
    price: 16,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Smoked bacon, aged cheddar and caramelized onion.",
    ingredients: ["Beef", "Bacon", "Cheddar", "Onion"],
  },
  {
    id: 28,
    category: "Burgers",
    name: "Mushroom Swiss Burger",
    price: 15,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Juicy beef with roasted mushrooms and Swiss cheese.",
    ingredients: ["Beef", "Swiss cheese", "Mushrooms", "Garlic aioli"],
  },
  {
    id: 29,
    category: "Burgers",
    name: "Crispy Chicken Burger",
    price: 14,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Crispy chicken, slaw and spicy house mayonnaise.",
    ingredients: ["Chicken", "Cabbage", "Spicy mayo", "Pickles"],
  },
  {
    id: 30,
    category: "Burgers",
    name: "Garden Burger",
    price: 13,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "House vegetable patty with avocado and fresh greens.",
    ingredients: ["Vegetable patty", "Avocado", "Lettuce", "Tomato"],
  },
  {
    id: 31,
    category: "Sandwiches",
    name: "Turkey Club",
    price: 13,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Roasted turkey, bacon, lettuce and tomato on toasted bread.",
    ingredients: ["Turkey", "Bacon", "Lettuce", "Tomato"],
  },
  {
    id: 32,
    category: "Sandwiches",
    name: "Grilled Cheese",
    price: 10,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Three cheeses melted between golden toasted sourdough.",
    ingredients: ["Cheddar", "Gruyère", "Mozzarella", "Sourdough"],
  },
  {
    id: 33,
    category: "Sandwiches",
    name: "Chicken Pesto",
    price: 13,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Grilled chicken, basil pesto and mozzarella.",
    ingredients: ["Chicken", "Basil pesto", "Mozzarella", "Tomato"],
  },
  {
    id: 34,
    category: "Sandwiches",
    name: "Roast Beef Melt",
    price: 14,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Slow-roasted beef with caramelized onions and melted cheese.",
    ingredients: ["Roast beef", "Onion", "Provolone", "Sourdough"],
  },
  {
    id: 35,
    category: "Sandwiches",
    name: "Avocado Toast",
    price: 11,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Creamy avocado on toasted sourdough with herbs and lemon.",
    ingredients: ["Avocado", "Sourdough", "Lemon", "Fresh herbs"],
  },
  {
    id: 36,
    category: "Breakfast",
    name: "Classic Breakfast",
    price: 14,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Farm eggs, crispy potatoes, toast and seasonal greens.",
    ingredients: ["Eggs", "Potatoes", "Sourdough", "Seasonal greens"],
  },
  {
    id: 37,
    category: "Breakfast",
    name: "Berry Pancakes",
    price: 12,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Fluffy pancakes topped with berries and maple syrup.",
    ingredients: ["Flour", "Eggs", "Berries", "Maple syrup"],
  },
  {
    id: 38,
    category: "Breakfast",
    name: "Avocado Eggs",
    price: 13,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Poached eggs, avocado and toasted sourdough.",
    ingredients: ["Eggs", "Avocado", "Sourdough", "Chili flakes"],
  },
  {
    id: 39,
    category: "Breakfast",
    name: "French Toast",
    price: 12,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Brioche French toast with vanilla cream and berries.",
    ingredients: ["Brioche", "Eggs", "Vanilla", "Fresh berries"],
  },
  {
    id: 40,
    category: "Breakfast",
    name: "Granola Bowl",
    price: 10,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Crunchy house granola with yogurt and seasonal fruit.",
    ingredients: ["Granola", "Greek yogurt", "Honey", "Seasonal fruit"],
  },
  {
    id: 41,
    category: "Special Drinks",
    name: "Rose Latte",
    price: 7,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Espresso and steamed milk infused with delicate rose.",
    ingredients: ["Espresso", "Milk", "Rose syrup"],
  },
  {
    id: 42,
    category: "Special Drinks",
    name: "Iced Matcha Cloud",
    price: 7,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Ceremonial matcha topped with a light vanilla foam.",
    ingredients: ["Matcha", "Milk", "Vanilla", "Ice"],
  },
  {
    id: 43,
    category: "Special Drinks",
    name: "Berry Fizz",
    price: 7,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Fresh berries, citrus and sparkling water.",
    ingredients: ["Raspberry", "Blueberry", "Lemon", "Sparkling water"],
  },
  {
    id: 44,
    category: "Special Drinks",
    name: "Honey Cinnamon Latte",
    price: 7,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Smooth espresso with local honey and warm cinnamon.",
    ingredients: ["Espresso", "Milk", "Honey", "Cinnamon"],
  },
  {
    id: 45,
    category: "Special Drinks",
    name: "Lavender Lemonade",
    price: 6,
    image: new URL("../assets/hero.jfif", import.meta.url).href,
    detailImage: new URL("../assets/hero.jfif", import.meta.url).href,
    description: "Fresh lemonade balanced with fragrant lavender.",
    ingredients: ["Fresh lemon", "Lavender", "Cane sugar", "Water"],
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [favoriteError, setFavoriteError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", checkLogin);
    window.addEventListener("loginStatusChanged", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("loginStatusChanged", checkLogin);
    };
  }, []);

  const filteredItems = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      const searchableText = [
        item.name,
        item.category,
        item.description,
        ...item.ingredients,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        (searchValue === "" || searchableText.includes(searchValue))
      );
    });
  }, [selectedCategory, search]);

  const toggleFavorite = (id) => {
    if (!isLoggedIn) {
      setFavoriteError(true);
      return;
    }

    setFavoriteError(false);

    setFavorites((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id]
    );
  };

  const openDetails = (item) => {
    setSelectedItem(item);
    setFavoriteError(false);

    window.history.pushState(
      { menuDetail: item.id },
      "",
      `?dish=${item.id}`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goBackToMenu = () => {
    setSelectedItem(null);
    setFavoriteError(false);

    window.history.replaceState({}, "", window.location.pathname);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handlePopState = () => {
      setSelectedItem(null);
      setFavoriteError(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (selectedItem) {
    const isFavorite = favorites.includes(selectedItem.id);

    return (
      <main className="menu-page">
        <section className="menu-detail-page">
          <div className="detail-layout">
            <div className="detail-image-wrapper">
              <img
                src={selectedItem.detailImage}
                alt={selectedItem.name}
                className="detail-image"
              />
            </div>

            <div className="detail-content">
              <button
                type="button"
                className="back-to-menu"
                onClick={goBackToMenu}
              >
                <span className="back-arrow">←</span>
                <span>Back to Menu</span>
              </button>

              <span className="detail-category">
                {selectedItem.category.toUpperCase()}
              </span>

              <h1>{selectedItem.name}</h1>

              <div className="detail-price">
                ${selectedItem.price.toFixed(2)}
              </div>

              <p className="detail-description">
                {selectedItem.description}
              </p>

              <h2>Ingredients</h2>

              <div className="ingredients-grid">
                {selectedItem.ingredients.map((ingredient) => (
                  <div className="ingredient" key={ingredient}>
                    <span>—</span>
                    {ingredient}
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={`save-button ${isFavorite ? "saved" : ""}`}
                onClick={() => toggleFavorite(selectedItem.id)}
              >
                <span>{isFavorite ? "♥" : "♡"}</span>
                {isFavorite ? "Saved favorite" : "Save favorite"}
              </button>

              {favoriteError && !isLoggedIn && (
                <p className="favorite-login-message">
                  You need to log in to save favorites.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="menu-page">
      <section className="menu-hero">
        <div className="menu-overlay"></div>

        <div className="menu-content">
          <span className="menu-label">THE FULL COLLECTION</span>

          <h1>Our Menu</h1>

          <p>
            From first coffee to late dessert, every plate is prepared with
            ingredients
            <br className="desktop-break" />
            we trust.
          </p>
        </div>
      </section>

      <section className="menu-section">
        <div className="menu-controls">
          <div className="search-wrapper">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search dishes and drinks"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`category-button ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <article className="menu-card" key={item.id}>
              <div className="card-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-image"
                />
              </div>

              <div className="card-content">
                <span className="card-category">
                  {item.category.toUpperCase()}
                </span>

                <h2>{item.name}</h2>

                <p>{item.description}</p>

                <div className="card-footer">
                  <span className="card-price">
                    ${item.price.toFixed(2)}
                  </span>

                  <button
                    type="button"
                    className="details-button"
                    onClick={() => openDetails(item)}
                  >
                    View Details
                    <span>↗</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-results">
            <h2>No dishes found</h2>

            <p>
              Try another search or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
            >
              Show all dishes
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Menu;
