import React from "react";
import "./Section_last.css";
import Button from "../../../shared/Button/Button";

const Section_last_ = () => {
  return (
    <div className="section_last_main">
      <p className="last-title">A Price To Suit Everyone</p>
      <p className="last-content">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus
      </p>
      <p className="price">$40</p>
      <p className="options">See, One price. Simple.</p>
      <Button text="Purchase Now" />
    </div>
  );
};

export default Section_last_;
