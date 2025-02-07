import React from "react";
import img from "../../img/icon.png";
import ScrollAnimation from "react-animate-on-scroll";
import "./style.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row h-100 ">
          <div className="about-text">
            <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutRight"
            >
              <h1>
              Software Engineer <span>Data Scientist,<br/>Game Developer,<br/>Video Editor </span>{" "}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <a href="#Projects" className=" btn btn-1">
              see projects
              </a>
            </ScrollAnimation>
          </div>

          <div className="about-img">
            <div className="about-img-inner">
              <div className="about-skills">
                <div className="about-skills-itens">react</div>
                <div className="about-skills-itens">html</div>
                <div className="about-skills-itens">css</div>
                <div className="about-skills-itens">Pyhon</div>
                <div className="about-skills-itens">No-SQL</div>
                <div className="about-skills-itens">MySQL</div>
                <div className="about-skills-itens">solidity</div>
                <div className="about-skills-itens">Java</div>
                <div className="about-skills-itens">js</div>
                <div className="about-skills-itens">ts</div>
              </div>
              <img src={img} alt="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
