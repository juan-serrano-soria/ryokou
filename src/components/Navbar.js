import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

import './Navbar.css';
import '../App.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 760) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMenu}>
            <img className='ryokou-navbar-logo' src='/images/ryokou-logo-dark.png' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' link='sign-up'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
