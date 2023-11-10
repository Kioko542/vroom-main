// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/products';
import Contact from './components/Contact';
import Login from './components/Login'; // Import Login
import ProductList from './components/productList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set the initial login state

  return (
    <Router>
      <div className="App">
        
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> {/* Pass login state and update function */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Contact />} />
          <Route path="/" exact component={ProductList} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> {/* Pass the setIsLoggedIn function */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

