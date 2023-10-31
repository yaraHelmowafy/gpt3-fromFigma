import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg';
// BEM --> Block Element Modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="chatAI__navbar">
      <div className="chatAI__navbar-links">
        <div className="chatAI__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="chatAI__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wchatAI">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="chatAI__navbar-sign">
        <p>Sign in</p>
      {/* for mobile */}
        <button type="button">Sign up</button>
      </div>
      <div className="chatAI__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="chatAI__navbar-menu_container scale-up-center">
          <div className="chatAI__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wchatAI">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="chatAI__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar
