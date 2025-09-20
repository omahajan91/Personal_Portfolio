import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/logos/om_logo-removebg-preview.png';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      const halfScreen = screenHeight * 0.5; // 50% of screen height
      
      // Calculate scroll progress (0 to 1) based on 50% of screen height
      const progress = Math.min(scrollY / halfScreen, 1);
      
      setScrollProgress(progress);
      setIsScrolled(scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reusable component for Nav Links
  const NavItem = ({ to, children }) => {
    // Calculate text color based on scroll progress with smooth transitions
    const getTextColor = (isActive) => {
      const baseOpacity = isActive ? 1 : 0.7;
      const hoverOpacity = 1;
      
      if (scrollProgress < 0.2) {
        // Early scroll: pure white
        return isActive 
          ? 'text-white transition-colors duration-300' 
          : 'text-white/70 group-hover:text-white group-focus:text-white transition-colors duration-300';
      } else if (scrollProgress < 0.8) {
        // Mid scroll: gradual transition from white to black
        // Calculate RGB values for smooth color interpolation
        const whiteToBlack = scrollProgress < 0.5 ? 0 : (scrollProgress - 0.5) / 0.3; // 0 to 1 between 50% and 80%
        const r = Math.round(255 - (255 * whiteToBlack));
        const g = Math.round(255 - (255 * whiteToBlack));
        const b = Math.round(255 - (255 * whiteToBlack));
        
        return isActive
          ? 'transition-colors duration-300'
          : 'group-hover:text-black group-focus:text-black transition-colors duration-300';
      } else {
        // Late scroll: pure black
        return isActive 
          ? 'text-black transition-colors duration-300' 
          : 'text-black/70 group-hover:text-black group-focus:text-black transition-colors duration-300';
      }
    };

    // Dynamic text color using inline styles for smooth RGB interpolation
    const getDynamicTextStyle = (isActive) => {
      if (scrollProgress >= 0.2 && scrollProgress < 0.8) {
        const progress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.6)); // 0 to 1 between 20% and 80%
        const colorValue = Math.round(255 - (255 * progress));
        const opacity = isActive ? 1 : 0.7;
        
        return {
          color: `rgba(${colorValue}, ${colorValue}, ${colorValue}, ${opacity})`
        };
      }
      return {};
    };

    return (
      <NavLink to={to}>
        {({ isActive }) => (
          <div className="relative group py-2 font-medium">
            <span 
              className={getTextColor(isActive)}
              style={getDynamicTextStyle(isActive)}
            >
              {children}
            </span>
            {/* Sliding underline effect with dynamic opacity */}
            <span
              className="absolute bottom-0 left-0 block h-0.5 transition-all duration-300 group-hover:w-full group-focus:w-full"
              style={{
                backgroundColor: `rgba(218, 197, 167, ${Math.max(0.6, scrollProgress)})`, // Ensure underline is visible
                width: isActive ? '100%' : '0%'
              }}
            ></span>
          </div>
        )}
      </NavLink>
    );
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(218, 197, 167, ${scrollProgress})`, // Brand yellow with dynamic opacity
        height: `${4 + (3 - 3 * scrollProgress)}rem`, // Smooth height transition from 7rem (28) to 4rem (16)
        boxShadow: scrollProgress > 0.3 ? `0 4px 6px -1px rgba(0, 0, 0, ${0.1 * scrollProgress})` : 'none' // Gradual shadow
      }}
      role="banner"
    >
      <div className="container mx-auto grid grid-cols-3 items-center h-full px-4 sm:px-6 lg:px-8">
        {/* Left Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-6 lg:space-x-20" role="navigation" aria-label="Primary navigation">
          <NavItem to="/">About me</NavItem>
          <NavItem to="/services">Services</NavItem>
        </nav>

        {/* Mobile menu button - you'll need to implement the mobile menu */}
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-start">
          <button 
            className="p-2 rounded-md transition-colors duration-300"
            style={{
              color: scrollProgress < 0.2 ? 'white' : 
                     scrollProgress < 0.8 ? `rgb(${255 - Math.round(255 * (scrollProgress - 0.2) / 0.6)}, ${255 - Math.round(255 * (scrollProgress - 0.2) / 0.6)}, ${255 - Math.round(255 * (scrollProgress - 0.2) / 0.6)})` : 
                     'black'
            }}
            aria-label="Open mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center">
          <NavLink to="/">
            <img
              src={logoImg}
              alt="Logo"
              className="w-auto transition-all duration-300"
              style={{
                height: `${2.5 + (1.5 - 1.5 * scrollProgress)}rem` // Smooth logo size transition from 4rem to 2.5rem
              }}
            />
          </NavLink>
        </div>

        {/* Right Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-6 lg:space-x-20" role="navigation" aria-label="Secondary navigation">
          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        {/* Mobile menu button for right side (optional, or you can use one menu button) */}
        <div className="md:hidden flex justify-end">
          {/* You can add another menu button here or leave empty */}
        </div>
      </div>
    </header>
  );
};

export default Header;