import React from "react";
import "./Section_4.css";
import image4 from "../../../assets/images/image4.png";
import Content from "../../../shared/Content/Content";

const Section_4 = () => {
  return (
    <div className="section_4_main">
      <div>
        <img className="image4" src={image4}></img>
      </div>
      <Content />
    </div>
  );
};

export default Section_4;
