import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import iceCreamImg from './assets/IMG/ice-cream.webp';
import mangoImg from './assets/IMG/mango.webp';
import watermelonImg from './assets/IMG/watermelon.webp';
import funBiscuitsImg from './assets/IMG/fun-biscuits.webp';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const product = {
      id: 'ice-cream-1',
      name: 'Imorich I/C Choc Choc Chip 1L',
      price: 'Rs. 1,198.00',
      image: iceCreamImg,
      quantity: quantity
    };

    // Get existing cart from localStorage
    const existingCart = localStorage.getItem('cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];

    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === product.id);

    if (existingItemIndex >= 0) {
      // Update quantity if product already exists
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new product to cart
      cart.push(product);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Trigger cart update event for Navbar
    window.dispatchEvent(new Event('cartUpdated'));

    // Show success message (you can add a toast notification here)
    alert('Product added to cart successfully!');
  };

  const handleQuantityChange = (increment) => {
    const newQuantity = quantity + increment;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const suggestedProducts = [
    {
      id: 1,
      name: 'Mango - Vilad',
      price: 'Rs 1,110.00',
      originalPrice: 'Rs 1,300.00',
      image: mangoImg,
      discount: '20%'
    },
    {
      id: 2,
      name: 'Melon - Red Fantasy',
      price: 'Rs 890.00',
      originalPrice: 'Rs 1,100.00',
      image: watermelonImg,
      discount: '20%'
    },
    {
      id: 3,
      name: 'Kist Choco Fun Biscuit 100g',
      price: 'Rs 1,250.00',
      originalPrice: 'Rs 1,500.00',
      image: funBiscuitsImg,
      discount: '20%'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      {/* Product Detail Section */}
      <section className="relative w-full py-16 bg-white flex-1">
        {/* Faded background text */}
        <span className="absolute right-4 top-6 text-[64px] md:text-[90px] font-extrabold text-green-200 opacity-30 select-none pointer-events-none z-0 rotate-90" style={{fontFamily:"'Poppins', sans-serif"}}>Products</span>
        
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Product Image */}
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl border-2 border-green-100 shadow-lg p-8 max-w-md">
                <img
                  src={iceCreamImg}
                  alt="Imorich I/C Choc Choc Chip 1L"
                  className="w-full h-auto object-contain"
                  width="500"
                  height="500"
                />
              </div>
            </div>

            {/* Right Column - Product Information */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">Imorich I/C Choc Choc Chip 1L</h1>
              
              <div className="text-3xl font-bold text-red-600">Rs 1,198.00</div>
              
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-gray-300 text-xl">★</span>
                </div>
                <span className="text-gray-600 text-sm">(4.0 rating)</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-medium">In Stock</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-medium">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x border-gray-300 font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Items Section */}
      <section className="relative w-full py-16 bg-gray-50">
        {/* Faded background text */}
        <span className="absolute left-1/2 top-6 -translate-x-1/2 text-[64px] md:text-[90px] font-extrabold text-gray-200 opacity-40 select-none pointer-events-none z-0" style={{fontFamily:"'Poppins', sans-serif"}}>Products</span>
        
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Suggest Items</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suggestedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center relative">
                {/* Discount Badge */}
                <span className="absolute left-4 top-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.discount}
                </span>
                
                {/* Cart Icon */}
                <span className="absolute right-4 top-4 text-green-500 cursor-pointer">
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 12h8M12 8v8"/>
                  </svg>
                </span>
                
                {/* Product Image */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-24 object-contain my-4"
                />
                
                {/* Product Name */}
                <div className="font-semibold text-center mt-2">{product.name}</div>
                
                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-red-600 font-bold">{product.price}</span>
                  <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mt-2">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-300">★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail; 