import images from './images.js';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
