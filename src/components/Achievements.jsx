import React from 'react';

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
  return (
    <section className="hackathons" id="achievements">
      <div className="hack-glow"></div>
      <div className="hack-container">
        <div className="hack-header reveal-section revealed">
          <div className="hack-tag">CERTIFICATIONS</div>
          <h2 className="hack-title">ACHIEVEMENTS</h2>
          <p className="hack-subtitle">Extracurricular milestones and recognized credentials.</p>
        </div>
        
        <div className="hack-grid">
          {achievements.map((item, i) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="hack-card reveal-section revealed" style={{textDecoration: 'none', transitionDelay: `${i * 0.15}s`, '--card-accent': '#ff6b35'}} key={i}>
              <div className="hack-accent-line"></div>
              <div className="hack-number">{item.id}</div>
              <div className="hack-badge">CERTIFIED</div>
              <h3 className="hack-card-name">{item.title}</h3>
              <span className="hack-card-event">{item.org}</span>
              <p className="hack-card-org">{item.description}</p>
              <div className="hack-card-date">{item.date}</div>
              <div className="hack-view-cert">
                <span>VIEW DETAILS</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
