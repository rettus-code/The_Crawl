import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Auth } from './pages/auth';
import { Crawl } from './pages/crawl';
import React, { useState, useEffect } from 'react';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/Crawl" element={<Crawl />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
