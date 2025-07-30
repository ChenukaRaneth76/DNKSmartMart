import React from 'react';
import newsletterGirlImg from '../assets/IMG/newsletter-girl.webp';

const Newsletter = () => (
  <section className="relative flex flex-col items-center justify-center py-0 mb-0 mt-10">
    {/* Newsletter girl image above the box, no background */}
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center" style={{zIndex:2}}>
      <img src={newsletterGirlImg} alt="Newsletter Girl" width="240" height="240" className="relative z-20 w-60 h-60 object-contain mb-[-32px]" style={{borderRadius:'1.5rem', boxShadow:'0 8px 32px 0 rgba(0,0,0,0.18)'}} />
    </div>
    {/* Green rounded box with faded Newsletter text, more gap from image */}
    <div className="relative w-full max-w-3xl mx-auto bg-green-600 rounded-2xl pt-16 pb-10 px-8 flex flex-col items-center shadow-xl mt-0" style={{zIndex:1}}>
      {/* Faded Newsletter text */}
      <span className="absolute left-1/2 top-6 -translate-x-1/2 text-[48px] md:text-[80px] font-extrabold text-green-200 opacity-30 select-none pointer-events-none z-0" style={{fontFamily:'Poppins, sans-serif', letterSpacing:'2px'}}>Newsletter</span>
      <div className="relative z-20 flex flex-col items-center w-full mt-4">
        <h3 className="text-white text-2xl font-semibold mb-6 mt-12 relative z-20">Get Subscribe Our Newsletter</h3>
        <form className="flex w-full max-w-lg mx-auto mt-0">
          <input type="email" placeholder="Your Email Address" className="flex-1 px-6 py-3 rounded-l-full outline-none text-gray-700 text-base bg-white" />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-r-full flex items-center justify-center text-xl" type="submit" style={{marginLeft:'-2px'}}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="10 8 16 12 10 16"/><line x1="16" y1="12" x2="8" y2="12"/></svg>
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Newsletter; 