import React from 'react';
import user1Img from '../assets/IMG/user1.webp';
import user2Img from '../assets/IMG/user2.webp';
import user3Img from '../assets/IMG/user3.webp';

const testimonials = [
  {
    img: user2Img,
    name: 'Pasindu Sathsara',
    text: 'Always fresh and clean! I love how the fruits and vegetables stay crisp even after delivery.'
  },
  {
    img: user1Img,
    name: 'Ashen Chamaluditha',
    text: 'Super fast delivery and great prices. This is my go-to place for all groceries!'
  },
  {
    img: user3Img,
    name: 'B.K.N Nirmal',
    text: 'Always fresh and clean! I love how the fruits and vegetables stay crisp even after delivery.'
  },
];

const Testimonials = () => (
  <section className="relative w-full py-16 bg-white overflow-hidden">
    {/* Green polygon/triangle background on the right */}
    <div className="hidden md:block absolute right-0 top-0 h-full w-[30vw] z-0" style={{clipPath:'polygon(30% 0, 100% 0, 100% 100%, 0 100%)', background:'#5BA150'}}></div>
    {/* Faded vertical Feedback text */}
    <span className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 text-[64px] font-extrabold text-green-200 opacity-30 select-none pointer-events-none z-10 rotate-90" style={{fontFamily:'inherit', letterSpacing:'2px'}}>Feedback</span>
    <h2 className="text-3xl font-extrabold text-left mb-12 z-20 relative px-8">What Our Customer Have To Say</h2>
    <div className="relative z-20 flex flex-col md:flex-row gap-8 justify-center items-stretch px-8 max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <div key={t.name} className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center min-w-[320px] max-w-[370px] flex-1">
          <div className="flex gap-1 mb-2">
            <span className="text-yellow-400 text-lg">★</span><span className="text-yellow-400 text-lg">★</span><span className="text-yellow-400 text-lg">★</span><span className="text-yellow-400 text-lg">★</span><span className="text-yellow-400 text-lg">★</span>
          </div>
          <div className="text-gray-700 text-center mb-8">{t.text}</div>
          <div className="flex items-center gap-3 mt-auto">
            <img src={t.img} alt={t.name} width="40" height="40" className="h-10 w-10 rounded-full object-cover border-2 border-white shadow" />
            <span className="text-sm font-semibold text-gray-700">{t.name}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 