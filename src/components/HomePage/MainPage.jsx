import React from "react";
import "./MainPage.css";
import Button from "../../shared/Button/Button";
import main_image from "../../assets/image.png";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-content">
        <p className="title">Introduce Your Product Quickly & Effectively</p>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="main-buttons">
          <Button text="Purchase UI Kit" />
          <div className="learn-button">Learn More</div>
        </div>
      </div>
      <div className="main_image">
        <img src={main_image}></img>
      </div>
    </div>
  );
};

export default MainPage;
