import React from "react";
import "./Button.css";

const Button = ({ text, position, index, rightPercent }) => {
  return (
    <div
      className="shared-button"
      style={{ position: position, zIndex: index, right: rightPercent }}
    >
      {text}
    </div>
  );
};

export default Button;
