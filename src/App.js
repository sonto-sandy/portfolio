import images from './images.js';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [showMore, setShowMore] = useState(false);
  const [explore, setexplore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  const handle2Toggle = () => {
    setexplore(!explore);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="nav-brand"><img src={images["logo.png"]} alt='logo'></img></div>
          <ul className="nav-menu">
            <li><a href="#"><i className="fas fa-home"></i>Abount Me</a></li>
            <li><a href="#"><i className="fas fa-info-circle"></i>Skills</a></li>
            <li><a href="#"><i className="fas fa-cogs"></i>Portfolio</a></li>
            <li>
              <a href="#" className="btn-link">
                <i className="fas fa-envelope btn-color"></i>CONTACT ME
              </a>
            </li>
          </ul>
        </nav>
        <div className="hero">
          <div className="hero-left">
            <h3>Hi, I am</h3>
            <h1>Santhosh D</h1>
            <p>Full Stack Developer</p>
            <div className="social-icons">
              <a href="#"><img src={images["Vector.svg"]} alt='email' /></a>
              <a href="#"><img src={images["Vector(1).svg"]} alt='github' /></a>
              <a href="#"><img src={images["Vector(2).svg"]} alt='linkedin' /></a>
            </div>
          </div>
          <div className="hero-right">
            <img src={images["santhosh.svg"]} alt="Santhosh D" />
          </div>
        </div>

      </header>
      {/* About me */}
      <div className='about-me'>
        <h2>PERSONALITY HIGHLIGHTS</h2>
        <p>Flexible with taking up extra tasks to be supportive of the project
          Have taken up complex issues involving major changes and deployed it
          on time and had opportunities to explore latest technologies and
          implement in the old projects and reduced the execution time.
          Can communicate and collaborate well with the team members
          Collaborated with team members in order to fix issues with the
          application and ensured application availability in crucial time.
        </p>
        {showMore && (
          <p>
            Analyzed component-level design and functional requirements, and developed clean, efficient,
            and reusable code to ensure high performance and application quality. Designed WCF services
            using JSON, created T-SQL database objects like views, functions, triggers, procedures, jobs,
            and indexes, and implemented application security. Investigated client-reported issues, provided
            effective fixes or enhancements, and prepared release notes and patch documentation for deployments.
          </p>
        )}

        <button className='btn-read-more' onClick={handleToggle}>
          {showMore ? 'READ LESS' : 'READ MORE'}
        </button>
      </div>
      {/* portfolio */}
      <div className='portfolio'>
        <div className='portfolio-header'>
          <button className='btn-about-me' >ABOUT ME</button>
        </div>
        <div className='portfolio-content'>
          <p>
            Qualified M.Sc. in Computer Science, working as Software Developer at
            CMOTS Internet Technologies Private Ltd, India with 2.5years of
            experience
            having hands-on experience in C#, HTML, JavaScript and other relevant
            skills, looking forward to work in challenging
            assignments involving continuous learning across IT industry.
          </p>
          {explore && (
            <p className='portfolio-content'>

              CRM as a web application helps businesses manage vital tasks like leads, contacts, organizations, partners, vendors, and suppliers.

              BMS as a web application provides a systematic process to manage and accurately track incoming leads.

              IFA Transact provides a user-friendly platform to manage customers' mutual fund portfolios. It includes back-office tools to generate new client leads, onboard sub-brokers, and automate holdings data for tracking customer transactions.

              I also know how to host and deploy these web applications.
            </p>
          )}
          <div className='portfolio-btn'>
            <button className='btn-explore' onClick={handle2Toggle}>EXPLORE</button>
          </div>
        </div>
        <div className='portfolio-image'>
          <img src={images["separatorBlack.svg"]} alt="Portfolio" className='portfolio-image' />
        </div>
      </div>
    </div>
  );
}

export default App;
