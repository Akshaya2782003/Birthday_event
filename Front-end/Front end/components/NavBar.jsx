import { useState } from 'react';
import '../assets/css/NavBarcss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importing the user icon
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
      navigate('/');
      Cookies.remove();
  }

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <img src="https://res.cloudinary.com/dbhfpccxj/image/upload/v1709824014/partyworx_j23yg9.png" alt="Colorful Wall" style={{width:'70px',height:'70px',marginLeft:'30px'}}/>
      <div className="nav-profile">
        <ul className="nav-links">
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/nav'>Services</Link></li>
          <li><Link to='/package'>Package</Link></li>
          <li><Link to='/enquiry'>Contact</Link></li>
          <li><Link to='/meet'>Enquiry</Link></li>
          <button onClick={handleLogout}
          style={{border:'none',marginRight:'50px',color:'black',fontWeight:'bold'}}>Logout</button>
          <div className="profile" style={{marginRight:'20px'}}>
          <Link to='/profile' color='#26867e'>
          <FontAwesomeIcon icon={faUser} color='#26867e'/>
          </Link>
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
