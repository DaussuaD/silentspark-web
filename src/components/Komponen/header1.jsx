import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import '../../assets/css/style.css';

const Header1 = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const handleClick = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
    navigate('/loginguru');
  };

  return (
    <div>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <img src={logo} className="logo-img" alt="logo" />
          <h5 className="logo me-auto" onClick={(event) => handleClick(event, '/')}>Silent Spark</h5>
          <nav id="navbar" className="navbar">
            <ul>
              <li><NavLink className="nav-link scrollto" to="/homeguru">Home</NavLink></li>
              <li><NavLink className="nav-link scrollto" to="/tentangguru">About</NavLink></li>
              <li><NavLink className="nav-link scrollto" to="/berikankelas">Berikan Kelas</NavLink></li>
              {authenticated ? (
                <>
                  <li><NavLink className="nav-link scrollto" to="/userguru">Profile</NavLink></li>
                  <li><button className="nav-link scrollto getstarted" onClick={handleLogout}>Logout</button></li>
                </>
              ) : (
                <li><NavLink className="login getstarted scrollto" to="/loginguru">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg>Login
                </NavLink></li>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header1;

