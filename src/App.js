import React from 'react';
import './App.css'; // Ensure this file exists, or remove it
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Homepage'; // Ensure file exists
import Project from './pages/Project';
import Service from './pages/Service';
import Skill from './pages/Skills'; // Ensure file exists

function App() {
  return (
    <div>
      <Home /> {/* Displays the homepage component */}
      {/* Uncomment the components below if you want to show them */}
      {/* <About />
      <Service />
      <Skill />
      <Project />
      <Contact /> */}
    </div>
  );
}

export default App;
