import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const TrackOrder = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [currentStatus, setCurrentStatus] = useState('pending');
  const [loading, setLoading] = useState(true);

  // Memoize order statuses to prevent unnecessary re-renders
  const orderStatuses = useMemo(() => [
    {
      id: 'pending',
      title: 'Order Placed',
      description: 'Your order has been placed successfully',
      icon: '📋',
      color: 'bg-blue-500',
      completed: true
    },
    {
      id: 'confirmed',
      title: 'Order Confirmed',
      description: 'Store has confirmed your order',
      icon: '✅',
      color: 'bg-green-500',
      completed: currentStatus === 'confirmed' || currentStatus === 'ready' || currentStatus === 'completed'
    },
    {
      id: 'ready',
      title: 'Ready for Pickup',
      description: 'Your order is ready at the store',
      icon: '📦',
      color: 'bg-yellow-500',
      completed: currentStatus === 'ready' || currentStatus === 'completed'
    },
    {
      id: 'completed',
      title: 'Order Completed',
      description: 'Order has been picked up successfully',
      icon: '🎉',
      color: 'bg-green-600',
      completed: currentStatus === 'completed'
    }
  ], [currentStatus]);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      try {
        const order = JSON.parse(savedOrder);
        setOrderDetails(order);
        setCurrentStatus(order.status || 'pending');
      } catch (error) {
        console.error('Error parsing order data:', error);
      }
    }
    setLoading(false);
  }, []);

  // Optimized status updates with cleanup
  useEffect(() => {
    if (!orderDetails) return;

    const statusUpdates = [
      { status: 'confirmed', delay: 5000, message: 'Store has confirmed your order' },
      { status: 'ready', delay: 15000, message: 'Your order is ready for pickup' },
      { status: 'completed', delay: 30000, message: 'Order has been picked up successfully' }
    ];

    const timers = statusUpdates.map((update) => {
      return setTimeout(() => {
        if (currentStatus === update.status) return;
        
        setOrderDetails(prev => {
          if (!prev) return prev;
          
          const updatedOrder = {
            ...prev,
            status: update.status,
            statusHistory: [
              ...prev.statusHistory,
              {
                status: update.status,
                message: update.message,
                timestamp: new Date().toISOString()
              }
            ]
          };
          
          localStorage.setItem('lastOrder', JSON.stringify(updatedOrder));
          return updatedOrder;
        });
        
        setCurrentStatus(update.status);
      }, update.delay);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [orderDetails, currentStatus]);

  // Memoized utility functions
  const getStatusColor = useMemo(() => (status) => {
    const colors = {
      pending: 'text-blue-600',
      confirmed: 'text-green-600',
      ready: 'text-yellow-600',
      completed: 'text-green-700'
    };
    return colors[status] || 'text-gray-600';
  }, []);

  const getStatusBgColor = useMemo(() => (status) => {
    const colors = {
      pending: 'bg-blue-100',
      confirmed: 'bg-green-100',
      ready: 'bg-yellow-100',
      completed: 'bg-green-100'
    };
    return colors[status] || 'bg-gray-100';
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  // No order state
  if (!orderDetails) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">No Order Found</h2>
          <p className="text-gray-600 mb-8">It seems there are no recent order details to track.</p>
          <Link to="/" className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
            Start Shopping
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const currentStatusData = orderStatuses.find(s => s.id === currentStatus);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 pb-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Track Your Order</h1>
          <p className="text-gray-600">Order ID: {orderDetails.orderId}</p>
        </div>

        {/* Current Status Card */}
        <div className={`${getStatusBgColor(currentStatus)} rounded-2xl p-6 mb-8 text-center`}>
          <div className="text-4xl mb-4">{currentStatusData?.icon}</div>
          <h2 className={`text-2xl font-bold ${getStatusColor(currentStatus)} mb-2`}>
            {currentStatusData?.title}
          </h2>
          <p className="text-gray-700">{currentStatusData?.description}</p>
        </div>

        {/* Progress Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Order Progress</h3>
          
          <div className="space-y-6">
            {orderStatuses.map((status, index) => (
              <div key={status.id} className="flex items-start gap-4 relative">
                {/* Status Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl ${
                  status.completed ? status.color : 'bg-gray-300'
                }`}>
                  {status.completed ? status.icon : '⏳'}
                </div>
                
                {/* Status Content */}
                <div className="flex-1">
                  <h4 className={`font-semibold text-lg ${
                    status.completed ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {status.title}
                  </h4>
                  <p className={`${
                    status.completed ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {status.description}
                  </p>
                  {status.id === currentStatus && (
                    <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                      Current Status
                    </span>
                  )}
                </div>
                
                {/* Connector Line */}
                {index < orderStatuses.length - 1 && (
                  <div className={`absolute left-6 w-0.5 h-12 ${
                    status.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`} style={{ marginTop: '48px' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Order Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Order Information</h4>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Order ID:</span> {orderDetails.orderId}</p>
                <p><span className="font-medium">Date:</span> {orderDetails.orderDate}</p>
                <p><span className="font-medium">Time:</span> {orderDetails.orderTime}</p>
                <p><span className="font-medium">Status:</span> 
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusBgColor(currentStatus)} ${getStatusColor(currentStatus)}`}>
                    {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
                  </span>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Pickup Information</h4>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Store:</span> DNK SUPER</p>
                <p><span className="font-medium">Address:</span> 123 Main Street, Colombo</p>
                <p><span className="font-medium">Phone:</span> +94 71 995 0940</p>
                <p><span className="font-medium">Hours:</span> 8:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Order Items</h3>
          
          <div className="space-y-4">
            {orderDetails.items.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-contain rounded-lg" 
                  loading="lazy"
                  width="64"
                  height="64"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-green-600 font-bold">{item.price}</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-600">Qty: {item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 mt-6 pt-6">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span className="text-green-600">Rs. {orderDetails.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="bg-green-600 text-white py-3 px-6 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2l4 4l8-8l2 2l-10 10z"/>
            </svg>
            Continue Shopping
          </Link>
          <button 
            onClick={() => window.print()} 
            className="bg-blue-600 text-white py-3 px-6 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m0 0v4a2 2 0 002 2h4a2 2 0 002-2v-4m-7 0H7m6 0h-6"/>
            </svg>
            Print Receipt
          </button>
        </div>
      </main>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default TrackOrder; 