import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import PageNotFound from "./Pages/PageNotFound";
import AboutPage from "./Pages/AboutPage";
import ReservationPage from "./Pages/ReservationPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";

export default function App() {
  const [isMenuNotOpen, setIsMenuNotOpen] = useState(true);

  function handleHamburgerMenu() {
    setIsMenuNotOpen(!isMenuNotOpen);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onHamBurgerMenu={handleHamburgerMenu}
              isMenuNotOpen={isMenuNotOpen}
            />
          }
        />
        <Route
          path="menu"
          element={
            <MenuPage
              onHamBurgerMenu={handleHamburgerMenu}
              isMenuNotOpen={isMenuNotOpen}
            />
          }
        />
        <Route
          path="about"
          element={
            <AboutPage
              onHamBurgerMenu={handleHamburgerMenu}
              isMenuNotOpen={isMenuNotOpen}
            />
          }
        />
        <Route
          path="reservation"
          element={
            <ReservationPage
              onHamBurgerMenu={handleHamburgerMenu}
              isMenuNotOpen={isMenuNotOpen}
            />
          }
        />
        <Route
          path="blog"
          element={
            <BlogPage
              onHamBurgerMenu={handleHamburgerMenu}
              isMenuNotOpen={isMenuNotOpen}
            />
          }
        />
        <Route
          path="contact"
          element={
            <ContactPage
              onHamBurgerMenu={handleHamburgerMenu}
              isMenuNotOpen={isMenuNotOpen}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
