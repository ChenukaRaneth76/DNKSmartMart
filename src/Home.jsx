import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import organicFoodsImg from './assets/IMG/organic-foods.webp';
import organicImg from './assets/IMG/organic.webp';
import vegetablesImg from './assets/IMG/vegetables.webp';
import meatImg from './assets/IMG/meat.webp';
import iceCreamImg from './assets/IMG/ice-cream.webp';
import watermelonImg from './assets/IMG/watermelon.webp';
import mangoImg from './assets/IMG/mango.webp';
import juiceImg from './assets/IMG/juice.webp';
import grapesImg from './assets/IMG/grapes.webp';
import BroccoliImg from './assets/IMG/Broccoli.webp';
import SauseImg from './assets/IMG/Sause.webp';
import funBiscuitsImg from './assets/IMG/fun-biscuits.webp';
import beetrootImg from './assets/IMG/beetroot.webp';
import user1Img from './assets/IMG/user1.webp';
import user2Img from './assets/IMG/user2.webp';
import user3Img from './assets/IMG/user3.webp';
import healthyHabitImg from './assets/IMG/healthy-habit.webp';
import newsletterGirlImg from './assets/IMG/newsletter-girl.webp';
import facebookImg from './assets/IMG/facebook.png';
import tiktokImg from './assets/IMG/tiktok.png';
import linkedinImg from './assets/IMG/linkedin.png';
import instagramImg from './assets/IMG/instagram.png';
import logoImg from './assets/IMG/logo.png';
import whatsappLogo from './assets/IMG/whatsapp.webp'; // Add a WhatsApp logo image to assets

const Footer = lazy(() => import('./components/Footer'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Newsletter = lazy(() => import('./components/Newsletter'));

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

const Home = () => {
  const [showFloatingIcons, setShowFloatingIcons] = useState(false);
  const [catIndex, setCatIndex] = useState(0);
  const cardsToShow = 3;

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingIcons(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    setCatIndex((prev) => Math.max(prev - cardsToShow, 0));
  };
  const handleNext = () => {
    setCatIndex((prev) => Math.min(prev + cardsToShow, categories.length - cardsToShow));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Top Categories - Slider */}
      <section className="relative w-full bg-white overflow-hidden" style={{minHeight:'420px'}}>
        {/* Green triangle background (bottom left, starts below heading) */}
        <div className="absolute left-0" style={{top:'90px', width:'44vw', height:'calc(100% - 90px)', clipPath:'polygon(0 100%, 0 0, 100% 100%)', background:'#5BA150'}}></div>
        {/* Basket image - larger and more prominent */}
        <img src={organicFoodsImg} alt="Basket" className="absolute left-0 bottom-0 z-10 w-[500px] h-auto object-contain" style={{maxHeight:'520px'}} width="500" height="520" />
        {/* Top row: title and arrows */}
        <div className="flex justify-between items-center pt-8 px-12 relative z-20">
          <h2 className="text-4xl font-extrabold text-black">Top Categories</h2>
          <div className="flex gap-4">
            <button onClick={handlePrev} disabled={catIndex === 0} className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow hover:bg-gray-100 transition ${catIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="10"/><polyline points="12 8 8 12 12 16"/><line x1="16" y1="12" x2="8" y2="12"/></svg>
            </button>
            <button onClick={handleNext} disabled={catIndex >= categories.length - cardsToShow} className={`w-10 h-10 flex items-center justify-center rounded-full bg-green-400 shadow hover:bg-green-500 transition ${catIndex >= categories.length - cardsToShow ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </button>
          </div>
        </div>
        {/* Category cards - slider */}
        <div className="overflow-hidden w-full relative z-20" style={{marginLeft:'420px', paddingRight:'48px', maxWidth: `${cardsToShow * 288 + 64}px`}}>
          <div className="flex transition-transform duration-500" style={{transform:`translateX(-${catIndex * 288}px)`}}>
            {categories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-2xl border border-gray-100 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center w-64 h-64 p-6 mx-4" style={{boxShadow:'0 8px 24px 0 rgba(90,130,80,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.10)'}}>
                <span className="font-semibold mb-4">{cat.title}</span>
                <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 mb-4 border-4 border-white shadow-lg">
                  <img src={cat.img} alt={cat.title} className="object-cover w-full h-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Deals */}
      <section className="relative w-full flex justify-center items-center py-16" style={{minHeight:'520px'}}>
        {/* Faded background text */}
        <span className="absolute left-4 top-2 text-[64px] md:text-[90px] font-extrabold text-gray-200 opacity-40 select-none pointer-events-none z-0" style={{fontFamily:"'Poppins', sans-serif"}}>Discounts</span>
        {/* Section title */}
        <div className="absolute left-16 top-10 z-20">
          <h2 className="text-4xl font-extrabold text-gray-900">Best Deals</h2>
        </div>
        <div className="relative z-10 w-full max-w-6xl grid grid-cols-2 grid-rows-2 gap-10 mt-24" style={{height:'420px'}}>
          {/* Green card: left, spans both rows */}
          <div className="row-span-2 col-span-1 bg-green-100 rounded-3xl shadow-2xl p-12 flex flex-col justify-between relative overflow-hidden min-h-[400px] min-w-[370px] max-w-[480px] hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
            <div>
              <div className="text-2xl font-semibold text-gray-700 mb-1">-Flat Sale <span className="text-green-500 font-bold">50%</span></div>
              <div className="text-5xl font-extrabold text-black mb-2">Cashback</div>
              <div className="text-xl text-gray-700 mb-1">Offer Starts From</div>
              <div className="text-2xl font-semibold text-green-600 mb-6">Rs.2000.00</div>
              <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow hover:bg-green-700 transition">Shop Now</button>
            </div>
            <img src={BroccoliImg} alt="Broccoli" className="absolute right-6 bottom-6 w-56 h-44 object-contain select-none pointer-events-none" style={{zIndex:1}} />
          </div>
          {/* Pink card: top right */}
          <div className="row-span-1 col-span-1 bg-pink-100 rounded-3xl shadow-2xl p-10 flex flex-col justify-between relative overflow-hidden min-h-[200px] min-w-[420px] max-w-[600px] hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
            <div className="pb-8">
              <div className="text-3xl font-extrabold text-black mb-1">Salsa Sauce</div>
              <div className="text-lg text-gray-700 mb-1">Offer Starts From</div>
              <div className="text-xl font-semibold text-pink-500 mb-4">Rs.500.00</div>
              <button className="bg-pink-500 text-white px-7 py-2 rounded-full text-base font-bold shadow hover:bg-pink-600 transition">Shop Now</button>
            </div>
            <img src={SauseImg} alt="Salsa Sauce" className="absolute right-6 bottom-2 w-32 h-40 object-contain select-none pointer-events-none" style={{zIndex:1}} />
          </div>
          {/* Purple card: bottom right */}
          <div className="row-span-1 col-span-1 bg-purple-200 rounded-3xl shadow-2xl p-10 flex flex-col justify-between relative overflow-hidden min-h-[190px] min-w-[420px] max-w-[600px] hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
            <div>
              <div className="text-3xl font-extrabold text-black mb-1">Fresh Fruits</div>
              <div className="text-lg text-gray-700 mb-1">Up To <span className="text-purple-600 font-bold">25% Off</span></div>
              <button className="bg-purple-600 text-white px-7 py-2 rounded-full text-base font-bold shadow hover:bg-purple-700 transition mt-2">Shop Now</button>
            </div>
            <img src={grapesImg} alt="Fresh Fruits" className="absolute right-6 bottom-6 w-40 h-24 object-contain select-none pointer-events-none" style={{zIndex:1}} />
          </div>
        </div>
      </section>

      {/* New Arrival Products */}
      <section className="relative w-full py-16 bg-white">
        {/* Faded background text */}
        <span className="absolute left-1/2 top-6 -translate-x-1/2 text-[64px] md:text-[90px] font-extrabold text-gray-200 opacity-40 select-none pointer-events-none z-0" style={{fontFamily:"'Poppins', sans-serif"}}>Products</span>
        <h2 className="text-4xl font-extrabold text-center mb-12 z-10 relative">New Arrival Products</h2>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <Link to="/product" className="block">
            <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center relative min-h-[320px]">
              {/* Badge and Cart */}
              <span className="absolute left-4 top-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">20%</span>
              <span className="absolute right-4 top-4 text-green-500 cursor-pointer">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
              </span>
              <img src={iceCreamImg} alt="Imorich I/C Choc Choc Chip 1L" loading="lazy" className="h-24 object-contain my-4" />
              <div className="font-semibold text-center mt-2">Imorich I/C Choc Choc Chip 1L</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-red-600 font-bold">Rs. 1,198.00</span>
                <span className="text-gray-400 line-through text-sm">Rs. 1,300.00</span>
              </div>
              <div className="flex gap-1 mt-2">
                <span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-gray-300">★</span>
              </div>
            </div>
          </Link>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center relative min-h-[320px]">
            <span className="absolute left-4 top-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">20%</span>
            <span className="absolute right-4 top-4 text-green-500 cursor-pointer">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            </span>
            <img src={watermelonImg} alt="Watermelon" loading="lazy" className="h-24 object-contain my-4" />
            <div className="font-semibold text-center mt-2">Melon - Red Fantasy</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-600 font-bold">Rs. 160.00</span>
              <span className="text-gray-400 line-through text-sm">Rs. 180.00</span>
            </div>
            <div className="flex gap-1 mt-2">
              <span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-gray-300">★</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center relative min-h-[320px]">
            <span className="absolute left-4 top-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">20%</span>
            <span className="absolute right-4 top-4 text-green-500 cursor-pointer">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            </span>
            <img src={mangoImg} alt="Mango" loading="lazy" className="h-24 object-contain my-4" />
            <div className="font-semibold text-center mt-2">Mango - Vlad</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-600 font-bold">Rs. 1,110.00</span>
              <span className="text-gray-400 line-through text-sm">Rs. 1,300.00</span>
            </div>
            <div className="flex gap-1 mt-2">
              <span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-gray-300">★</span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center relative min-h-[320px]">
            <span className="absolute left-4 top-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">20%</span>
            <span className="absolute right-4 top-4 text-green-500 cursor-pointer">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            </span>
            <img src={juiceImg} alt="Juice" loading="lazy" className="h-24 object-contain my-4" />
            <div className="font-semibold text-center mt-2">Sozo Juice Pani Dodang Salt 1L</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-600 font-bold">Rs. 1,691.50</span>
              <span className="text-gray-400 line-through text-sm">Rs. 1,700.00</span>
            </div>
            <div className="flex gap-1 mt-2">
              <span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-gray-300">★</span>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center relative min-h-[320px]">
            <span className="absolute left-4 top-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">20%</span>
            <span className="absolute right-4 top-4 text-green-500 cursor-pointer">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            </span>
            <img src={beetrootImg} alt="Beetroot" loading="lazy" className="h-24 object-contain my-4" />
            <div className="font-semibold text-center mt-2">Beetroot</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-600 font-bold">Rs. 590.00</span>
              <span className="text-gray-400 line-through text-sm">Rs. 650.00</span>
            </div>
            <div className="flex gap-1 mt-2">
              <span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-gray-300">★</span>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center relative min-h-[320px]">
            <span className="absolute left-4 top-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">20%</span>
            <span className="absolute right-4 top-4 text-green-500 cursor-pointer">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            </span>
            <img src={funBiscuitsImg} alt="Fun Biscuits" loading="lazy" className="h-24 object-contain my-4" />
            <div className="font-semibold text-center mt-2">Kist Choco Fun Biscuit 100g</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-600 font-bold">Rs. 240.00</span>
              <span className="text-gray-400 line-through text-sm">Rs. 250.00</span>
            </div>
            <div className="flex gap-1 mt-2">
              <span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-yellow-400">★</span><span className="text-gray-300">★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <Suspense fallback={<div className="w-full text-center py-8">Loading testimonials...</div>}>
        <Testimonials />
      </Suspense>

      {/* Features/Benefits */}
      <section className="relative w-full py-16 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-left mb-12">
              We’re Not Just a Supermarket — We’re Your <span className="text-green-600">Healthy Habit Partner.</span>
            </h2>
            <div className="flex flex-wrap gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-10 flex flex-col items-center min-w-[220px] max-w-[260px] flex-1">
                <span className="text-green-500 text-4xl mb-4">
                  <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Zm-1-13h2v6h-2Zm0 8h2v2h-2Z"/></svg>
                </span>
                <div className="font-bold mb-2 text-center text-base">Smart Product Recommendations</div>
                <div className="text-gray-600 text-sm text-center">Personalized suggestions for your needs.</div>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-10 flex flex-col items-center min-w-[220px] max-w-[260px] flex-1">
                <span className="text-green-500 text-4xl mb-4">
                  <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2l4 4l8-8l2 2l-10 10z"/></svg>
                </span>
                <div className="font-bold mb-2 text-center text-base">Seamless Shopping Experience</div>
                <div className="text-gray-600 text-sm text-center">Easy navigation and smooth, fast checkout.</div>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-10 flex flex-col items-center min-w-[220px] max-w-[260px] flex-1">
                <span className="text-green-500 text-4xl mb-4">
                  <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </span>
                <div className="font-bold mb-2 text-center text-base">Real Time Order & Stock Tracking</div>
                <div className="text-gray-600 text-sm text-center">View what’s in stock & where your order is.</div>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-10 flex flex-col items-center min-w-[220px] max-w-[260px] flex-1">
                <span className="text-green-500 text-4xl mb-4">
                  <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4h4"/></svg>
                </span>
                <div className="font-bold mb-2 text-center text-base">Instant Notifications & Customer Support</div>
                <div className="text-gray-600 text-sm text-center">Stay informed & resolve any issues quickly.</div>
              </div>
            </div>
          </div>
          {/* Healthy Habit Image */}
          <div className="flex-shrink-0 flex items-center justify-center h-full">
            <img src={healthyHabitImg} alt="Healthy Habit" className="h-[420px] w-auto object-contain" width="420" height="420" />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Suspense fallback={<div className="w-full text-center py-8">Loading newsletter...</div>}>
        <Newsletter />
      </Suspense>

      {/* Footer Section */}
      <Suspense fallback={<div className="w-full bg-green-600 text-white text-center py-8">Loading footer...</div>}>
        <Footer />
      </Suspense>
      {/* Floating WhatsApp and Up Arrow Icons */}
      {showFloatingIcons && (
        <>
          {/* WhatsApp Icon - bottom right */}
          <a
            href="https://wa.me/94719950940"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full shadow-lg p-3 hover:bg-green-600 transition"
            style={{ boxShadow: '0 4px 24px rgba(34,197,94,0.25)' }}
            title="Chat on WhatsApp"
          >
            <img src={whatsappLogo} alt="WhatsApp" width="40" height="40" className="w-10 h-10" />
          </a>
          {/* Up Arrow Icon - bottom left */}
          <button
            onClick={handleScrollToTop}
            className="fixed bottom-6 left-6 z-50 bg-gray-800 rounded-full shadow-lg p-3 hover:bg-gray-900 transition flex items-center justify-center"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
            title="Go to Top"
          >
            <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="8 14 12 10 16 14"/></svg>
          </button>
        </>
      )}
    </div>
  )
}

export default Home;
