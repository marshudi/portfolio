import React from 'react';
import './App.css';

import  Header from'./components/header'

import  Skills from'./components/Skills'
import  Projects from'./components/Projects'
import  Footer from'./components/footer'
import AboutMe from './components/aboutMe';
import About from './components/about';
//import AboutMe from './components/aboutMe';
//import Projects from './components/Projects';



function App() {
  return (
<>

  
      <Header/>

      <About/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
  



</>

    
  );
}

export default App;