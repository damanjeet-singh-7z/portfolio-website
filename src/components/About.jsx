import React, { useEffect, useState } from 'react';

const skills = ["C", "C++", "Python", "AI", "Power BI"];

const About = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 1500);
  }, []);

  return (
    <section className="vision reveal-section revealed" id="about">
      <div className="vision-dark-overlay"></div>
      
      <div className={`vision-scene ${loaded ? 'loaded' : ''}`}>
        <iframe src="https://my.spline.design/nexbotrobotcharacterconcept-xADFhCTsoXfIS0Ik2GArkSD0/" frameBorder="0" width="100%" height="100%" title="3D Robot"></iframe>
      </div>
      
      {!loaded && (
        <div className="vision-loader">
          <div className="loader-ring"></div>
          <span>INITIALIZING</span>
        </div>
      )}

      <div className={`vision-content ${loaded ? 'visible' : ''}`}>
        <div className="vision-tag">MY VISION</div>
        <h2 className="vision-title">
          BUILDING THE <br/>
          <span className="vision-highlight">FUTURE WITH DATA</span>
        </h2>
        <p className="vision-desc">
          I am passionate about harnessing the power of data and artificial intelligence to solve complex problems. My journey involves deep diving into datasets, building predictive models, and crafting visualizations.
        </p>
        <div className="vision-stats">
          <div className="vision-stat">
            <span className="stat-number">AI/ML</span>
            <span className="stat-label">FOCUS</span>
          </div>
          <div className="vision-stat">
            <span className="stat-number">DATA</span>
            <span className="stat-label">DRIVEN</span>
          </div>
        </div>
      </div>

      <div className={`vision-tags ${loaded ? 'visible' : ''}`}>
        {skills.map((skill, index) => (
          <div key={index} className={`float-tag tag-${(index % 5) + 1}`}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
