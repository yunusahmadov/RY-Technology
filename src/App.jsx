import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Footer from './components/Footer';
import ContactsPage from './pages/ContactsPage/ContactsPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/products" element={<ProductsPage />}/>
      <Route path="/contacts" element={<ContactsPage />}/>

    </Routes>
  </BrowserRouter>
  )
}

export default App