import React from "react";
import logoImg from '../assets/IMG/logo.png';
import userImg from '../assets/IMG/user.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-0 py-3 border-b border-gray-200 text-sm whitespace-nowrap overflow-x-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 min-w-[120px] pl-6">
        <img src={logoImg} alt="Logo" className="h-8 w-8 object-contain" />
        <span className="font-bold text-green-700 text-sm tracking-wide">DNK SUPER</span>
      </div>
      {/* Search Bar */}
      <div className="flex items-center flex-1 max-w-xs mx-2 min-w-[80px]">
        <div className="flex items-center bg-gray-100 rounded-l-full px-3 py-1 w-full border border-gray-200">
          <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <input type="text" placeholder="Search Product" className="bg-transparent outline-none w-full text-gray-700 text-sm" />
        </div>
        <button className="bg-green-500 text-white font-bold px-5 py-1 rounded-r-full text-sm border border-l-0 border-green-500">Search</button>
      </div>
      {/* Nav Links */}
      <ul className="flex items-center gap-4 ml-2 text-sm font-medium">
        <NavLink to="/" className="font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">Home</NavLink>
        <li className="text-gray-700 hover:text-green-600 cursor-pointer flex items-center">All Categories <span className="ml-1">▼</span></li>
        <NavLink to="/about" className="text-gray-700 hover:text-green-600 cursor-pointer">About Us</NavLink>
        <NavLink to="/contact" className="text-gray-700 hover:text-green-600 cursor-pointer">Contact Us</NavLink>
        <li className="text-gray-700 hover:text-green-600 cursor-pointer">Track Order</li>
      </ul>
      {/* Icons & User */}
      <div className="flex items-center gap-6 ml-4 min-w-[200px] justify-end pr-6">
        <div className="flex gap-4 text-xl items-center">
          {/* Cart Icon */}
          <span className="relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
          </span>
          {/* Heart Icon */}
          <span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
          </span>
        </div>
        {/* User Info */}
        <div className="flex items-center gap-2">
          <img src={userImg} alt="User" className="h-8 w-8 rounded-full object-cover border border-gray-300" />
          <div className="text-right leading-tight">
            <div className="text-xs text-gray-500">Welcome</div>
            <div className="font-semibold text-gray-800 text-sm">Lahiru Ravihansa</div>
          </div>
          <span className="ml-1 text-base">▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
