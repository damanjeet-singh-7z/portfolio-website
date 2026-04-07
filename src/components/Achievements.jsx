import React, { useState } from 'react';

const achievements = [
  {
    title: "Build Generative AI Apps",
    description: "Build Generative AI Apps and Solutions with No-Code Tools.",
    org: "Infosys Springboard",
    date: "2024",
    id: "01",
    link: "https://drive.google.com/file/d/1E-sCfekzioyXkt8mZyVyKCoCwnNPeVkY/view"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    description: "Professional IT and Networking skills.",
    org: "Coursera (Google)",
    date: "2024",
    id: "02",
    link: "https://drive.google.com/file/d/1JOJk5_Fkbd59bkSry9USpNsdWxYNP8iq/view"
  },
  {
    title: "Privacy and Security in Online Social Media",
    description: "Elite Certification in Cybersecurity and Data Privacy.",
    org: "NPTEL",
    date: "2023",
    id: "03",
    link: "https://drive.google.com/file/d/1KDwKKMG-BNNBVZySBrkq3KJCdbRqLS1T/view"
  },
  {
    title: "Introduction to Python",
    description: "Foundational Python syntax, data structures, and problem-solving.",
    org: "Infosys Springboard",
    date: "2023",
    id: "04",
    link: "https://drive.google.com/file/d/1V5WbHhI_H-XKswwaJ7YGr_flnPuTdxVF/view"
  }
];

const Achievements = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section className="hackathons-section" id="achievements">
      <div className="hack-glow"></div>
      <div className="hack-container">
        <div className="hack-header reveal-section revealed">
          <div className="hack-tag">CERTIFICATIONS</div>
          <h2 className="hack-title">ACHIEVEMENTS</h2>
          <p className="hack-subtitle">Extracurricular milestones and recognized credentials.</p>
        </div>
        
        <div className="hack-grid">
          {achievements.map((item, i) => (
            <div className="hack-card reveal-section revealed" style={{textDecoration: 'none', transitionDelay: `${i * 0.15}s`, '--card-accent': '#ff6b35'}} key={i}>
              <div className="hack-accent-line"></div>
              <div className="hack-number">{item.id}</div>
              <div className="hack-badge">CERTIFIED</div>
              <h3 className="hack-card-name">{item.title}</h3>
              <span className="hack-card-event">{item.org}</span>
              <p className="hack-card-org">{item.description}</p>
              <div className="hack-card-date">{item.date}</div>
              <button onClick={() => setActiveCert(item.link)} className="hack-link">
                <span className="hack-link-txt">VIEW CERTIFICATE</span>
                <div className="hack-link-arrow">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeCert && (
        <div className="cert-modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setActiveCert(null)}>✕</button>
            <iframe 
              src={activeCert.replace('/view', '/preview')} 
              className="cert-iframe"
              title="Certificate Preview"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
