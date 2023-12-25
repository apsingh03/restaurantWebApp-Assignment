import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Restaurants from "./pages/Restaurants";
import AddRestaurants from "./pages/AddRestaurants";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/restaurants" element={<Restaurants />} />

        <Route path="/addrestaurant" element={<AddRestaurants />} />

        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
