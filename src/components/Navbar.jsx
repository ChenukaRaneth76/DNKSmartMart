import React, { useState, useRef, useEffect } from 'react';
import logoImg from '../assets/IMG/logo.png';
import { NavLink } from 'react-router-dom';
import organicImg from '../assets/IMG/organic.jpg';
import vegetablesImg from '../assets/IMG/vegetables.jpg';
import meatImg from '../assets/IMG/meat.jpg';
import juiceImg from '../assets/IMG/juice.jpg';
import funBiscuitsImg from '../assets/IMG/fun-biscuits.jpg';
import mangoImg from '../assets/IMG/mango.jpg';
import beetrootImg from '../assets/IMG/beetroot.jpg';
import iceCreamImg from '../assets/IMG/ice-cream.jpg';

const categories = [
  { title: 'Fresh Organic Foods', img: organicImg },
  { title: 'Organic Vegetables', img: vegetablesImg },
  { title: 'Meat Collection', img: meatImg },
  { title: 'Dairy Products', img: juiceImg },
  { title: 'Bakery Items', img: funBiscuitsImg },
  { title: 'Fresh Fruits', img: mangoImg },
  { title: 'Snacks & Biscuits', img: beetrootImg },
  { title: 'Beverages', img: juiceImg },
  { title: 'Frozen Foods', img: iceCreamImg },
];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 40) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Add actual login/signup logic here
    console.log('Form submitted');
  };

  return (
    <>
      <nav className={`w-full bg-white shadow-sm sticky top-0 z-40 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2 min-w-[120px] pl-6">
            <img src={logoImg} alt="Logo" className="h-8 w-8 object-contain" />
            <span className="font-bold text-green-700 text-sm tracking-wide">DNK SUPER</span>
          </div>

          {/* Search Bar */}
          <div className="flex items-center flex-1 max-w-xs mx-2 min-w-[80px]">
            <div className="flex items-center bg-gray-100 rounded-l-full px-3 py-1 w-full border border-gray-200">
              <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input type="text" placeholder="Search Product" className="bg-transparent outline-none w-full text-gray-700 text-sm" />
            </div>
            <button className="bg-green-500 text-white font-bold px-5 py-1 rounded-r-full text-sm">Search</button>
          </div>

          {/* Nav Links */}
          <ul className="flex items-center gap-4 ml-2 text-sm font-medium">
            <NavLink to="/" className="font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">Home</NavLink>
            <li className="relative" ref={dropdownRef}>
              <NavLink to="/categories" className="text-gray-700 hover:text-green-600 flex items-center gap-1 px-3 py-1 rounded-full">
                All Categories
                <span className={`ml-1 inline-block transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </NavLink>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white shadow-2xl rounded-2xl py-3 px-2 z-50">
                  {categories.map((cat) => (
                    <div key={cat.title} className="flex items-center gap-3 px-3 py-2 hover:bg-green-100 cursor-pointer rounded-lg">
                      <img src={cat.img} alt={cat.title} className="w-10 h-10 rounded-full object-cover" />
                      <span className="font-medium text-gray-800 text-base">{cat.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <NavLink to="/about" className="text-gray-700 hover:text-green-600">About Us</NavLink>
            <NavLink to="/contact" className="text-gray-700 hover:text-green-600">Contact Us</NavLink>
            <li className="text-gray-700 hover:text-green-600 cursor-pointer">Track Order</li>
          </ul>

          {/* Icons & Login */}
          <div className="flex items-center gap-4">
            <button onClick={() => setShowModal(true)} className="bg-green-600 text-white px-6 py-2 rounded-full font-bold">Login</button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setShowModal(false)}>
          <div className="bg-white p-8 rounded-xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4 text-center">{isSignup ? 'Sign Up' : 'Log In'}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="email" placeholder="Email" className="border p-3 rounded" required />
              <input type="password" placeholder="Password" className="border p-3 rounded" required />
              {isSignup && (
                <input type="password" placeholder="Confirm Password" className="border p-3 rounded" required />
              )}
              <button type="submit" className="bg-green-600 text-white font-bold py-2 rounded">{isSignup ? 'Sign Up' : 'Log In'}</button>
            </form>
            <p className="text-center mt-4 text-sm text-gray-600">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button className="text-green-600 font-medium underline" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? 'Log In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
