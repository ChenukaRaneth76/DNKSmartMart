import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import contactImg from './assets/IMG/contact.png'; // Add a suitable illustration to assets
import locationIcon from './assets/IMG/location.jpg'; // Add a location icon to assets

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-700 via-green-400 to-green-200 py-20 px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left relative overflow-hidden shadow-lg">
          <div className="flex-1 flex flex-col justify-center z-10 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in drop-shadow-lg">Contact Us</h1>
            <p className="text-2xl md:text-3xl text-green-100 font-medium mb-6 animate-fade-in delay-100">We'd love to hear from you! Reach out for any questions, feedback, or support.</p>
          </div>
          <div className="flex-1 flex items-center justify-center z-10 mt-10 md:mt-0">
            <img src={contactImg} alt="Contact" className="w-[340px] h-auto object-contain drop-shadow-2xl animate-slide-in-right" />
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-3xl mx-auto px-4 py-16 animate-fade-in">
          <div className="bg-white/70 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center relative overflow-hidden w-full backdrop-blur-md">
            <h2 className="text-2xl font-bold text-green-700 mb-6">Send Us a Message</h2>
            <form className="w-full flex flex-col gap-6">
              <input type="text" placeholder="Your Name" className="px-6 py-4 rounded-full border border-gray-200 focus:border-green-400 outline-none text-base bg-white/80" />
              <input type="email" placeholder="Your Email" className="px-6 py-4 rounded-full border border-gray-200 focus:border-green-400 outline-none text-base bg-white/80" />
              <textarea placeholder="Your Message" rows={4} className="px-6 py-4 rounded-2xl border border-gray-200 focus:border-green-400 outline-none text-base bg-white/80 resize-none" />
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full text-lg shadow transition mt-2">Send Message</button>
            </form>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
            <span className="text-green-600 text-3xl mb-2">📞</span>
            <div className="font-bold text-lg mb-1">Phone</div>
            <div className="text-gray-700">0112566544</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
            <span className="text-green-600 text-3xl mb-2">✉️</span>
            <div className="font-bold text-lg mb-1">Email</div>
            <div className="text-gray-700">DNKSUPER@gmail.com</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
            <span className="text-green-600 text-3xl mb-2">⏰</span>
            <div className="font-bold text-lg mb-1">Hours</div>
            <div className="text-gray-700">Mon-Sun: 7:00am - 10:00pm</div>
          </div>
        </section>

        {/* Store Location Section */}
        <section className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-2xl p-10">
            <div className="flex-shrink-0 flex flex-col items-center md:items-start">
              <img src={locationIcon} alt="Location" className="w-16 h-16 mb-4" />
              <div className="font-bold text-green-700 text-xl mb-2">Our Store Location</div>
              <div className="text-gray-700 mb-2">544/1 Demel Rd, Piliyandala</div>
              <div className="text-gray-500 text-sm">Colombo, Sri Lanka</div>
            </div>
            <div className="flex-1 w-full h-64 rounded-2xl overflow-hidden shadow-lg mt-8 md:mt-0">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps?q=544/1+Demel+Rd,+Piliyandala,+Sri+Lanka&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .animate-fade-in { animation: fadeIn 1s ease; }
        .animate-slide-in-right { animation: slideInRight 1.2s cubic-bezier(.4,2,.6,1) both; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(120px);} to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
};

export default Contact; 