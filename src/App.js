import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import './App.css';

// used Routes instead of Switch, maybe not the exact same functionality

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
