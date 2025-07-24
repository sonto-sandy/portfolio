import images from './images.js';
import './App.css';

function App() {
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
              <a href="#"><img src={images["Vector.svg"]}   alt='email'/></a>
              <a href="#"><img src={images["Vector(1).svg"]}   alt='github'/></a>
              <a href="#"><img src={images["Vector(2).svg"]}   alt='linkedin'/></a>
            </div>
          </div>
          <div className="hero-right">
            <img src={images["santhosh.svg"]} alt="Santhosh D" />
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
