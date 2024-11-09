


// components/Navbar.tsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import "../css-files/navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle open state
  };

  return (
    <header className="navbar">
      <div className="container">
        <a className="brand">
          <span className="brand-text">PORTFOLIO</span>
        </a>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link href="/" className="nav-link text-pink-600">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/Project" className="nav-link">Projects</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
