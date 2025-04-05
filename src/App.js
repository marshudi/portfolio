import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import About from './components/about';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        {/* Main route */}
        <Route exact path="/">
          <>
            <About />
            <AboutMe />
            <Skills />
            <Projects />
          </>
        </Route>

        {/* 404 route */}
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
