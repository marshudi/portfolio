import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import img from "../../img/icon.png";
import "./style.css";

const AboutMe = () => {
  return (
    <section className="section" id="aboutme">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="row">
            <div className="  section-title">
              <h2>
                About <span>Me</span>
              </h2>
            </div>
          </div>
        </ScrollAnimation>
        <div className="row">
          <div className="fun-facts-img">
            <img src={img} />
          </div>
          <div className="fun-facts-items">
            <div className="row justify-content">
              <div className="">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <p>
                    My Name is Mohammed Amour Al-Marshudi, From Oman. A Student in University of Technology and Applied Sciences (Higher College of Technology)
                    My Major is a Software Engineering. I joined the University in 2019.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <p>
                    I am a Full Stack Web Developer, I have a good experience in Front-end from 2017.
                    I have a little experience in Back-end from 2021.
                    I am intersted in Artifical Intelegence, Graphic Desgin, And Blockchain Technology.
                    Still learning more and more...
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </section>
  );
};

export default AboutMe;
