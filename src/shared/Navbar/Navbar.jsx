import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/features">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <p className="logo">Landing</p>

      <Button text="Buy Now" position="absolute" rightPercent="10%" />
    </div>
  );
};

export default Navbar;
