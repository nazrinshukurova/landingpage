import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <p className="logo">Landing</p>

      <Button
        text="Buy Now"
        position="absolute"
        rightPercent="10%"
      />
    </div>
  );
};

export default Navbar;
