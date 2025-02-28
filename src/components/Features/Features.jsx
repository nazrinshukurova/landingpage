import React from "react";
import "./Features.css";
import featuresImage from "../../assets/images/image7.png";
import Content from "../../shared/Content/Content";
import Card from "../../shared/Element_Card/Card";

const Features = () => {
  return (
    <div>
      <div className="features_section">
        <div>
          <img className="features_image" src={featuresImage}></img>
        </div>
        <div className="features_section_right_main">
          <div className="features_section_right">
            <Content />
            <div className="cards">
              <div className="cards_1">
                <Card />
                <Card />
              </div>
              <div className="cards_2">
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
