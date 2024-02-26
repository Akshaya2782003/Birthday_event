import { useState } from 'react';
import '../assets/css/NavBarcss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importing the user icon
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <img src="https://res.cloudinary.com/dbhfpccxj/image/upload/v1708890030/logo_fcam9q.png" alt="Colorful Wall" style={{width:'50px',height:'50px'}}/>
      <div className="nav-profile">
        <ul className="nav-links">
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/nav'>Services</Link></li>
          <li><Link to='/package'>Package</Link></li>
          <li><a href="#">Contact</a></li>
          <div className="profile">
          <FontAwesomeIcon icon={faUser} /> {/* Using the user icon */}
            </div>
        </ul>
        
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;
