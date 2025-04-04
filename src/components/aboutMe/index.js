import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import img from "../../img/newprofilePng.png";
import "./style.css";

const AboutMe = () => {
  return (
    <section className="section" id="aboutme">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="row">
            <div className="section-title">
              <h2>
                About <span>Me</span>
              </h2>
            </div>
          </div>
        </ScrollAnimation>
        <div className="row">
          <div className="fun-facts-img">
            <img src={img} alt="Profile" />
          </div>
          <div className="fun-facts-items">
            <div className="row justify-content">
            <div className="">
  <ScrollAnimation
    animateIn="bounceInRight"
    animateOut="bounceOutLeft"
  >
    <p>
      My name is Mohammed Amour Al-Marshudi, a dedicated IT &amp; Data Automation Engineer from Oman. I graduated from the University of Technology and Applied Sciences in January 2025 with a degree in Software Engineering. Over the course of my studies, I have built a strong foundation in JavaScript and Python, alongside hands-on experience in both full-stack development and data analytics.
    </p>
  </ScrollAnimation>

  <ScrollAnimation
    animateIn="bounceInRight"
    animateOut="bounceOutLeft"
  >
    <p>
      During my time at Vodafone, I focused on automating data pipelines, streamlining reporting processes, and optimizing system efficiencies. This experience honed my skills in project management, data processing, and software deployment. I partnered with cross-functional teams to design, build, and maintain scalable solutions that significantly reduced manual workloads and improved overall data accuracy.
    </p>
  </ScrollAnimation>

  <ScrollAnimation
    animateIn="bounceInRight"
    animateOut="bounceOutLeft"
  >
    <p>
      My technical toolkit includes React.js, Bootstrap, Tailwind, MongoDB, Firebase, and SQL. I also have practical experience with Flutter and PHP, enabling me to tackle diverse project requirements. On the data science front, I have contributed to projects involving data processing, predictive modeling, and automation using Python libraries such as Pandas, NumPy, and Scikit-learn. Additionally, I have exposure to Hyperledger Fabric, which reflects my interest in blockchain development.
    </p>
  </ScrollAnimation>

  <ScrollAnimation
    animateIn="bounceInRight"
    animateOut="bounceOutLeft"
  >
    <p>
      Throughout my career, I have delivered projects requiring CRUD functionality, database optimization, and AI-driven insights for business applications. By blending my background in software engineering and data automation, I excel at architecting solutions that combine technical innovation with strategic value. My commitment to continuous learning and adaptability ensures I remain at the leading edge of emerging technologies.
    </p>
  </ScrollAnimation>

  <ScrollAnimation
    animateIn="bounceInRight"
    animateOut="bounceOutLeft"
  >
    <p>
      If you are looking for a software developer who seamlessly integrates data science with practical software solutions, I would love to connect and collaborate on meaningful projects. Let’s team up to build scalable, future-ready applications that make a real impact.
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
