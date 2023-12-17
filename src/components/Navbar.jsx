import React from "react";
import { Link } from "react-router-dom";
import cartlogo from "../imgs/cartlogo.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartproduct = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <div>
        <Link to={"/"}>
          <img
            src="https://admin.digistall.in/static/media/Digistall_logo.15d3a51fc272df7963a4.png"
            alt="alt"
          />
        </Link>
      </div>
      <div className="adminside">
        <Link to={"/admin"}>
          <h3>Admin</h3>
        </Link>
        <Link to={"/cart"}>
          <p className="cart">
            <img src={cartlogo} alt="cart" width={"20px"} />
            <span className="cartcount">
              {cartproduct.length !== 0 ? cartproduct.length : "x"}
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
