import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import './App.css';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import UnderConstruction from './components/pages/UnderConstruction';

// used Routes instead of Switch, maybe not the exact same functionality

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/under-construction' exact element={<UnderConstruction />} />
        </Routes>
        <Footer />
    </Router>
    </>
  );
}

export default App;
