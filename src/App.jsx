import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChooseMoment from "./components/ChooseMoment";
import Cards from "./components/Cards";
import Story from "./components/Story";
import Discover from "./components/Discover";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>


      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ChooseMoment />
              <Cards />
              <Story />
              <Discover />
              <Reviews />
            </>
          }
        />

        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;