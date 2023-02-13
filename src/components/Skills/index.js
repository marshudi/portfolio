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
  FaErlang,
  FaPhp,
  FaBtc,
  FaBoxes,
  FaBitcoin,
  FaFileContract,
  FaBoxOpen,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
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
                {" "}
                My <span>Skills</span>
              </h2>
            </div>

            <div className="item-skills">
              <div className="icon">
                {" "}
                <FaHtml5 size={40} color={"#0caa68"} />
              </div>
              <h3>html</h3>
              <p></p>
            </div>

            <div className="item-skills">
              <div>
                {" "}
                <FaReact size={40} color={"#0caa68"} />
              </div>
              <h3>React</h3>
              <p></p>
            </div>

            <div className="item-skills">
              <FaSass size={40} color={"#0caa68"} />
              <h3>Sass</h3>
              <p></p>
            </div>

            <div className="item-skills">
              <FaCss3Alt size={40} color={"#0caa68"} />
              <h3>Css</h3>
              <p></p>
            </div>

            <div className="item-skills">
              <SiTypescript size={40} color={"#0caa68"} />
              <h3>TypeScript</h3>
              <p></p>
            </div>

            <div className="item-skills">
              <FaFigma size={40} color={"#0caa68"} />
              <h3>Figma </h3>
              <p></p>
            </div>

            <div className="item-skills">
              <FaBootstrap size={40} color={"#0caa68"} />
              <h3>Bootstrap</h3>
              <p></p>
            </div>

            <div className="item-skills">
              <FaJs size={40} color={"#0caa68"} />
              <h3>JavaScript</h3>
              <p></p>
            </div>

            <div className="item-skills">
              <FaPython size={40} color={"#0caa68"} />
              <h3>Python</h3>
              <p></p>
            </div>

            <div className="item-skills">
              <FaPhp size={40} color={"#0caa68"} />
              <h3>Php</h3>
              <p></p>
            </div>

            <div className="item-skills">
              <FaBoxes size={40} color={"#0caa68"} />
              <h3>Blockchain Technology</h3>
              <p></p>
            </div>


            <div className="item-bloq">
              <AiOutlineLoading3Quarters size={40} color={"#fff"} />
              <h3> carrying</h3>
              <p> ...</p>
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
              <MdComputer size={40} color={"#0caa68"} />
              <h2> Website Creation</h2>
              <p>
              Development of professional websites, web systems etc.
              </p>
            </div>
          
            <div>
              <ImMobile size={40} color={"#0caa68"} />
              <h2> Responsive Sites</h2>
              <p>
              Creation of responsive websites for the best visualization in all
                 the resolutions.
              </p>
            </div>
         
            <div>
              <FaRegLightbulb size={40} color={"#0caa68"} />
              <h2> UI/UX Design</h2>
              <p>
              Layout design that fits your business in a professional and faithful way in development.
              </p>
            </div>
          </AliceCarousel>
        </div>

        
      </div>
    </section>
  );
};

export default skills;
