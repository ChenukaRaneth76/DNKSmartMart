import React, { useState, useEffect } from 'react';
import groceryGirlWebp from '../assets/IMG/grocery-girl.webp';

const HERO_TEXT = 'Make Health Life With Fresh Grocery';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(HERO_TEXT.slice(0, i + 1));
      i++;
      if (i === HERO_TEXT.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-0 md:px-0 py-16 bg-white border-b border-gray-200 overflow-x-hidden relative">
      {/* Left: Text Content */}
      <div className="flex-1 max-w-xl md:pl-20 pl-6 z-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 animate-hero-gradient">
          {displayedText}
          <span className="typewriter-cursor">|</span>
        </h1>
        <p className="text-gray-700 text-lg mb-8 max-w-md">
          Discover fresh produce, daily essentials, and exclusive deals — delivered straight to your doorstep with care.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-full text-lg shadow transition-all">
          Shop Now
        </button>
      </div>
      {/* Right: Image & Shape */}
      <div className="flex-1 flex items-end justify-end relative min-w-[400px] md:min-w-[600px] h-[420px] md:h-[520px]">
        {/* True oval/ellipse green platform */}
        <div className="absolute right-10 bottom-6 w-[420px] h-[90px] bg-green-400 rounded-full -z-10 opacity-90"></div>
        {/* Grocery Girl Image with webp fallback */}
        <picture>
          <source srcSet={groceryGirlWebp} type="image/webp" />
          <img src={groceryGirlWebp} alt="Grocery Girl" width="400" height="560" className="h-[480px] md:h-[560px] object-contain z-10 drop-shadow-2xl absolute right-10 bottom-0" style={{maxHeight:'100%', maxWidth:'100%', width:'auto'}} />
        </picture>
      </div>
      <style>{`
        .animate-hero-gradient {
          background: linear-gradient(90deg, #22c55e, #16a34a, #22d3ee, #22c55e);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: heroGradientMove 3s ease-in-out infinite alternate;
        }
        @keyframes heroGradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .typewriter-cursor {
          display: inline-block;
          width: 1ch;
          color: #22c55e;
          animation: blink 1s steps(1) infinite;
          font-weight: bold;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 