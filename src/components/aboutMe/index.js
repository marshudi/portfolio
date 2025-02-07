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
                    My name is Mohammed Amour Al-Marshudi, a highly motivated and skilled software developer from Oman. I specialize in JavaScript and Python with a strong foundation in full-stack development and data science. Currently, I am pursuing a Software Engineering degree at the University of Technology and Applied Sciences, where I have been expanding my knowledge in AI, web development, blockchain technology, and data analytics.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <p>
                    My technical expertise includes React.js, Bootstrap, Tailwind, MongoDB, Firebase, and SQL, with additional experience in Flutter and PHP. I have hands-on experience working on projects that involve data processing, predictive modeling, and automation, utilizing Python libraries such as Pandas, NumPy, and Scikit-learn. I am also proficient in cloud computing and blockchain development, particularly with Hyperledger Fabric.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <p>
                    I am passionate about problem-solving and integrating innovative solutions into software development. My experience includes developing web applications with CRUD functionality, optimizing database management, and leveraging AI-driven insights for business applications. My dedication to continuous learning and adapting to emerging technologies drives me to contribute meaningfully to the field of software engineering.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <p>
                    If you are looking for a software developer who bridges the gap between data science and software engineering, I’d love to connect and collaborate on impactful projects. Let's work together to build scalable and innovative solutions!
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
