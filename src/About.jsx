import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ownerImg from './assets/IMG/owner.jpg';
import happyCustomersImg from './assets/IMG/user-group.jpg'; // Group of happy customers
import deliveryGuyImg from './assets/IMG/delivery-guy.png'; // Delivery guy with groceries
import user1Img from './assets/IMG/user1.png';
import user2Img from './assets/IMG/user2.png';
import user3Img from './assets/IMG/user3.png';

const features = [
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16a4 4 0 0 1-4-4V8a4 4 0 0 1 8 0v4a4 4 0 0 1-4 4z"/></svg>
    ),
    title: 'User Security',
    desc: 'Your data and privacy are protected with industry-leading security measures.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Zm-1-13h2v6h-2Zm0 8h2v2h-2Z"/></svg>
    ),
    title: 'AI-powered Product Suggestion',
    desc: 'Get personalized recommendations powered by advanced AI for a smarter shopping experience.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: 'Real-time Tracking',
    desc: 'Track your orders and stock availability in real time, every step of the way.'
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-7.5 7.5A8.38 8.38 0 0 1 3 10.5c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5z"/><circle cx="12" cy="10.5" r="2.5"/></svg>
    ),
    title: 'Contact Availability',
    desc: 'Reach us anytime via email or phone. We are here to help you 24/7.'
  },
];

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
    text: 'The best supermarket experience I have ever had. Highly recommended!'
  },
];

const StyledFeatureCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-width: 190px;
  max-width: 260px;
  height: 254px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
  margin: 0 auto;
  &:hover {
    border: 1px solid black;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full min-h-[520px] bg-gradient-to-br from-gray-900 via-green-900 to-green-700 flex flex-col md:flex-row items-center justify-between px-8 py-20 relative overflow-hidden">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col justify-center z-10 max-w-2xl pr-8 md:pr-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/20">Food Deliver Service & Supermarket</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2 animate-fade-in drop-shadow-lg leading-tight">
             About Us
            </h1>
            <h2 className="text-2xl md:text-3xl text-green-100 font-medium mb-8 animate-fade-in delay-100 whitespace-nowrap">Enjoy healthy life.</h2>
            <div className="flex items-center gap-4 mb-8 animate-slide-up">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-full text-lg shadow transition">Shop Now</button>
            </div>
            <div className="flex items-center gap-4 mb-8 animate-fade-in delay-200">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-2xl shadow gap-3">
                <img src={happyCustomersImg} alt="Happy Customers" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                <div>
                  <div className="text-yellow-400 font-bold flex items-center gap-1">★ 4.5 <span className="text-xs text-green-100">(12.5k Review)</span></div>
                  <div className="text-green-100 text-xs whitespace-nowrap">Our Happy Customer</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 animate-fade-in delay-300">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-lg">
                {/* Delivery van icon */}
                <svg width="40" height="40" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="7" width="15" height="13" rx="2"/><path d="M16 16h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2"/><circle cx="5.5" cy="19.5" r="1.5"/><circle cx="18.5" cy="19.5" r="1.5"/></svg>
              </span>
              <span className="text-white font-semibold text-xl whitespace-nowrap">Fast & Safe Delivery</span>
            </div>
          </div>
          {/* Right: Delivery Guy Image */}
          <div className="flex-1 flex items-center justify-end z-10 mt-10 md:mt-0">
            <img src={deliveryGuyImg} alt="Delivery Guy" className="w-[900px] max-w-none h-auto object-contain drop-shadow-2xl animate-slide-in-right" />
          </div>
          {/* Decorative shapes */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-green-800 opacity-20 rounded-bl-full pointer-events-none z-0"></div>
          <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-green-400 opacity-10 rounded-tr-full pointer-events-none z-0"></div>
        </section>

        {/* Owner's Message Section */}
        <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center md:items-stretch gap-8 animate-fade-in">
          {/* Left: Owner Image, no background */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto md:pl-0 md:-ml-12 animate-slide-in-left">
            <img src={ownerImg} alt="Owner" className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-green-200 shadow-lg" style={{background:'none'}} />
          </div>
          {/* Right: Owner Message Card */}
          <div className="flex-1 bg-white rounded-3xl shadow-2xl p-10 flex flex-col justify-center text-left relative overflow-hidden animate-slide-in-right">
            <h3 className="text-2xl font-bold text-green-700 mb-2">A Message from Our Founder</h3>
            <p className="text-gray-700 mb-2 italic text-lg">“At DNK Supermarket, our mission is to make your grocery shopping experience seamless, secure, and enjoyable. We believe in harnessing technology to bring you the best products and services, while always putting your needs first. Thank you for trusting us!”</p>
            <div className="text-green-600 font-semibold mt-2" style={{fontFamily:'Dancing Script, cursive', fontSize:'1.2rem'}}>Kaveesha Randunu, Founder & CEO</div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-green-100 rounded-full opacity-30 z-0"></div>
          </div>
        </section>

        {/* Our Features Section */}
        <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative">
          <h2 className="col-span-full text-3xl md:text-4xl font-extrabold text-green-800 mb-10 text-center animate-fade-in">Our Features</h2>
          {features.map((f, i) => (
            <StyledFeatureCard key={f.title} className="animate-slide-up" style={{animationDelay: `${i * 120}ms`}}>
              <span className="text-green-500 text-5xl mb-6">{f.icon}</span>
              <div className="font-bold mb-3 text-xl">{f.title}</div>
              <div className="text-gray-600 text-base font-normal" style={{color:'#222'}}>{f.desc}</div>
            </StyledFeatureCard>
          ))}
          {/* Decorative background shape */}
          <div className="hidden md:block absolute -right-24 -bottom-24 w-96 h-96 bg-green-100 rounded-full opacity-40 z-0"></div>
        </section>

        {/* Customer Feedback Section */}
        <section className="relative w-full py-16 bg-white overflow-hidden mb-16">
          <span className="absolute left-1/2 top-6 -translate-x-1/2 text-[64px] md:text-[90px] font-extrabold text-green-200 opacity-30 select-none pointer-events-none z-0" style={{fontFamily:"'Poppins', sans-serif"}}>Feedback</span>
          <h2 className="text-3xl font-extrabold text-center mb-12 z-20 relative">What Our Customers Say</h2>
          <div className="relative z-20 flex flex-col md:flex-row gap-8 justify-center items-stretch px-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={t.name} className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center min-w-[320px] max-w-[370px] flex-1 animate-slide-up" style={{animationDelay: `${i * 120}ms`}}>
                <div className="flex gap-1 mb-2">
                  <span className="text-yellow-400 text-lg">★</span><span className="text-yellow-400 text-lg">★</span><span className="text-yellow-400 text-lg">★</span><span className="text-yellow-400 text-lg">★</span><span className="text-yellow-400 text-lg">★</span>
                </div>
                <div className="text-gray-700 text-center mb-8">{t.text}</div>
                <div className="flex items-center gap-3 mt-auto">
                  <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover border-2 border-white shadow" />
                  <span className="text-sm font-semibold text-gray-700">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        .animate-fade-in-slow { animation: fadeIn 2s ease; }
        .animate-slide-up { animation: slideUp 0.8s cubic-bezier(.4,2,.6,1) both; }
        .animate-slide-in-right { animation: slideInRight 1.2s cubic-bezier(.4,2,.6,1) both; }
        .animate-slide-in-left { animation: slideInLeft 1.2s cubic-bezier(.4,2,.6,1) both; }
        .animate-bounce-in { animation: bounceIn 1.1s cubic-bezier(.4,2,.6,1) both; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(120px);} to { opacity: 1; transform: none; } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-120px);} to { opacity: 1; transform: none; } }
        @keyframes bounceIn { 0% { opacity: 0; transform: scale(0.7);} 60% { opacity: 1; transform: scale(1.1);} 100% { opacity: 1; transform: scale(1);} }
      `}</style>
    </div>
  );
};

export default About; 