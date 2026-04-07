import { FaPython, FaDocker, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiKeras, SiTailwindcss, SiMysql, SiPandas, SiNumpy, SiTensorflow, SiScikitlearn, SiApachehadoop, SiApachemaven } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const coreSkills = [
  { name: "C", icon: <span style={{fontWeight: 900, fontSize: '0.9em'}}>C</span> },
  { name: "C++", icon: <span style={{fontWeight: 900, fontSize: '0.9em'}}>C++</span> },
  { name: "Python", icon: <FaPython /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "Keras", icon: <SiKeras /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn /> },
  { name: "Matplotlib", icon: <span style={{fontWeight: 900, fontSize: '0.65em'}}>M-Plt</span> },
  { name: "Seaborn", icon: <span style={{fontWeight: 900, fontSize: '0.65em'}}>Sns</span> }
];

const toolsSkills = [
  { name: "Power BI", icon: <span style={{fontWeight: 900, fontSize: '0.8em'}}>P-BI</span> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Hadoop", icon: <SiApachehadoop /> },
  { name: "Maven", icon: <SiApachemaven /> },
  { name: "VS Code", icon: <VscVscode /> }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="hack-glow"></div>
      <div className="skills-container">
        
        <div className="hack-header reveal-section revealed">
          <div className="hack-tag">TECH STACK</div>
          <h2 className="hack-title">SKILLS & TOOLS</h2>
          <p className="hack-subtitle">Languages, libraries, and utilities powering my projects.</p>
        </div>

        <div className="skills-category reveal-section revealed">
          <h3 className="category-title">Core Languages & Machine Learning</h3>
          <div className="skills-grid">
            {coreSkills.map((skill, index) => (
              <div className="skill-card" key={index} style={{transitionDelay: `${index * 0.05}s`}}>
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category reveal-section revealed" style={{transitionDelay: "0.2s"}}>
          <h3 className="category-title">Tools, Data & Environments</h3>
          <div className="skills-grid">
            {toolsSkills.map((skill, index) => (
              <div className="skill-card" key={index} style={{transitionDelay: `${index * 0.05}s`}}>
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
