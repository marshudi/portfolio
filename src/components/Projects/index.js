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
        "https://marshudi.github.io/wikigulf/logo.png",
      
      constant: "click to visit",

    },
    {

      pName: "Event Hub 2022",
      link:"https://marshudi.github.io/EventHub/",
      figCap:
        "University of Technology and Applied Sciences",
      image:
        "https://raw.githubusercontent.com/marshudi/EventHub/main/pic/poly_eh_r2a-1697158327.jpg",
      
      constant: "click to visit",

    },
    {

      pName: "Personal Blog Website",
      link:"https://marshudi.github.io/Udacity-Project1-FE-Web/",
      figCap:
        "UDACITY",
      image:
        "https://www.usnews.com/object/image/00000179-f5f5-d92c-a979-fff73a330001/201120-udacity-submitted.png?update-time=1623329178450&size=responsiveFlow300",
      
      constant: "click to visit",

    },


    {

      pName: "Landing Page Project",
      link:"https://marshudi.github.io/Udacity-Project2-FE-Web/",
      figCap:
        "UDACITY",
      image:
        "https://www.usnews.com/object/image/00000179-f5f5-d92c-a979-fff73a330001/201120-udacity-submitted.png?update-time=1623329178450&size=responsiveFlow300",
      
      constant: "click to visit",

    },

    {

      pName: "Weather Journal App",
      link:"https://github.com/marshudi/Udacity-Project3-FE-Web",
      figCap:
        "UDACITY",
      image:
        "https://www.usnews.com/object/image/00000179-f5f5-d92c-a979-fff73a330001/201120-udacity-submitted.png?update-time=1623329178450&size=responsiveFlow300",
      
      constant: "click to visit",

    },

    {

      pName: "Movie Project React 2023",
      link:"https://github.com/marshudi/Movies-Project-React",
      figCap:
        "University of Technology and Applied Sciences",
      image:
        "https://user-images.githubusercontent.com/76883519/248277074-df6b93bd-3920-4734-b880-54a28daf615e.jpg",
      
      constant: "click to visit",

    },
    {

      pName: "Cinemix Movie Streaming Application 2023",
      link:"https://github.com/marshudi/Cinemix",
      figCap:
        "University of Technology and Applied Sciences",
      image:
        "https://raw.githubusercontent.com/marshudi/Cinemix/main/assets/logo.png",
      
      constant: "click to visit",

    },

    
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
                  <img className="imageProjects" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm410-10-b_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=1939c03b3e09482285303dc8f3c9b0c9" />
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
