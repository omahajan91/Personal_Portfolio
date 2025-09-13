// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // This function helps apply a different style to the link of the currently active page.
  const navLinkStyles = ({ isActive }) => 
    `text-sm font-medium transition hover:text-black ${isActive ? 'text-black' : 'text-black/70'}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-[--color-brand-yellow]">
      <div className="container mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        
        {/* Left Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkStyles}>About me</NavLink>
          <NavLink to="/services" className={navLinkStyles}>Services</NavLink>
        </nav>

        {/* Center Logo */}
        <div className="flex-1 text-center md:flex-none">
           <NavLink to="/" className="text-3xl font-bold text-black tracking-wide">
              Drake <sup className="text-xs font-semibold">®</sup>
           </NavLink>
        </div>

        {/* Right Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/portfolio" className={navLinkStyles}>Portfolio</NavLink>
          <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
        </nav>

        {/* Note: A mobile menu would typically be added here for smaller screens */}
      </div>
    </header>
  );
};

export default Header;