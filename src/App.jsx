import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import WhatCanICook from "./pages/WhatCanICook";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import RecipeDetails from "./pages/RecipeDetails";
import Profile from "./pages/Profile";

import FavoriteProvider from "./context/FavoriteContext";

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    requestAnimationFrame(scrollToTop);
  }, [pathname, search, hash]);

  return null;
}

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <BrowserRouter>
      <FavoriteProvider>
        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/cook" element={<WhatCanICook />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>

        <Footer />
      </FavoriteProvider>
    </BrowserRouter>
  );
}

export default App;