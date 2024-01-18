// components/MobileMenu.js

import React from 'react';
import Logo from '../../../Logo';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={` fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transform transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="w-64 bg-white h-full p-4 shadow-lg">
      <div className=" ">
        <Logo />
      </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <button
        className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        onClick={toggleMenu}
      >
        Close
      </button>
    </div>
  );
};

export default MobileMenu;
