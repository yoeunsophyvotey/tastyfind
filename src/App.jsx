import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <FavoriteProvider>
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