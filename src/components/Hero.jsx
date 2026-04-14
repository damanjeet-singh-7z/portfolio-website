import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section className="hero reveal-section revealed">
      <div className="hero-glow"></div>
      <div className="hero-container">
        
        <div className="hero-text-block">
          <h1 className="hero-title">
            <span className="hero-title-solid">DAMANJEET</span>
            <span className="hero-title-outline">SINGH</span>
          </h1>
        </div>
        
        <div className="hero-image-wrapper">
          <div className={`hero-image-container ${loaded ? 'loaded' : ''}`}>
             <img src="/profile.png" alt="Hero" className="hero-image" />
             <div className="hero-image-overlay"></div>
          </div>
        </div>
        
        <div className="hero-socials">
          <p className="hero-socials-label">Connect</p>
          <div className="hero-socials-links">
            <a className="social-link" href="https://github.com/damanjeet-singh-7z" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-wrapper">GH</div>
              <span className="social-name">GitHub</span>
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/damanjeet-singh-7z/" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-wrapper">IN</div>
              <span className="social-name">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="hero-info">
          <h2 className="hero-info-title">Engineering the future.</h2>
          <p className="hero-info-desc">I specialize in C/C++, Python, AI/ML, and PowerBI, transforming complex datasets into actionable insights and robust predictive models.</p>
          <a className="hero-cta" href="#about">
            DISCOVER MORE
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-line"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
