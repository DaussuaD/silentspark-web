import React, {useEffect} from 'react'
import logo from '../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  useEffect(() => {
    const navbarlinksActive = () => {
      const navbarlinks = document.querySelectorAll('#navbar .scrollto');
      const position = window.scrollY + 200;
      
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return;
        const section = document.querySelector(navbarlink.hash);
        
        if (!section) return;
        
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    navbarlinksActive();

    const handleScroll = () => {
      navbarlinksActive();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#header');
      if (!header) return;
      
      const headerOffset = header.offsetTop;
      const nextElement = header.nextElementSibling;
      
      if ((headerOffset - window.scrollY) <= 0) {
        header.classList.add('fixed-top');
        if (nextElement) {
          nextElement.classList.add('scrolled-offset');
        }
      } else {
        header.classList.remove('fixed-top');
        if (nextElement) {
          nextElement.classList.remove('scrolled-offset');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate('/homepages');
    };

  

  return (
    <div>

    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <img src={logo} className="logo-img"/>
        <h5 className="logo me-auto" onClick={handleClick}>Silent Spark</h5>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#teacher">Teacher</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li><a className="login getstarted scrollto " href="/loginpages" ><svg xmlns="http://www.w3.org/2000/svg" 
              width="27 " height="27"  fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>Login</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
      
    </div>
  )
}

export default Header
