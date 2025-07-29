import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx';
import ProductDetail from './ProductDetail.jsx';
import Categories from './Categories.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
