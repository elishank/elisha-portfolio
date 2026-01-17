'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>//home</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>//projects</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>//contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
