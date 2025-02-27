import React from "react";
import "./Section_2.css";
import Content from "../../../shared/Content/Content";
import Card from "../../../shared/Element_Card/Card";
import image2 from "../../../assets/images/image2.png";

const Section_2 = () => {
  return (
    <div className="second_section_main">
      <div className="second_section_left">
        <Content />
        <div className="elements">
          <Card />
          <Card />
        </div>
      </div>
      <div className="second_image_box">
        <img className="image2" src={image2}></img>
      </div>
    </div>
  );
};

export default Section_2;
