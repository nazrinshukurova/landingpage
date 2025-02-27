import React from "react";
import "./Section_5.css";
import image5 from "../../../assets/images/image5.png";
import Content from "../../../shared/Content/Content";

const Section_5 = () => {
  return (
    <div className="section_5_main">
      <div>
        <img className="image5" src={image5}></img>
      </div>
      <Content />
    </div>
  );
};

export default Section_5;
