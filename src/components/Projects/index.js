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
    image: "https://user-images.githubusercontent.com/76883519/271652355-7432f9c8-49a9-4ec3-b04f-d50d17137c4a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg5MjI2NzgsIm5iZiI6MTczODkyMjM3OCwicGF0aCI6Ii83Njg4MzUxOS8yNzE2NTIzNTUtNzQzMmY5YzgtNDlhOS00ZWMzLWIwNGYtZDUwZDE3MTM3YzRhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjA3VDA5NTkzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFiMTE4NzgyZWQ4OGZlNTVhZjk1ZTE1ODA3NWYyMzQ2ZjhiZGE2NWYwYmRkODk0NWRiNmI3MDk1MDBjOTU4NGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.b48ovhgxN0uXJ7euO8dIQz52fzJglnDTEEssufKbjZ4",
    constant: "Click to Visit",
  },
  {
    pName: "Constraint Satisfaction Problem",
    link: "https://github.com/marshudi/Constraint-Satisfaction-Problem",
    figCap: "AI & Problem Solving",
    image: "https://user-images.githubusercontent.com/76883519/410865661-521c2c9d-9c5f-4fe5-99da-612100552c7f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg5MjMxOTksIm5iZiI6MTczODkyMjg5OSwicGF0aCI6Ii83Njg4MzUxOS80MTA4NjU2NjEtNTIxYzJjOWQtOWM1Zi00ZmU1LTk5ZGEtNjEyMTAwNTUyYzdmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjA3VDEwMDgxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmNzZjZGNiOWJlNzhhNGY3ZDE3NjRmOTM1YzNhM2Y0MGY3NDRkZGQyOTQ3ZTU3MzU5ZjVmMmVlNTZlOTQ2NGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.JQW1xrlmyCPYjf8DCFlNWkNFKE5FC2qwerriShe_-Ws",
    constant: "Click to Visit",
  },
  {
    pName: "Traffic Light Control System",
    link: "https://github.com/marshudi/Traffic-Light-Control-System",
    figCap: "Embedded Systems & IoT",
    image: "https://user-images.githubusercontent.com/76883519/410866817-ef15a77b-624c-4941-a1af-18cb5215e6c3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg5MjMzMTMsIm5iZiI6MTczODkyMzAxMywicGF0aCI6Ii83Njg4MzUxOS80MTA4NjY4MTctZWYxNWE3N2ItNjI0Yy00OTQxLWExYWYtMThjYjUyMTVlNmMzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjA3VDEwMTAxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThkM2IxNWNmY2Y4MDJmYzBlMzRhYjgyNTY3ZmM0NjE2OTZhYjFiYzA1M2RkMDY1ODM4ZjU5Mzc1ODk0NTAwNTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.E36MEwLVxvyIYVD4vAwuIqWmhX_uHbaszHsdJR7p7Zk",
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