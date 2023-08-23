import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter, Route, and Routes
import "./App.css";
import Home from "./components/Home/Home"; // Update the path based on your actual structure
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AuthComponent from "./components/register/AuthComponent";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Header, navigation, or other common components can go here */}
        
        <Sidebar/>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthComponent/>} />
        </Routes>
      </div>

      <Footer/>

    </Router>
  );
}

export default App;
