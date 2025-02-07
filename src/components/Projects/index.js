import React from "react";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

const project_info = [
  {
    pName: "Wiki Gulf 2020",
    link: "https://marshudi.github.io/wikigulf/",
    figCap: "University of Technology and Applied Sciences",
    image: "https://marshudi.github.io/wikigulf/logo.png",
    constant: "Click to Visit",
  },
  {
    pName: "Event Hub 2022",
    link: "https://marshudi.github.io/EventHub/",
    figCap: "University of Technology and Applied Sciences",
    image: "https://raw.githubusercontent.com/marshudi/EventHub/main/pic/poly_eh_r2a-1697158327.jpg",
    constant: "Click to Visit",
  },
  {
    pName: "Personal Blog Website",
    link: "https://marshudi.github.io/Udacity-Project1-FE-Web/",
    figCap: "UDACITY",
    image: "https://www.usnews.com/object/image/00000179-f5f5-d92c-a979-fff73a330001/201120-udacity-submitted.png",
    constant: "Click to Visit",
  },
  {
    pName: "Landing Page Project",
    link: "https://marshudi.github.io/Udacity-Project2-FE-Web/",
    figCap: "UDACITY",
    image: "https://www.usnews.com/object/image/00000179-f5f5-d92c-a979-fff73a330001/201120-udacity-submitted.png",
    constant: "Click to Visit",
  },
  {
    pName: "Weather Journal App",
    link: "https://github.com/marshudi/Udacity-Project3-FE-Web",
    figCap: "UDACITY",
    image: "https://www.usnews.com/object/image/00000179-f5f5-d92c-a979-fff73a330001/201120-udacity-submitted.png",
    constant: "Click to Visit",
  },
  {
    pName: "Movie Project React 2023",
    link: "https://github.com/marshudi/Movies-Project-React",
    figCap: "University of Technology and Applied Sciences",
    image: "https://user-images.githubusercontent.com/76883519/248277074-df6b93bd-3920-4734-b880-54a28daf615e.jpg",
    constant: "Click to Visit",
  },
  {
    pName: "Cinemix Movie Streaming Application 2023",
    link: "https://github.com/marshudi/Cinemix",
    figCap: "University of Technology and Applied Sciences",
    image: "https://raw.githubusercontent.com/marshudi/Cinemix/main/assets/screens.png",
    constant: "Click to Visit",
  },
  {
    pName: "World University Rankings",
    link: "https://github.com/marshudi/WorldUniversityRankings",
    figCap: "University Data Analysis",
    image: "https://images.cnbctv18.com/wp-content/uploads/2022/06/QS-world-univerisities-1019x573.jpg",
    constant: "Click to Visit",
  },
  {
    pName: "Constraint Satisfaction Problem",
    link: "https://github.com/marshudi/Constraint-Satisfaction-Problem",
    figCap: "AI & Problem Solving",
    image: "https://www.researchgate.net/publication/2364273/figure/fig1/AS:668935657627659@1536498097509/An-example-of-a-graph-coloring-problem-and-its-representation.png",
    constant: "Click to Visit",
  },
  {
    pName: "Traffic Light Control System",
    link: "https://github.com/marshudi/Traffic-Light-Control-System",
    figCap: "Embedded Systems & IoT",
    image: "https://s1.cdn.autoevolution.com/images/news/gallery/how-traffic-light-control-systems-work_1.jpg",
    constant: "Click to Visit",
  },
  {
    pName: "Helping Hands",
    link: "https://github.com/marshudi/HelpingHands",
    figCap: "Social Assistance Platform",
    image: "https://helpinghands-client.onrender.com/static/media/logo.a35ebe535235de0549e9.png",
    constant: "Click to Visit",
  },
  {
    pName: "Simple Employee System",
    link: "https://github.com/marshudi/SimpleEmployeeSystem",
    figCap: "Employee Management Tool",
    image: "https://user-images.githubusercontent.com/61316762/201523568-51e1ed64-26ab-43e6-b34c-a1687c8097d3.png",
    constant: "Click to Visit",
  },
];

const Projects = () => {
  return (
    <section className="fun-facts-section" id="Projects">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="row">
            <div className="section-title">
              <h2>
                My <span>Projects</span>
              </h2>
            </div>
          </div>
        </ScrollAnimation>

        <div className="cards" id="Containerimg">
          {project_info.map((p, index) => (
            <div key={index} className="project-card">
              <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">
                <img className="project-image" src={p.image} alt={p.pName} />
                <figcaption>
                  <h3>{p.pName}</h3>
                  <p>{p.figCap}</p>
                  <span>{p.constant}</span>
                </figcaption>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;