import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import appleImg from './assets/IMG/apple.jpg';
import papayaImg from './assets/IMG/papaya.jpg';
import bananaImg from './assets/IMG/banana.jpg';
import avacadoImg from './assets/IMG/avacado.jpg';
import delumImg from './assets/IMG/delum.jpg';
import dragonfruitImg from './assets/IMG/dragon-fruit.jpg';
import mangoImg from './assets/IMG/mango.webp';
import watermelonImg from './assets/IMG/watermelon.webp';
import grapesImg from './assets/IMG/grapes.jpg';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Fresh Organic Foods');

  const categories = [
    { name: 'Fresh Organic Foods', icon: '🥬' },
    { name: 'Organic Vegetables', icon: '🥕' },
    { name: 'Meat Collection', icon: '🥩' },
    { name: 'Dairy Products', icon: '🥛' },
    { name: 'Bakery Items', icon: '🍞' },
    { name: 'Fresh Fruits', icon: '🍎' },
    { name: 'Snacks & Biscuits', icon: '🍪' },
    { name: 'Beverages', icon: '🥤' },
    { name: 'Frozen Foods', icon: '🧊' },
  ];

  const freshOrganicProducts = [
    {
      id: 1,
      name: 'Apple',
      price: 'Rs 180.00',
      originalPrice: 'Rs 220.00',
      image: appleImg,
      discount: '18%',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Papaya',
      price: 'Rs 250.00',
      originalPrice: 'Rs 300.00',
      image: papayaImg,
      discount: '17%',
      rating: 4.3
    },
    {
      id: 3,
      name: 'Banana',
      price: 'Rs 320.00',
      originalPrice: 'Rs 380.00',
      image: bananaImg,
      discount: '16%',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Avacdo',
      price: 'Rs 150.00',
      originalPrice: 'Rs 180.00',
      image: avacadoImg,
      discount: '17%',
      rating: 4.2
    },
    {
      id: 5,
      name: 'Delum',
      price: 'Rs 200.00',
      originalPrice: 'Rs 240.00',
      image: delumImg,
      discount: '17%',
      rating: 4.6
    },
    {
      id: 6,
      name: 'Dragon Fruit',
      price: 'Rs 120.00',
      originalPrice: 'Rs 150.00',
      image: dragonfruitImg,
      discount: '20%',
      rating: 4.4
    },
    {
      id: 7,
      name: 'Mango',
      price: 'Rs 280.00',
      originalPrice: 'Rs 340.00',
      image: mangoImg,
      discount: '18%',
      rating: 4.8
    },
    {
      id: 8,
      name: 'Watermelon',
      price: 'Rs 190.00',
      originalPrice: 'Rs 230.00',
      image: watermelonImg,
      discount: '17%',
      rating: 4.1
    },
    {
      id: 9,
      name: 'Grapes Red',
      price: 'Rs 160.00',
      originalPrice: 'Rs 200.00',
      image: grapesImg,
      discount: '20%',
      rating: 4.5
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Categories Header */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Top Categories</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'border-green-500 bg-green-500 text-white shadow-lg'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">{selectedCategory}</h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Sort by:</span>
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {freshOrganicProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center relative">
                {/* Discount Badge */}
                <span className="absolute left-4 top-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.discount}
                </span>
                
                {/* Cart Icon */}
                <span className="absolute right-4 top-4 text-green-500 cursor-pointer hover:text-green-600 transition">
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 12h8M12 8v8"/>
                  </svg>
                </span>
                
                {/* Product Image */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                  width="128"
                  height="128"
                  className="h-32 object-contain my-4"
                />
                
                {/* Product Name */}
                <div className="font-semibold text-center mt-2 text-gray-800">{product.name}</div>
                
                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-red-600 font-bold text-lg">{product.price}</span>
                  <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">({product.rating})</span>
                </div>
                
                {/* Add to Cart Button */}
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg mt-4 transition duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories; 