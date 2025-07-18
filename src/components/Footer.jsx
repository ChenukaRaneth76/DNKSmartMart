import React from 'react';
import logoImg from '../assets/IMG/logo.png';
import facebookImg from '../assets/IMG/facebook.png';
import tiktokImg from '../assets/IMG/tiktok.png';
import linkedinImg from '../assets/IMG/linkedin.png';
import instagramImg from '../assets/IMG/instagram.png';

const Footer = () => (
  <footer className="relative w-full bg-green-600 pt-32 pb-10 mt-[-60px] rounded-t-3xl z-0">
    <div className="max-w-6xl mx-auto flex flex-col items-center">
      {/* Logo and description */}
      <div className="flex flex-col items-center mb-6">
        <span className="flex items-center justify-center bg-white rounded-full p-3 mb-2" style={{width:'60px',height:'60px'}}>
          <img src={logoImg} alt="Logo" className="h-10 w-10 object-contain" />
        </span>
        <span className="font-bold text-white text-lg mb-2">DNK SUPER</span>
        <div className="text-green-100 text-center text-sm max-w-md mb-4">Discover fresh produce, daily essentials, and exclusive deals — delivered straight to your doorstep with care.</div>
        {/* Social icons */}
        <div className="flex gap-4 mt-2 mb-2">
          <img src={tiktokImg} alt="TikTok" className="h-8 w-8 object-contain" />
          <img src={instagramImg} alt="Instagram" className="h-8 w-8 object-contain" />
          <img src={facebookImg} alt="Facebook" className="h-8 w-8 object-contain" />
          <img src={linkedinImg} alt="LinkedIn" className="h-8 w-8 object-contain" />
        </div>
      </div>
      {/* Divider */}
      <div className="w-full border-t border-yellow-300 my-6"></div>
      {/* Footer columns */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* Help Information */}
        <div className="flex-1 min-w-[180px]">
          <div className="font-semibold text-white mb-2">Help Information</div>
          <div className="flex items-center text-green-100 text-sm mb-2"><span className="mr-2">🏠</span>544/1 Demel Rd Piliyandala</div>
          <div className="flex items-center text-green-100 text-sm mb-2"><span className="mr-2">📞</span>0112566544</div>
          <div className="flex items-center text-green-100 text-sm"><span className="mr-2">✉️</span>DNKSUPER@gmail.com</div>
        </div>
        {/* Information */}
        <div className="flex-1 min-w-[180px]">
          <div className="font-semibold text-white mb-2">Information</div>
          <div className="text-green-100 text-sm mb-2">Privacy Policy</div>
          <div className="text-green-100 text-sm mb-2">Contact</div>
          <div className="text-green-100 text-sm mb-2">About Us</div>
          <div className="text-green-100 text-sm">Terms & Conditions</div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[180px]">
          <div className="font-semibold text-white mb-2">Quick Links</div>
          <div className="text-green-100 text-sm mb-2">Home</div>
          <div className="text-green-100 text-sm mb-2">Contact</div>
          <div className="text-green-100 text-sm mb-2">About Us</div>
          <div className="text-green-100 text-sm">Track Order</div>
        </div>
        {/* My Account */}
        <div className="flex-1 min-w-[180px]">
          <div className="font-semibold text-white mb-2">My Account</div>
          <div className="text-green-100 text-sm mb-2">My Account</div>
          <div className="text-green-100 text-sm mb-2">Cart</div>
          <div className="text-green-100 text-sm">Shopping History</div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 