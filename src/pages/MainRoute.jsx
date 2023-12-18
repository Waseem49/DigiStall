import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AdminPage from "./AdminPage";
import { Counter } from "./Counter";
import CartPage from "./CartPage";

const MainRoute = () => {
  return (
    <div className="mainroute">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
