import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    setLoading(false);
  }, []);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }

    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('Rs. ', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const pickupFee = subtotal > 2000 ? 0 : 100;
    return subtotal + pickupFee;
  };

  const handleOrderNow = () => {
    const orderId = 'DNK' + Date.now();
    const orderDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const orderTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const orderDetails = { 
      orderId, 
      orderDate, 
      orderTime, 
      items: cartItems, 
      subtotal: calculateSubtotal(), 
      pickupFee: calculateSubtotal() > 2000 ? 0 : 100, 
      total: calculateTotal(),
      status: 'pending',
      statusHistory: [
        {
          status: 'pending',
          message: 'Order placed successfully',
          timestamp: new Date().toISOString()
        }
      ]
    };
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
    localStorage.removeItem('cart');
    setCartItems([]);
    window.dispatchEvent(new Event('cartUpdated'));
    navigate('/order-success');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading cart...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="text-center max-w-md">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link
              to="/"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 pb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4 last:border-b-0">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-lg" width="80" height="80" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-green-600 font-bold mt-1">{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">-</button>
                    <span className="px-4 py-1 border-x border-gray-300">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition">+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 transition">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg p-6 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-3 text-gray-700 mb-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold">Rs. {calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Pickup Fee:</span>
                <span className="font-semibold">Rs. {calculateSubtotal() > 2000 ? '0.00 (Free)' : '100.00'}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-green-700 pt-4 border-t border-gray-200">
                <span>Total:</span>
                <span>Rs. {calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            <button onClick={handleOrderNow} className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Cart; 