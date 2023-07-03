import React from 'react'

import  { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className="header">
      <div className="logo"><img src="data:image/png;base64,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" height={50} alt=""/></div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#Albums">All Albums</a></li>
          <li><Link to={"/News"}>News</Link></li>
          <li><Link to={"/About"}>About Amr</Link></li>
        </ul>
      </nav>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </header>
    </>
  );
 
};

export default Header;


