import React from "react";
import "./Footer.css";
import Button from "../Button/Button";
import facebook from "../../assets/svg/social/facebook.svg";
import linkedin from "../../assets/svg/social/linkedin.svg";
import twitter from "../../assets/svg/social/twitter.svg";
import youtube from "../../assets/svg/social/youtube.svg";
import instagram from "../../assets/svg/social/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="copyright">©2023 Yourcompany</div>
        <div className="logo-2">Landing</div>
        <Button text="Purchase Now" />
      </footer>
      <div className="rectangle-box">
        <div className="rectangle"></div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="social-links">
          <div>
            <img src={facebook}></img>
          </div>
          <div>
            <img src={linkedin}></img>
          </div>
          <div>
            <img src={twitter}></img>
          </div>
          <div>
            <img src={youtube}></img>
          </div>
          <div>
            <img src={instagram}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
