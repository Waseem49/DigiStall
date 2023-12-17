import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AdminPage from "./AdminPage";
import { Counter } from "./Counter";
import CartPage from "./CartPage";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default MainRoute;
