import React from 'react';

const projects = [
  {
    title: "Football Statistical Analysis",
    description: "End-to-end data pipeline scraping FBRef datasets to power interactive Power BI dashboards.",
    tags: ["Python", "Power BI", "Data Mining"],
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/damanjeet-singh-7z/Football-analysis"
  },
  {
    title: "Best Player Predictor",
    description: "An ML model leveraging historical data to predict standout players of the upcoming season.",
    tags: ["scikit-learn", "Pandas", "Sklearn"],
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/damanjeet-singh-7z/Football-analysis"
  },
  {
    title: "Weather Data Clustering (k-means)",
    description: "Performed k-means cluster analysis using scikit-learn on millions of minute-granularity weather station records to generate a 12-cluster predictive model.",
    tags: ["Python", "scikit-learn", "K-Means"],
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/damanjeet-singh-7z/Weather-Data-Clustering-Using-k-means"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header reveal-section revealed">
          <div className="projects-tag">SELECTED WORK</div>
          <h2 className="projects-title">FEATURED PROJECTS</h2>
          <p className="projects-subtitle">A collection of my work focusing on data engineering and machine learning.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card reveal-section revealed" key={i} style={{transitionDelay: `${i * 0.1}s`}}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-image-overlay"></div>
                <div className="project-view-label">
                  <span>VIEW PROJECT</span>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, j) => (
                    <span className="project-tag" key={j}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-arrow">↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
