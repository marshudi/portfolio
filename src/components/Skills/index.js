import React from "react";
import "./style.css";
import {
  FaBootstrap,
  FaHtml5,
  FaReact,
  FaSass,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaRegLightbulb,
  FaPython,
  FaPhp,
  FaDatabase,
  FaCloud,
  FaNodeJs,
  FaBitcoin 
} from "react-icons/fa";
import { SiTypescript, SiMongodb, SiFirebase, SiFlutter } from "react-icons/si";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdComputer, MdDataUsage } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import ScrollAnimation from "react-animate-on-scroll";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const skills = () => {
  return (
    <section className="why-us-section g" id="skills">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="row">
            <div className="section-title">
              <h2>
                My <span>Skills</span>
              </h2>
            </div>
            <div className="item-skills">
              <div className="icon">
                <FaHtml5 size={40} color={"#0caa68"} />
              </div>
              <h3>HTML</h3>
            </div>
            <div className="item-skills">
              <FaReact size={40} color={"#0caa68"} />
              <h3>React.js</h3>
            </div>
            <div className="item-skills">
              <FaBootstrap size={40} color={"#0caa68"} />
              <h3>Bootstrap</h3>
            </div>
            <div className="item-skills">
              <FaCss3Alt size={40} color={"#0caa68"} />
              <h3>CSS</h3>
            </div>
            <div className="item-skills">
              <SiTypescript size={40} color={"#0caa68"} />
              <h3>TypeScript</h3>
            </div>
            <div className="item-skills">
              <FaJs size={40} color={"#0caa68"} />
              <h3>JavaScript</h3>
            </div>
            <div className="item-skills">
              <FaPython size={40} color={"#0caa68"} />
              <h3>Python</h3>
            </div>
            <div className="item-skills">
              <FaPhp size={40} color={"#0caa68"} />
              <h3>PHP</h3>
            </div>
            <div className="item-skills">
              <SiMongodb size={40} color={"#0caa68"} />
              <h3>MongoDB</h3>
            </div>
            <div className="item-skills">
              <SiFirebase size={40} color={"#0caa68"} />
              <h3>Firebase</h3>
            </div>
            <div className="item-skills">
              <FaDatabase size={40} color={"#0caa68"} />
              <h3>SQL & Database Management</h3>
            </div>
            <div className="item-skills">
              <SiFlutter size={40} color={"#0caa68"} />
              <h3>Flutter</h3>
            </div>
            <div className="item-skills">
              <FaBitcoin  size={40} color={"#0caa68"} />
              <h3>Blockchain Technology</h3>
            </div>
            <div className="item-skills">
              <FaCloud size={40} color={"#0caa68"} />
              <h3>Cloud Computing</h3>
            </div>
            <div className="item-bloq">
              <AiOutlineLoading3Quarters size={40} color={"#fff"} />
              <h3>More Skills...</h3>
              <p>Continuously Learning...</p>
            </div>
          </div>
        </ScrollAnimation>

        <div className="services">
          <AliceCarousel
            animationDuration="1000"
            infinite
            autoPlay
            autoPlayInterval="3000"
            disableButtonsControls="false"
          >
            <div>
              <MdDataUsage size={40} color={"#0caa68"} />
              <h2>Data Science & Machine Learning</h2>
              <p>Utilizing AI & ML techniques for predictive modeling and analytics.</p>
            </div>
            <div>
              <MdComputer size={40} color={"#0caa68"} />
              <h2>Website & Web App Development</h2>
              <p>Development of modern, responsive, and dynamic web applications.</p>
            </div>
            <div>
              <ImMobile size={40} color={"#0caa68"} />
              <h2>Mobile App Development</h2>
              <p>Building cross-platform mobile applications using Flutter.</p>
            </div>

            <div>
              <FaRegLightbulb size={40} color={"#0caa68"} />
              <h2>UI/UX Design</h2>
              <p>Crafting user-friendly and visually appealing interfaces.</p>
            </div>
          </AliceCarousel>
        </div>
      </div>
    </section>
  );
};

export default skills;
