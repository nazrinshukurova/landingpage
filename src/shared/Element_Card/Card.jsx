import React from "react";
import card from "../../assets/svg/card.svg";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-box">
      <img src={card}></img>
      <p className="card-title">Title Goes Here</p>
      <p className="card-text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.
      </p>
    </div>
  );
};

export default Card;
