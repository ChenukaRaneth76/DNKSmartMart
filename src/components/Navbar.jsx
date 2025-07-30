import React, { useState, useRef, useEffect } from 'react';
import logoImg from '../assets/IMG/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart } from "lucide-react"; // Optional: modern icon set
import organicImg from '../assets/IMG/organic.webp';
import vegetablesImg from '../assets/IMG/vegetables.webp';
import meatImg from '../assets/IMG/meat.webp';
import iceCreamImg from '../assets/IMG/ice-cream.webp';
import juiceImg from '../assets/IMG/juice.webp';
import funBiscuitsImg from '../assets/IMG/fun-biscuits.webp';
import beetrootImg from '../assets/IMG/beetroot.webp';
import mangoImg from '../assets/IMG/mango.webp';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

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

  // Get cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Listen for cart updates from other components
  useEffect(() => {
    const handleCartUpdate = () => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    };
    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (isAdminLogin) {
      // Admin login logic
      const ADMIN_CREDENTIALS = {
        email: 'admin@dnksuper.com',
        password: 'admin123'
      };

      if (credentials.email === ADMIN_CREDENTIALS.email && 
          credentials.password === ADMIN_CREDENTIALS.password) {
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUser', JSON.stringify({
          email: credentials.email,
          username: credentials.email.split('@')[0],
          loginTime: new Date().toISOString()
        }));
        setShowModal(false);
        setCredentials({ email: '', password: '' });
        setIsAdminLogin(false);
        // Redirect to admin dashboard
        window.location.href = '/admin/dashboard';
      } else {
        setError('Invalid admin credentials');
      }
    } else {
      // Customer login logic
      console.log('Customer login submitted');
      setShowModal(false);
      setCredentials({ email: '', password: '' });
    }
    
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const resetModal = () => {
    setShowModal(false);
    setIsSignup(false);
    setIsAdminLogin(false);
    setCredentials({ email: '', password: '' });
    setError('');
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className={`w-full bg-white shadow-sm sticky top-0 z-40 h-16 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2 min-w-[120px] pl-6">
            <img src={logoImg} alt="Logo" className="h-8 w-8 object-contain" width="32" height="32" />
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
            <NavLink to="/about" className="text-gray-700 hover:text-green-600 px-3 py-1 rounded-full">About Us</NavLink>
            <NavLink to="/contact" className="text-gray-700 hover:text-green-600 px-3 py-1 rounded-full">Contact</NavLink>
            <NavLink to="/track-order" className="text-gray-700 hover:text-green-600 px-3 py-1 rounded-full">Track Order</NavLink>
      </ul>

         {/* Cart and Login */}
<div className="flex items-center gap-4 ml-4">
  {/* Cart Icon */}
  <Link
    to="/cart"
    aria-label="View Cart"
    className="relative p-2 text-gray-700 hover:text-green-600 transition-colors group"
  >
    {/* Hover background effect */}
    <span className="absolute inset-0 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>

    {/* Cart Icon using Lucide React */}
    <ShoppingCart className="w-7 h-7 relative z-10" />

    {/* Cart Badge */}
    {cartItemCount > 0 && (
      <span className="absolute -top-2 -right-2 z-20 bg-red-500 text-white text-[10px] leading-none font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md border-2 border-white">
        {cartItemCount > 99 ? '99+' : cartItemCount}
          </span>
    )}
  </Link>

            {/* Login Button */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Login/Signup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {isAdminLogin ? 'Admin Login' : (isSignup ? 'Create Account' : 'Welcome Back')}
              </h2>
              <button
                onClick={resetModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignup && !isAdminLogin && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {isSignup && !isAdminLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Confirm your password"
                  />
                </div>
              )}
              
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  isAdminLogin 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  isAdminLogin ? 'Admin Sign In' : (isSignup ? 'Create Account' : 'Sign In')
                )}
              </button>
            </form>

            {!isAdminLogin && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setIsSignup(!isSignup)}
                  className="text-green-600 hover:text-green-700 text-sm"
                >
                  {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                </button>
              </div>
            )}

            {/* Admin Login Toggle */}
            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  setIsAdminLogin(!isAdminLogin);
                  setIsSignup(false);
                  setCredentials({ email: '', password: '' });
                  setError('');
                }}
                className={`text-sm ${isAdminLogin ? 'text-green-600 hover:text-green-700' : 'text-blue-600 hover:text-blue-700'}`}
              >
                {isAdminLogin ? 'Customer Login' : 'Admin Login'}
              </button>
            </div>

            {/* Demo Credentials for Admin */}
            {isAdminLogin && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-semibold text-blue-900 mb-1">Demo Admin Credentials:</h3>
                <div className="text-xs text-blue-700 space-y-1">
                  <p><strong>Email:</strong> admin@dnksuper.com</p>
                  <p><strong>Password:</strong> admin123</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
