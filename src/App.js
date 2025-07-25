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
      </header>
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

        <div className='work-categories'>
          <section class="services-section">
            <div class="service-box">
              <div class="icon"><img src={images["Design.svg"]} alt='design' /></div>
              <h3>DESIGN</h3>
              <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>
            <div class="service-box">
              <div class="icon"><img src={images["Tools.svg"]} alt='tools' /></div>
              <h3>DEVELOPMENT</h3>
              <p>I build websites tailored to your needs, from scratch or based on your ideas, and keep you updated throughout the process.</p>
            </div>
            <div class="service-box">
              <div class="icon"><img src={images["Computer Support.svg"]} alt='ComputerSupport' /></div>
              <h3>MAINTENANCE</h3>
              <p>I ensure your website stays updated, secure, and running smoothly with ongoing support.</p>
            </div>
          </section>
          <div className='portfolio-image'>
            <img src={images["separatorBlack.svg"]} alt="Portfolio" className='portfolio-image' />
          </div>
        </div>
        <div className='skills'>
          <div className='portfolio-header'>
            <button className='btn-about-me' >SKILLS</button>
          </div>
        </div>
        {/* frt */}
        <div className="skills-section">
          <div className="skills-heading">
            <h3>TOOLS &<br />TECHNOLOGIES:</h3>
          </div>
          <div className="skills-content">
            <div className="skill-box">
              <img src={images["Git.svg"]} alt="Git" />
              <p>GIT</p>
            </div>
            <div className="skill-box">
              <img src={images["GitHub.svg"]} alt="GitHub" />
              <p>GITHUB</p>
            </div>
            <div className="skill-box">
              <img src={images["postman 1.svg"]} alt="Postman" />
              <p>POSTMAN</p>
            </div>
            <div className="skill-box">
              <img src={images["swagger 1.svg"]} alt="Swagger" />
              <p>SWAGGER</p>
            </div>
            <div className="skill-box">
              <img src={images["figma.svg"]} alt="Figma" />
              <p>FIGMA</p>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="skills-section">
          <div className="skills-heading">
            <h3>WEB <br />TECHNOLOGIES:</h3>
          </div>
          <div className="skills-content">
            <div className="skill-box">
              <img src={images["html.svg"]} alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="skill-box">
              <img src={images["css.svg"]} alt="CSS" />
              <p>CSS</p>
            </div>
            <div className="skill-box">
              <img src={images["bootstrap-solid.svg"]} alt="BOOTSTRAP" />
              <p>BOOTSTRAP</p>
            </div>
            <div className="skill-box">
              <img src={images["js.svg"]} alt="JAVASCRIPT" />
              <p>JAVASCRIPT</p>
            </div>
            <div className="skill-box">
              <img src={images["jqry.svg"]} alt="JQ" />
              <p>JQUERY</p>
            </div>
            <div className="skill-box">
              <img src={images["Json.svg"]} alt="JSON" />
              <p>JSON</p>
            </div>
            <div className="skill-box">
              <img src={images["RJS.svg"]} alt="REACTJS" />
              <p>REACTJS</p>
            </div>
          </div>
        </div>
        {/* thrid */}
        <div className="skills-section">
          <div className="skills-heading">
            <h3>DB <br />TECHNOLOGIES:</h3>
          </div>
          <div className="skills-content-third">
            <div className="skill-box">
              <img src={images["sql.svg"]} alt="sql" />
              <p>SQL</p>
            </div>
            <div className="skill-box">
              <img src={images["sqlserver.svg"]} alt="sqlserver" />
              <p>SQLSERVER</p>
            </div>
            <div className="skill-box">
              <img src={images["ocl.svg"]} alt="oracle" />
              <p> ORACLE</p>
            </div>
          </div>
        </div>
        {/* four */}
        <div className="skills-section">
          <div className="skills-heading">
            <h3>PROGRAMMING <br />LANGUAGES:</h3>
          </div>
          <div className="skills-content-third">
            <div className="skill-box">
              <img src={images["C.svg"]} alt="C#" />
              <p>C#</p>
            </div>
            <div className="skill-box">
              <img src={images["java.svg"]} alt="java" />
              <p>SQLSERVER</p>
            </div>
          </div>
        </div>
        <div className='portfolio-header'>
          <div>
          <button className='btn-about-me'>CONTACT</button>
          </div>          
        </div>
        <div className='portfolio-content'>
            <p>
              Feel free to reach out with any questions or project inquiries.
            </p>
          </div>
      </div>
      <footer className="App-footer">
        <div className="footer-content"> 
          <img src={images["footer.svg"]} alt='foolter' className='footer-logo' />
          <p className='footer-h4'>BACK TO HOME</p>        
          <div className="social-icons-footer">
            <a href="#"><img src={images["Vector(7).svg"]} alt='facebook' /></a>
            <a href="#"><img src={images["Vector(8).svg"]} alt='linkedin' /></a>
            <a href="#"><img src={images["Vector(9).svg"]} alt='instagram' /></a>
            <a href="#"><img src={images["Vector(10).svg"]} alt='email' /></a>
          </div>
           <p>@2025 SAN Creation All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
