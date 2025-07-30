import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import ProductDetail from './ProductDetail.jsx'
import Categories from './Categories.jsx'
import Cart from './Cart.jsx'
import OrderSuccess from './OrderSuccess.jsx'
import TrackOrder from './TrackOrder.jsx'
import AdminLogin from './AdminLogin.jsx'
import AdminDashboard from './AdminDashboard.jsx'
import AdminOverview from './AdminOverview.jsx'
import AdminOrders from './AdminOrders.jsx'

// Register service worker for better performance
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/track-order" element={<TrackOrder />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="dashboard" element={<AdminOverview />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="" element={<AdminOverview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
