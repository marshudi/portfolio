import React from "react";
import Rotate from 'react-reveal/Rotate';
import "./style.css";
import logo from "../../img/icon.png";
const Headertop = () => {

  
  return (
    <header className="header">
      <div className="container">
        <div className="row ">
          <div className="logo">
   <img src={logo} width="58" alt="Logo" />
          <Rotate top left>

            <a href="#"> Mohammed Al-Marshudi</a>
            </Rotate>  
          </div>
          <input type="checkbox" id="nav-check" />
          <label htmlFor="nav-check" className="nav-toggler">
            <span></span>
          </label>

          <nav className="nav">
            <ul>
              <li>
                {" "}
                <a href="#aboutme"> About </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#skills"> Skills </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#Projects"> Projects </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#footer"> Contact </a>{" "}
              </li>
              <Rotate top left>
              <li className="header-btn">
                {" "}
  
                <a
                  href="mailto:momarshudi@gmail.com"
                  target="_blank"
                >
                   
                Email Me
                
                 
                </a>
            
              </li>
              </Rotate>
         
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Headertop;
