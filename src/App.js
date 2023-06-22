import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route, Router, Routes } from "react-router-dom";
import Index from './Components/Index';
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skills';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Index />
            </React.Fragment>
          }
        />
        <Route
          path="/home"
          element={
            <React.Fragment>
              <Nav />
              <Home />
              <Footer />
            </React.Fragment>
          }
        />
        <Route
          path="/project"
          element={
            <React.Fragment>
              <Nav />
              <Projects />
              <Footer />
            </React.Fragment>
          }
        />{" "}
        <Route
          path="/skill"
          element={
            <React.Fragment>
              <Nav />
              <Skill />
              <Footer />
            </React.Fragment>
          }
        />{" "}
        <Route
          path="contact"
          element={
            <React.Fragment>
              <Nav />
             <Contact/>
              <Footer />
            </React.Fragment>
          }
        />
        <Route
          path="/about"
          element={
            <React.Fragment>
              <Nav />
              <About />
              <Footer />
            </React.Fragment>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
