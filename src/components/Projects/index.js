import React from "react";
import "./style.css";
import img from "../../img/project1.png";
import img2 from "../../img/project2.jpg";

import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  return (
    <section className="fun-facts-section" id="Projects">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="row">
            <div className="  section-title">
              <h2>
                My <span>Projects</span>
              </h2>
            </div>
          </div>
        </ScrollAnimation>

        <div className="row">


          <div className="cards" id="Containerimg">
            
            
            <div className="divimg">
              <a
                className="block block-1"
                href="https://marshudi.github.io/wikigulf/"
                target="_blank"
              >
                <span>
                  <img className="imageProjects" src={img} alt="Image" />
                </span>
                <figcaption>
                University of Technology and Applied Sciences{" "}
                  <h3>Wiki Gulf 2020</h3>{" "}
                  
                  <p>click to visit</p>{" "}
                </figcaption>
              </a>
            </div>


            <div className="divimg">
              <a
                className="block block-2"
                href="https://marshudi.github.io/EventHub/"
                target="_blank"
              >
                <span>
                  <img className="imageProjects" src={img2} alt="Image" />
                </span>
                <figcaption>
                University of Technology and Applied Sciences{" "}
                  <h3>Event Hub 2022</h3>{" "}
                  <p>click to visit</p>{" "}
                </figcaption>
              </a>
            </div>



            <div className="divimg">
              <a className="block block-6 " href="#" target="_blank">
                <span>
                  <img className="imageProjects" />
                </span>
                <figcaption>
                  {" "}
                  New Projects coming soon, wait <p> carrying ...</p>{" "}
                </figcaption>
              </a>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
