import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
    });

    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (id) => {
    if (onNavClick) onNavClick();
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={() => handleLinkClick('home')}>
          &lt; Bharani<span>.dev</span> &gt;
        </a>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={activeSection === link.id ? 'active' : ''}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger Menu Icon */}
        <div
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={activeSection === link.id ? 'active' : ''}
            onClick={() => handleLinkClick(link.id)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
