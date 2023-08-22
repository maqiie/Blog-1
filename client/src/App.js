import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import './App.css';
import Register from './components/register/register';
import Home from './components/Home/Home'; // Update the path based on your actual structure



function App() {
  return (
    <Router>
      <div className="App">
        {/* Header, navigation, or other common components can go here */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path='/' element={<Home />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
