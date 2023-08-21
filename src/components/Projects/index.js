import React from "react";
import "./style.css";
import img from "../../img/project1.png";
import img2 from "../../img/project2.jpg";

import ScrollAnimation from "react-animate-on-scroll";



const project_info = [
  {

      pName: "Wiki Gulf 2020",
      link:"https://marshudi.github.io/wikigulf/",
      figCap:
        "University of Technology and Applied Sciences",
      image:
        "",
      
      constant: "click to visit",

    },
    {

      pName: "Event Hub 2022",
      link:"https://marshudi.github.io/EventHub/",
      figCap:
        "University of Technology and Applied Sciences",
      image:
        "",
      
      constant: "click to visit",

    },
    {

      pName: "Wiki Gulf 2020",
      link:"https://marshudi.github.io/wikigulf/",
      figCap:
        "University of Technology and Applied Sciences",
      image:
        "",
      
      constant: "click to visit",

    }

    
  ]




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
            
            
            {project_info.map((p)=>{
              
              return(
              <>

              <div className="divimg">
                <a
                  className="block block-1"
                  href={p.link}
                  target="_blank"
                >
                  <span>
                    <img className="imageProjects" src={p.image} alt="Image" />
                  </span>
                <figcaption>
                  {p.figCap}{" "}
                  <h3>{p.pName}</h3>{" "}
                  
                  <p>{p.constant}</p>{" "}
                </figcaption>
              </a>
            </div>
              
              </>
              )
            })}

           


   



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
