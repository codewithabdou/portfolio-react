import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="contact">
          <div className="phone">
            <FaPhone size={20} color="white" style={{ margin: 10 }} />
            <p style={{ fontFamily: "sans-serif" }}> +213 776493221 </p>
          </div>
          <div className="email">
            <FaMailBulk size={20} color="white" style={{ margin: 10 }} />
            <p style={{ fontFamily: "sans-serif" }}> kk_habouche@esi.dz </p>
          </div>
        </div>
        <div className="icons">
          <a href="https://github.com/codewithabdou" target="_blank">
            <FaGithub className="icon" size={50} />
          </a>
          <a
            href="https://www.facebook.com/abderrahmene.hbch/"
            target="_blank"
          >
            <FaFacebook className="icon" size={50}  />
          </a>
          <a href="https://www.instagram.com/abdouuu.h/" target="_blank">
            <FaInstagram className="icon" size={50} c />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
