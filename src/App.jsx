import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Footer from './components/Footer';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/products" element={<ProductsPage />}/>
      <Route path="/contacts" element={<ContactsPage />}/>
      <Route path="/about-us" element={<AboutPage />}/>
      <Route path="/services" element={<ServicesPage />}/>



    </Routes>
  </BrowserRouter>
  )
}

export default App