import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const OrderSuccess = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="text-center max-w-md">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h2>
            <p className="text-gray-600 mb-8">We couldn't find your order details. Please try again.</p>
            <Link
              to="/"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Successful!</h1>
          <p className="text-xl text-gray-600">Your order has been placed successfully and is ready for pickup.</p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Order Information */}
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Order ID:</span>
                <span className="font-bold text-green-600">{orderDetails.orderId}</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Order Date:</span>
                <span className="font-semibold">{orderDetails.orderDate}</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Order Time:</span>
                <span className="font-semibold">{orderDetails.orderTime}</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Customer Name:</span>
                <span className="font-semibold">John Doe</span>
              </div>
            </div>

            {/* Pickup Information */}
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <span className="font-medium text-gray-700">Pickup Status:</span>
                <span className="font-bold text-green-600">Ready for Pickup</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Store Location:</span>
                <span className="font-semibold">DNK Supermarket</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Pickup Time:</span>
                <span className="font-semibold">Within 30 minutes</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Payment Method:</span>
                <span className="font-semibold">Cash on Pickup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Order Items</h3>
          
          <div className="space-y-4">
            {orderDetails.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                    width="64"
                    height="64"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <span className="font-bold text-green-600">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">Rs. {orderDetails.subtotal.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-semibold">
                {orderDetails.deliveryFee === 0 ? 'Free' : `Rs. ${orderDetails.deliveryFee}`}
              </span>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between text-xl font-bold text-green-600">
                <span>Total</span>
                <span>Rs. {orderDetails.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-yellow-50 rounded-xl p-6 mb-8 text-left border border-yellow-300">
          <h2 className="text-xl font-bold text-yellow-800 mb-4">Pickup Information</h2>
          <p className="text-yellow-700">Your order is ready for pickup at our store within **30 minutes**.</p>
          <p className="text-yellow-700 mt-2">Please bring your **Order ID: {orderDetails.orderId}** for verification.</p>
          <p className="text-yellow-700 mt-2">Store Address: 123 Main Street, Colombo, Sri Lanka</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/track-order" className="bg-green-600 text-white py-3 px-6 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Track Order
          </Link>
          <button onClick={handlePrint} className="bg-blue-600 text-white py-3 px-6 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m0 0v4a2 2 0 002 2h4a2 2 0 002-2v-4m-7 0H7m6 0h-6"/>
            </svg>
            Print Receipt
          </button>
          <Link to="/" className="bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-bold text-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Important Notice */}
        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Please bring your order ID when picking up your items</li>
                <li>• Orders are held for 24 hours after placement</li>
                <li>• Payment is due at pickup (cash or card accepted)</li>
                <li>• Contact us at 0719950940 if you have any questions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default OrderSuccess; 