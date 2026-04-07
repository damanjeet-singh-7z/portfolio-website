import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <div className={`navbar-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-inner">
          <a href="#about" className="menu-link" onClick={() => setMenuOpen(false)}><span className="menu-link-text">Vision</span></a>
          <a href="#skills" className="menu-link" onClick={() => setMenuOpen(false)}><span className="menu-link-text">Skills</span></a>
          <a href="#projects" className="menu-link" onClick={() => setMenuOpen(false)}><span className="menu-link-text">Work</span></a>
          <a href="#achievements" className="menu-link" onClick={() => setMenuOpen(false)}><span className="menu-link-text">Certifications</span></a>
          <a href="#education" className="menu-link" onClick={() => setMenuOpen(false)}><span className="menu-link-text">Education</span></a>
          <a href="#contact" className="menu-link" onClick={() => setMenuOpen(false)}><span className="menu-link-text">Contact</span></a>
        </div>
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
