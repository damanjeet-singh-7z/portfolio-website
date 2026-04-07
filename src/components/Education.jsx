import React from 'react';

const educationData = [
  {
    period: "2023 - Present",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Lovely Professional University (LPU), Punjab",
    stats: "CGPA: 8.29",
  },
  {
    period: "2021 - 2023",
    degree: "Intermediate (12th Grade)",
    institution: "Sacred Heart Sen. Sec. School, Ludhiana",
    stats: ""
  },
  {
    period: "2020 - 2021",
    degree: "Matriculation (10th Grade)",
    institution: "Sacred Heart Sen. Sec. School, Ludhiana",
    stats: ""
  }
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="hack-glow"></div>
      <div className="education-container">
        
        <div className="hack-header reveal-section revealed">
          <div className="hack-tag">ACADEMICS</div>
          <h2 className="hack-title">EDUCATION</h2>
          <p className="hack-subtitle">My academic roadmap and qualifications.</p>
        </div>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div className="timeline-item reveal-section revealed" style={{transitionDelay: `${index * 0.15}s`}} key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.period}</div>
                <h3 className="timeline-degree">{item.degree}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                {item.stats && <div className="timeline-stats">{item.stats}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
