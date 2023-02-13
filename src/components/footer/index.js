import React from "react";
import "./style.css";

import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="footer-item footer-about">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <p> © 2023 - All Rights Reserved. Mohammed Al-Marshudi</p>
            </ScrollAnimation>
            <div className="social-links ">
              <a
                href="https://www.twitter.com/emarshudi"
                target="_blank"
              >
                {" "}
                <FaTwitter size={30} />
              </a>

              <a href="https://github.com/marshudi" target="_blank">
                {" "}
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/marshudi/"
                target="_blank"
              >
                {" "}
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/emarshudi/"
                target="_blank"
              >
                {" "}
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
