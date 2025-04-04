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
      My name is Mohammed Amour Al-Marshudi, a dedicated IT &amp; Data Automation Engineer from Oman. I have a strong foundation in JavaScript and Python, with hands-on experience in full-stack development and data analytics. While pursuing my Software Engineering degree at the University of Technology and Applied Sciences, I have deepened my knowledge in AI, web development, blockchain technology, and advanced data processing techniques.
    </p>
  </ScrollAnimation>

  <ScrollAnimation
    animateIn="bounceInRight"
    animateOut="bounceOutLeft"
  >
    <p>
      In my role at Vodafone, I focused on automating data pipelines, streamlining reporting processes, and optimizing system efficiencies. This experience allowed me to refine my skills in project management, data processing, and software deployment. I collaborated with cross-functional teams to design, build, and maintain scalable solutions that significantly reduced manual workloads and improved overall data accuracy.
    </p>
  </ScrollAnimation>

  <ScrollAnimation
    animateIn="bounceInRight"
    animateOut="bounceOutLeft"
  >
    <p>
      My technical toolkit includes React.js, Bootstrap, Tailwind, MongoDB, Firebase, and SQL. I also have practical experience with Flutter and PHP, enabling me to adapt quickly to diverse project needs. On the data science front, I have contributed to projects involving data processing, predictive modeling, and automation using Python libraries such as Pandas, NumPy, and Scikit-learn. Additionally, I have exposure to Hyperledger Fabric, reflecting my interest in blockchain development.
    </p>
  </ScrollAnimation>

  <ScrollAnimation
    animateIn="bounceInRight"
    animateOut="bounceOutLeft"
  >
    <p>
      Throughout my career, I have delivered projects requiring CRUD functionality, database optimization, and AI-driven insights for business applications. Leveraging my background in both software engineering and data automation, I excel at architecting solutions that marry technical innovation with strategic value. My commitment to continuous learning and adaptability ensures I remain at the forefront of emerging technologies.
    </p>
  </ScrollAnimation>

  <ScrollAnimation
    animateIn="bounceInRight"
    animateOut="bounceOutLeft"
  >
    <p>
      If you are looking for a software developer who bridges data science with practical software solutions, I would love to connect and collaborate on impactful projects. Let’s join forces to build scalable, forward-thinking applications that make a real difference.
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
