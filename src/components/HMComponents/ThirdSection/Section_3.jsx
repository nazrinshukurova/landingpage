import React from "react";
import "./Section_3.css";
import image3 from "../../../assets/images/image3.png";
import Content from "../../../shared/Content/Content";

const Section_3 = () => {
  return (
    <div className="section_3_main">
      <div>
        <img className="image-3" src={image3}></img>
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

export default Section_3;
