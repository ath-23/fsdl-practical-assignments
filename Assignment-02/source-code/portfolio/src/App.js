import React, { useState, useEffect } from 'react';
import './App.css';  

function App() {
  const [index, setIndex] = useState(0);
  const skills = [
    "Android Applications with Flutter",
    "Generative AI Models",
    "Creative UI/UX Designs",
    "Machine Learning Solutions"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Atharva's Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="fade-in">Hi, I'm <span className="highlight">Atharva Karale</span></h1>
          <p className="subtitle">A Flutter Developer and Tech Enthusiast</p>
          
          <div className="dynamic-text-container">
            <span className="static-text">I build </span>
            <span className="dynamic-text" key={index}>
              {skills[index]}
            </span>
          </div>

          <a href="#projects" className="btn-primary">View My Work</a>
        </div>
        
        <div className="hero-bg-animation"></div>
      </section>


      {/* About & Skills */}
      <section id="about" className="section about">
        <h1>My Skills</h1>
        <div className="skills-grid">
          <div className="skill-card"><img src = "flutter.png" className='skill-logo'></img>Flutter</div>
          <div className="skill-card"><img src = "dart.png" className='skill-logo'></img>Dart</div>
          <div className="skill-card"><img src = "logo.svg" className='skill-logo'></img>React</div>
          <div className="skill-card"><img src = "js.png" className='skill-logo'></img>JavaScript</div>
          <div className="skill-card"><img src = "css.png" className='skill-logo'></img>CSS3</div>
          <div className="skill-card"><img src = "node.png" className='skill-logo'></img>Node.js</div>
          <div className="skill-card"><img src = "mongo.png" className='skill-logo'></img>MongoDB
          MySQL
          Firebase</div>
          <div className="skill-card"><img src = "ml.png" className='skill-logo'></img>Machine Learning</div>
          <div className="skill-card"><img src = "transformer.png" className='skill-logo'></img>Generative AI</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <h1 id = "project-texts">Projects</h1><br></br>
        <div className="project-list">
          <div className="project-item">
            <h3>Student ERP App</h3>
            <p>A comprehensive ERP app for students to manage and access important data easily, while communicating with peers from anywhere.</p>
          </div>
          <div className="project-item">
            <h3>Nutrilife</h3>
            <p>A one-stop solution for the fitness and diet conscious crowd. Making fitness tracking easier and removing headache of planning meals.</p>
          </div>
          <div className="project-item">
            <h3>PII System</h3>
            <p>Prevents accidental sharing of personally identifiable data, reducing risk of identity thefts and privacy breaches.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-contact">
        <h1 id="contact-text">Get In Touch</h1>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/atharva-karale23/" target="_blank" rel="noreferrer" className="social-link"><img src="linkedin.png" alt="LinkedIn" className="social-icon" /></a>
          <a href="https://www.github.com/ath-23" target="_blank" rel="noreferrer" className="social-link"><img src="github.png" alt="Github" className="social-icon" /></a>
        </div>
      </section>

      <footer>
        <p>&copy;Built with React by Atharva.</p>
      </footer>
    </div>
  );
}

export default App;