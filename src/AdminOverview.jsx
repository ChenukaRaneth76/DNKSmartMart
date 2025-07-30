import React from 'react';
import { Link } from 'react-router-dom';

const AdminOverview = () => {
  // Mock data for demonstration
  const stats = [
    { name: 'Total Orders', value: '1,234', icon: '📦', color: 'blue', change: '+12%', changeType: 'positive' },
    { name: 'Total Revenue', value: 'Rs. 567,890', icon: '💰', color: 'green', change: '+8%', changeType: 'positive' },
    { name: 'Total Customers', value: '567', icon: '👥', color: 'purple', change: '+15%', changeType: 'positive' },
    { name: 'Pending Orders', value: '42', icon: '⏳', color: 'yellow', change: '-5%', changeType: 'negative' },
  ];

  const recentOrders = [
    { id: 'DNK1001', customer: 'Alice Smith', total: 'Rs. 1,250.00', status: 'pending', date: '2024-07-29', time: '10:30 AM' },
    { id: 'DNK1002', customer: 'Bob Johnson', total: 'Rs. 3,400.00', status: 'confirmed', date: '2024-07-29', time: '09:15 AM' },
    { id: 'DNK1003', customer: 'Charlie Brown', total: 'Rs. 890.00', status: 'ready', date: '2024-07-28', time: '02:45 PM' },
    { id: 'DNK1004', customer: 'Diana Prince', total: 'Rs. 2,100.00', status: 'completed', date: '2024-07-28', time: '11:20 AM' },
    { id: 'DNK1005', customer: 'Eve Adams', total: 'Rs. 1,500.00', status: 'pending', date: '2024-07-27', time: '04:30 PM' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'ready': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return '⏳';
      case 'confirmed': return '✅';
      case 'ready': return '📦';
      case 'completed': return '🎉';
      default: return '❓';
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600 mt-1">Welcome to your admin dashboard. Here's what's happening today.</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Last updated</p>
            <p className="text-sm font-medium text-gray-900">{new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-xs font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-1">from last month</span>
                </div>
              </div>
              <div className={`text-3xl ${stat.color === 'blue' ? 'text-blue-500' : 
                stat.color === 'green' ? 'text-green-500' : 
                stat.color === 'purple' ? 'text-purple-500' : 'text-yellow-500'}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
            <Link to="/admin/orders" className="text-green-600 hover:text-green-700 text-sm font-medium">
              View all orders →
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                      <span className="mr-1">{getStatusIcon(order.status)}</span>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>
                      <div>{order.date}</div>
                      <div className="text-xs text-gray-400">{order.time}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/admin/orders/${order.id}`} className="text-green-600 hover:text-green-900">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center justify-center p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors group">
            <span className="text-2xl mr-3">➕</span>
            <div className="text-left">
              <div className="font-medium text-green-900">Add Product</div>
              <div className="text-sm text-green-600">Create new product</div>
            </div>
          </button>
          <button className="flex items-center justify-center p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors group">
            <span className="text-2xl mr-3">📦</span>
            <div className="text-left">
              <div className="font-medium text-blue-900">View Orders</div>
              <div className="text-sm text-blue-600">Manage all orders</div>
            </div>
          </button>
          <button className="flex items-center justify-center p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors group">
            <span className="text-2xl mr-3">👥</span>
            <div className="text-left">
              <div className="font-medium text-purple-900">Customers</div>
              <div className="text-sm text-purple-600">View customer list</div>
            </div>
          </button>
          <button className="flex items-center justify-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors group">
            <span className="text-2xl mr-3">📊</span>
            <div className="text-left">
              <div className="font-medium text-yellow-900">Analytics</div>
              <div className="text-sm text-yellow-600">View reports</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview; 