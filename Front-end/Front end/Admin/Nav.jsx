import { useState } from 'react';
import '../assets/css/NavBarcss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importing the user icon
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
    <nav className={`navbar ${isOpen ? 'open' : ''}`} style={{marginTop:'0'}}>
      <img src="https://res.cloudinary.com/dbhfpccxj/image/upload/v1708890030/logo_fcam9q.png" alt="Colorful Wall" style={{width:'100px',height:'100px',marginLeft:'25px'}}/>
      <div className="nav-profile">
        <ul className="nav-links">
        <button onClick={handleLogout}
          style={{border:'none',marginRight:'50px',color:'black',fontWeight:'bold'}}>Logout</button>
          
          <div className="profile" style={{marginRight:'50px'}}>
          <Link to='/adminprofile' style={{color:'#26867e',textDecoration:'none'}}>
          <span style={{marginRight:'10px'}}>Profile</span>
          
          <FontAwesomeIcon icon={faUser} style={{color:'#26867e'}}/>
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
